const center = document.querySelector(".klient .bottom .center");
const cards = document.querySelector(".klient .bottom .center .cards");
const cardWidth = cards.clientWidth;

document.querySelector(".prev-btn").addEventListener("click", function () {
    scrollCards(-cardWidth);
});

document.querySelector(".next-btn").addEventListener("click", function () {
    scrollCards(cardWidth);
});

function scrollCards(scrollDistance) {
    center.scrollBy({
        left: scrollDistance,
        behavior: "smooth"
    });
}
