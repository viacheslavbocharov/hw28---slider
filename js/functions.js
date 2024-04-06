function changeSlide(n) {
    showSlide(slideIndex += n);
}


function showSlide(n) {
    const slides = document.getElementsByClassName("slides")[0].getElementsByTagName("img");
    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}

function resetInterval() {
    clearInterval(inter);
    inter = setInterval(changeSlide, 3000, 1);
}