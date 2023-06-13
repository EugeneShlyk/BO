const sliderLine = document.querySelector(".slider-checkerboard__list"),
  sliderItems = sliderLine.querySelectorAll(".slider-checkerboard__item"),
  paginationItems = document.querySelectorAll(
    ".slider-checkerboard__pagination-item-button"
  ),
  sliderButtonPrev = document.querySelector(".slider-checkerboard-button-prev"),
  sliderButtonNext = document.querySelector(".slider-checkerboard-button-next");

let sliderCount = 0,
  sliderWidth;

// задает шаг перемещения слайдов
const scrollsSlider = () => {
  sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
};

// Задаёт нужную ширину картинке и slideLine
const showSlide = () => {
  sliderWidth = document.querySelector(
    ".slider-checkerboard__list"
  ).offsetWidth;
  sliderLine.style.width = sliderWidth * sliderItems.length + "px";
  sliderItems.forEach((item) => (item.style.width = sliderWidth + "px"));
  scrollsSlider();
};

showSlide();

// адаптивность слайдера
window.addEventListener("resize", showSlide);

const addClass = (index) => {
  paginationItems.forEach((item) =>
    item.classList.remove(
      "slider-checkerboard__pagination-item-button--current"
    )
  );
  paginationItems[index].classList.add(
    "slider-checkerboard__pagination-item-button--current"
  );
};

// перелистывает слайд вперед
const showsNextSlide = () => {
  sliderCount++;
  if (sliderCount >= sliderItems.length) {
    sliderCount = 0;
  }

  scrollsSlider();
  addClass(sliderCount);
};

// перелистывает слайд назад
const showsPrevSlide = () => {
  sliderCount--;
  if (sliderCount < 0) {
    sliderCount = sliderItems.length - 1;
  }

  scrollsSlider();
  addClass(sliderCount);
};

const workSliderHandler = () => {
  // кнопки перелистывания слайдов вперёд и назад
  sliderButtonNext.addEventListener("click", showsNextSlide);
  sliderButtonPrev.addEventListener("click", showsPrevSlide);

  paginationItems.forEach((item, index) => {
    item.addEventListener("click", () => {
      console.log("привет");
      sliderCount = index;
      scrollsSlider();
      addClass(sliderCount);
    });
  });

  // автоматическое перелистывание слайдов
  setInterval(() => {
    showsNextSlide();
  }, 5000);
};

export { workSliderHandler };
