const center = document.querySelector(".klient .bottom .center");
const cards = document.querySelector(".klient .bottom .center .cards");
const cardWidth = cards.clientWidth;

document.querySelector(".prev-btn").addEventListener("click", function() {
    scrollCards(-cardWidth);
});

document.querySelector(".next-btn").addEventListener("click", function() {
    scrollCards(cardWidth);
});

function scrollCards(scrollDistance) {
    center.scrollBy({
        left: scrollDistance,
        behavior: "smooth"
    });
}

// ________________________________________________________________________________________________________

const konsultatsiya = document.querySelector(".konsultatsiya");
const konsultatsiya_opener = document.querySelectorAll(".open-konsultatsiya");
const konsultatsiya_closer = document.querySelector(".konsultatsiya-closer");
const zayavka_opener = document.querySelectorAll(".zayavka-opener");
const zayavka = document.querySelector(".zayavka");
const zayavka_closer = document.querySelectorAll(".zayavka-closer");
const choose_form = document.querySelector('.choose .bottom form');
const warning = document.querySelector('.warning');

konsultatsiya_opener.forEach((item) => {
    item.addEventListener("click", function() {
        konsultatsiya.style.display = "flex";
    })
})

konsultatsiya_closer.addEventListener("click", function() {
    konsultatsiya.style.display = "none";
});

zayavka_closer.forEach((item) => {
    item.addEventListener("click", function() {
        zayavka.style.display = "none";
    });
})

function isFormValid(form) {
    const inputs = form.querySelectorAll('input[required]');
    for (const input of inputs) {
        if (!input.value.trim()) {
            return false;
        }
    }
    return true;
}

document.querySelectorAll('form').forEach((form) => {
    form.addEventListener('submit', function(event) {
        if (!isFormValid(form)) {
            event.preventDefault();
            alert('Please fill in all required fields.');
        }
    });
});

let warningTimeout; 

zayavka_opener.forEach((item) => {
    item.addEventListener("click", function() {
        if (isFormValid(document.querySelector('.konsultatsiya form'))) {
            konsultatsiya.style.display = "none";
            warning.style.display = "none";
            zayavka.style.display = "flex";
        } else if (isFormValid(choose_form)) {
            warning.style.display = "none";
            zayavka.style.display = "flex";
        } else {
            warning.style.display = "flex";
            warning.classList.add("warning_anim");

            clearTimeout(warningTimeout);
            warningTimeout = setTimeout(() => {
                warning.style.display = "none";
                warning.classList.remove("warning_anim");
            }, 3900);
        }
    });
});

function warning_closer() {
    warning.style.display = 'none';
    warning.classList.remove("warning_anim");
    
    clearTimeout(warningTimeout);
}