const getMultiLang = (aze, rus, eng) => {

    return localStorage.getItem("i18nextLng") === "az" ?
        aze :
        localStorage.getItem("i18nextLng") === "ru" ?
        rus :
        localStorage.getItem("i18nextLng") === "en" ?
        eng :
        aze;
};

export {
    getMultiLang
};