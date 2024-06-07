let newSlideIndex = 0;
showNewSlides(newSlideIndex);

function currentNewSlide(n) {
    showNewSlides(newSlideIndex = n);
}

function showNewSlides(n) {
    let i;
    const slides = document.querySelectorAll('.new-slide');
    const dots = document.querySelectorAll('.new-dot');
    if (n >= slides.length) { newSlideIndex = 0 }
    if (n < 0) { newSlideIndex = slides.length - 1 }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
    }
    slides[newSlideIndex].style.display = 'block';
    dots[newSlideIndex].className += ' active';
}
