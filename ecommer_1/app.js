const sliderWrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    sliderWrapper.style.transform = `translateX(${index * -100}vw)`;
  });
});
