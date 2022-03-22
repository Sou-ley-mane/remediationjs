var slidePosition = 1;
SlideShow(slidePosition);

function plusSlides(n) {
    SlideShow(slidePosition += n);

}

function currentSlide(n) {
    SlideShow(slidePosition = n);

}

function SlideShow(n) {
    var i;
    var slides = document.getElementsByClassName("conteners")
    var circles = document.getElementsByClassName("dots")

    if (n > slides.length) {
        slidePosition = 1

    }
    if (n < 1) {
        slidePosition = slides.length

    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].style.display = "none";

    }
    for (let i = 0; i < circles.length; i++) {
        circles[i].className = circles[i].className.replace("enable", "")

    }
    slides[slidePosition - 1].style.display = "block";
    circles[slidePosition - 1].className += "enable";


}
// *************************Automatique*********************************
var slidePosition = 0;
SlideShow();

function SlideShow() {
    var i;
    var slides = document.getElementsByClassName("conteners")
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";


    }
    slidePosition++;
    if (slidePosition > slides.length) {
        slidePosition = 1
    }
    slides[slidePosition - 1].style.display = "block"
    setTimeout(SlideShow, 2000);
}
// ***********************************************************
let image = document.querySelectorAll('.img')
image.forEach(img => {
    img.addEventListener('mouseover', () => {
        img.classList.toggle('zoom')
    });

})