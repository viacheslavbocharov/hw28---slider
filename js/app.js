let slideIndex = 1;
showSlide(slideIndex);
let inter = setInterval(changeSlide, 3000, 1);

document.querySelector('.btn-prev').addEventListener('click', () => {
    changeSlide(-1);
    resetInterval();
});

document.querySelector('.btn-next').addEventListener('click', () => {
    changeSlide(1);
    resetInterval();
});


