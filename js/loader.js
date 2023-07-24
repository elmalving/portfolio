const page = document.querySelector(".after-load");
const pre_loader = document.querySelector(".pre-loader");

window.addEventListener("load", function() {
    setTimeout(function() {
        page.style.display = "flex";
        pre_loader.style.display = "none";
    }, 1000);
});
