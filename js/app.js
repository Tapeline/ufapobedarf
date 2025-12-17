document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll('.slide');
  const intervalTime = 5000;
  let currentSlide = 0;

  const nextSlide = () => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
  };

  setInterval(nextSlide, intervalTime);
});
