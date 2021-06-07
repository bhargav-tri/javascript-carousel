const track = document.querySelector(".carousel__track");
const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");
const slides = Array.from(track.children);
const indicators = document.querySelector(".indicators");
// const indicators = document.querySelector('.indicators');
const dots = Array.from(indicators.children);
const slideWidth = slides[0].getBoundingClientRect().width;

slides.forEach((slide, index) => {
  slide.style.left = `${slideWidth * index}px`;
});

const carouselSlide = (track, current, target) => {
  track.style.transform = `translateX(-${target.style.left})`;
  current.classList.remove("current__slide");
  target.classList.add("current__slide");
};

rightBtn.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(".current__slide");
  const nextSlide = currentSlide.nextElementSibling;
  if (nextSlide) {
    carouselSlide(track, currentSlide, nextSlide);
  }
});
leftBtn.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(".current__slide");
  const previousSlide = currentSlide.previousElementSibling;
  if (previousSlide) {
    carouselSlide(track, currentSlide, previousSlide);
  }
});

indicators.addEventListener("click", (e) => {
  const targetDot = e.target.closest("button");

  if (!targetDot) return;
  const currentSlide = track.querySelector(".current__slide");
  const currentDot = indicators.querySelector(".current__slide");
  const targetIndex = dots.findIndex((dot) => dot === targetDot);
  const targetSlide = slides[targetIndex];
  if (targetSlide) {
    carouselSlide(track, currentSlide, targetSlide);
  }
});

// track.style.overflow='hidden';
