const scrollContainer = document.querySelector(".main-text-container");
const textCards = document.querySelectorAll(".text-card");
const containerHeight = scrollContainer.clientHeight;

scrollContainer.addEventListener("scroll", () => {
    const scrollPosition = scrollContainer.scrollTop;
    const containerCenter = containerHeight / 2;

    textCards.forEach((textLayer) => {
    const textLayerTop = textLayer.offsetTop;
    const textLayerCenter = textLayerTop - scrollPosition + textLayer.clientHeight / 2;
    const distanceFromCenter = Math.abs(textLayerCenter - containerCenter);

    const translateZValue = distanceFromCenter / 3;

    textLayer.style.transform = `translateZ(-${translateZValue}px)`;
    });
});