const headerMenuIcon = document.querySelectorAll(".header__menu-icon");
const headerMenu = document.querySelector(".header__nav");

const sliderLeft = document.querySelector(".slider__left");
const sliderRight = document.querySelector(".slider__right");
const sliderImages = document.querySelectorAll(".slider__image");
const sliderTitle = document.querySelectorAll(".info__title");
const sliderText = document.querySelectorAll(".info__text");
const overlay = document.querySelector(".overlay");
const slides = sliderImages.length - 1;

headerMenuIcon.forEach((element) => {
  element.addEventListener("click", () => {
    headerMenu.classList.toggle("active");
    overlay.classList.toggle("active");
  });
});

let currentSlide = 0;
sliderLeft.addEventListener("click", () => {
  sliderImages.item(currentSlide).classList.toggle("active");
  sliderTitle.item(currentSlide).classList.toggle("active");
  sliderText.item(currentSlide).classList.toggle("active");
  currentSlide -= 1;
  if (currentSlide < 0) {
    currentSlide = slides;
    sliderImages.item(currentSlide).classList.toggle("active");
    sliderTitle.item(currentSlide).classList.toggle("active");
    sliderText.item(currentSlide).classList.toggle("active");
  } else if (currentSlide >= 0) {
    sliderImages.item(currentSlide).classList.toggle("active");
    sliderTitle.item(currentSlide).classList.toggle("active");
    sliderText.item(currentSlide).classList.toggle("active");
  }
});
sliderRight.addEventListener("click", () => {
  sliderImages.item(currentSlide).classList.toggle("active");
  sliderTitle.item(currentSlide).classList.toggle("active");
  sliderText.item(currentSlide).classList.toggle("active");
  currentSlide += 1;
  if (currentSlide > slides) {
    currentSlide = 0;
    sliderImages.item(currentSlide).classList.toggle("active");
    sliderTitle.item(currentSlide).classList.toggle("active");
    sliderText.item(currentSlide).classList.toggle("active");
  } else if (currentSlide <= slides) {
    sliderImages.item(currentSlide).classList.toggle("active");
    sliderTitle.item(currentSlide).classList.toggle("active");
    sliderText.item(currentSlide).classList.toggle("active");
  }
});
