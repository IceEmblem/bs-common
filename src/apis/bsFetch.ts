import token from './token';
import { message } from 'antd';

async function bsFetch<T>(input: string, init?: RequestInit | undefined): Promise<T> {
    let newInit: RequestInit = {
        ...init
    };

    if (!newInit.headers) {
        newInit.headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/ld+json'
        }
    }

    if (token.token) {
        (newInit.headers as any)['Authorization'] = `Bearer ${token.token}`;
    }

    let response = await fetch(input, newInit);

    // 再这里处理 html 异步请求结果，如 404 等问题
    if (response.status >= 200 && response.status < 300) {
        if (response.status == 204) {
            return null as T;
        }

        return response.json();
    }

    if (response.status == 401) {
        let error = new Error('401 Authentication failed');
        throw error;
    }

    if (response.status == 404) {
        let error = new Error('404 Resource not found');
        throw error;
    }

    if (response.status >= 400 && response.status < 500) {
        let data = await response.json();
        let error = new Error(`${data['hydra:description'] || 'unknown exception'}`);
        throw error;
    }

    const error = new Error(`${response.status} ${response.statusText}`);
    throw error;
}

const urlRegex = /\?[^\?]+$/;

// 合并url参数到url上
function mergeUrl(url: string, urlParams: any) {
    let newUrl = url;

    if (urlRegex.test(newUrl)) {
        newUrl = newUrl + '&';
    }
    else {
        newUrl = newUrl + '?';
    }

    let urlParamStr = '';
    Object.keys(urlParams).forEach(key => {
        let param = urlParams[key];

        if (param == undefined) {
            return;
        }

        urlParamStr = urlParamStr + `${key}=${encodeURIComponent(param)}&`
    });

    return encodeURI(newUrl) + urlParamStr;
}

export default async function<T>(input: string, init?: RequestInit & {
    urlParams?: any,
    hiddenErrMes?: boolean
} | undefined) {
    try {
        let newUrl = init?.urlParams ? mergeUrl(input, init.urlParams) : input;
        return await bsFetch<T>(newUrl, init);
    }
    catch (ex) {
        if (init?.hiddenErrMes != true) {
            message.error(ex.message);
        }
        throw ex;
    }
}