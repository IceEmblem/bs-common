class Lang {
    private _lang: string | null = null;

    get lang() {
        return this._lang;
    }

    t = (name: string) => name;

    change = (langName: string) => {
        this._lang = langName;
    }
}

export default new Lang();
