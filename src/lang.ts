class Lang {
    static readonly LangCacheKey = '_lang_';

    private _lang: string | null = null;

    get lang() {
        return this._lang;
    }

    constructor() {
        this._lang = localStorage.getItem(Lang.LangCacheKey);
    }

    t = (name: string) => name;

    change = (langName: string) => {
        localStorage.setItem(Lang.LangCacheKey, langName);
        this._lang = langName;
    }
}

export default new Lang();
