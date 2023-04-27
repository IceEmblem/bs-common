import BaseApi, { Entity } from './BaseApi';

interface Sample extends Entity {
    name?: string,
    age?: number
}

class SampleApi extends BaseApi<Sample> {
    url = '/api/user';
}

export default new SampleApi();