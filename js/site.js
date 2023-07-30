document.getElementById("currentYear").appendChild(document.createTextNode(new Date().getFullYear()))


window.addEventListener("load", function() {
    setTimeout(function() {
        var link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "../css/hover.css";
        document.head.appendChild(link);
    }, document.title === "Mykyta Hromov" ? 3000 : 2000);
});


const json_path = `../json/${window.location.pathname != '/' ? window.location.pathname.split('/').pop().split('.')[0].toLowerCase() : 'index'}.json`;
const lang_button = document.getElementById('lang-button');
lang_button.addEventListener('click', change_language);

let current_lang = localStorage.getItem('language');
if (current_lang === null) {
    translate_page('en');
}
else {
    translate_page(current_lang);
}

function change_language() {
    current_lang == 'en' ? translate_page('cz') : translate_page('en');
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
    current_lang = language;
}
