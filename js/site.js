document.getElementById("currentYear").appendChild(document.createTextNode(new Date().getFullYear()))


const json_path = `../json/${window.location.pathname != '/' ? window.location.pathname.split('/').pop().split('.')[0].toLowerCase() : 'index'}.json`;
const lang_button = document.getElementById('lang-button');
lang_button.addEventListener('click', change_language);

const current_lang = get_current_language()
if (current_lang === null) {
    localStorage.setItem('language', 'en');
}
else {
    translate_page(current_lang);
}

function get_current_language() {
    return localStorage.getItem('language');
}

function change_language() {
    const current_lang = get_current_language();
    if (current_lang == 'en') {
        translate_page('cz');
    }
    else {
        translate_page('en');
    }
}

function translate_page(language) {
    lang_button.style.backgroundImage = `url('../img/${language}.svg')`;

    fetch(json_path)
        .then(response => response.json())
        .then(translations => {
            for (const item in translations[language]) {
                document.querySelector(item).innerHTML = translations[language][item];
            }
        })
        .catch(error => console.error('Error reading JSON file:', error));

    localStorage.setItem('language', language);
}
