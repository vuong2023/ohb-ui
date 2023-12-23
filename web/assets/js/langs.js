const supportLangs = [
    {
        name: 'Tiếng Việt',
        value: 'vi-VN',
        icon: '🇻🇳',
    },
];

function getLang() {
    let lang = getCookie('lang');

    if (!lang) {
        if (window.navigator) {
            lang = window.navigator.language || window.navigator.userLanguage;

            if (isSupportLang(lang)) {
                setCookie('lang', lang, 150);
            } else {
                setCookie('lang', 'vi-VN', 150);
                window.location.reload();
            }
        } else {
            setCookie('lang', 'vi-VN', 150);
            window.location.reload();
        }
    }

    return lang;
}

function setLang(lang) {
    if (!isSupportLang(lang)) {
        lang = 'vi-VN';
    }

    setCookie('lang', lang, 150);
    window.location.reload();
}

function isSupportLang(lang) {
    for (l of supportLangs) {
        if (l.value === lang) {
            return true;
        }
    }

    return false;
}
