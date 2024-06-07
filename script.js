let slideIndex = 0;
let startX;

showSlides(slideIndex);
setInterval(() => plusSlides(1), 5000); // Change slide every 5 seconds

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    if (n >= slides.length) { 
        slideIndex = 0; // Reset index to 0 if it exceeds the number of slides
    }
    if (n < 0) { 
        slideIndex = slides.length - 1; // Set index to last slide if it goes below 0
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex].style.display = "block";
    dots[slideIndex].className += " active";
}

function handleTouchStart(evt) {
    startX = evt.touches[0].clientX;
}

function handleTouchMove(evt) {
    if (!startX) return;
    let endX = evt.touches[0].clientX;
    let diffX = startX - endX;

    if (Math.abs(diffX) > 50) {
        if (diffX > 0) {
            plusSlides(1); // Swipe left
        } else {
            plusSlides(-1); // Swipe right
        }
        startX = null;
    }
}

function handleClick(evt) {
    let sliderWidth = evt.currentTarget.offsetWidth;
    let clickX = evt.clientX;

    if (clickX > sliderWidth / 2) {
        plusSlides(1); // Click on right side
    } else {
        plusSlides(-1); // Click on left side
    }
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

const slider = document.querySelector('.slider');
slider.addEventListener('touchstart', handleTouchStart, false);
slider.addEventListener('touchmove', handleTouchMove, false);
slider.addEventListener('click', handleClick);

document.addEventListener('DOMContentLoaded', function() {
    updateSkillCircle('skill1', 90);
    updateSkillCircle('skill2', 75);
    updateSkillCircle('skill3', 80);
});

function updateSkillCircle(id, percentage) {
    const innerCircle = document.getElementById(id);
    const outerCircle = innerCircle.parentElement;
    let currentPercentage = 0;
    const interval = setInterval(() => {
        if (currentPercentage >= percentage) {
            clearInterval(interval);
        } else {
            currentPercentage++;
            innerCircle.textContent = currentPercentage + '%';
            const degree = currentPercentage * 3.6;
            if (degree <= 180) {
                outerCircle.style.backgroundImage = `linear-gradient(${90 + degree}deg, transparent 50%, #e4e3e3 50%), linear-gradient(90deg, #555 50%, transparent 50%)`;
            } else {
                outerCircle.style.backgroundImage = `linear-gradient(${degree - 90}deg, transparent 50%, #555 50%), linear-gradient(90deg, #555 50%, transparent 50%)`;
            }
        }
    }, 20);
}
