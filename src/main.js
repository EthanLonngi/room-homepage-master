const headerMenuIcon = document.querySelectorAll(".header__menu-icon");
const headerMenu = document.querySelector(".header__nav");

const sliderLeft = document.querySelector(".slider__left");
const sliderRight = document.querySelector(".slider__right");
const sliderImages = document.querySelectorAll(".slider__image");
const sliderTitle = document.querySelectorAll(".info__title");
const sliderText = document.querySelectorAll(".info__text");
const overlay = document.querySelector(".overlay");
const slides = sliderImages.length - 1;
const sliderActiveStates = [sliderImages, sliderTitle, sliderText];

console.log(sliderActiveStates);

headerMenuIcon.forEach((element) => {
  element.addEventListener("click", () => {
    headerMenu.classList.toggle("active");
    overlay.classList.toggle("active");
  });
});

function setState(slide) {
  sliderActiveStates.forEach((element) => {
    element.item(slide).classList.toggle("active");
    console.log(element.item(slide));
  });
}

let currentSlide = 0;
sliderLeft.addEventListener("click", () => {
  setState(currentSlide);
  currentSlide -= 1;
  if (currentSlide < 0) {
    currentSlide = slides;
    setState(currentSlide);
  } else if (currentSlide >= 0) {
    setState(currentSlide);
  }
});
sliderRight.addEventListener("click", () => {
  setState(currentSlide);
  currentSlide += 1;
  if (currentSlide > slides) {
    currentSlide = 0;
    setState(currentSlide);
  } else if (currentSlide <= slides) {
    setState(currentSlide);
  }
});
