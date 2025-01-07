const slides = document.querySelectorAll(".slide");
var counter = 0;

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

const slideImage = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
};

const goRight = () => {
    if (counter < slides.length - 1) {
        counter++;
    } else {
        counter = 0; // Loop back to the first slide if at the end
    }
    slideImage();
};

const goLeft = () => {
    if (counter > 0) {
        counter--;
    } else {
        counter = slides.length - 1; // Loop back to the last slide if at the start
    }
    slideImage();
};
