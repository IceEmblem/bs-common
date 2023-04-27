type Lang = {
    t: (name: string) => string
}

const lang: Lang = {
    t: (name) => name
}

export default lang;
