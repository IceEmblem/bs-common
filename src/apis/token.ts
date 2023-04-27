class Token {
    readonly tokenStorageKey: string = '_bstoken_';
    token: string | null = null;
    userInfo: any = null;

    init() {
        let token = window.localStorage.getItem(this.tokenStorageKey);
        if (token) {
            this.setToken(token);
        }
    }

    setToken(token: string) {
        let userInfo = this.decodeUserInfo(token);
        if (userInfo) {
            this.userInfo = userInfo;
        }
        this.token = token;
        window.localStorage.setItem(this.tokenStorageKey, token);
    }

    clearToken() {
        this.userInfo = null;
        this.token = null;
    }

    private decodeUserInfo(token: string) {
        var userInfo;
        // 解码 token
        try {
            var strings = token.split(".");
            userInfo = JSON.parse(window.atob(strings[1].replace(/-/g, "+").replace(/_/g, "/")));
        }
        catch (ex) {
        }

        return userInfo;
    }
}

export default new Token();