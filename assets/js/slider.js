//=======slider============
const imgPositon = document.querySelectorAll(".slider-container img");
const imgContainer = document.querySelector(".slider-container");
const lineItems = document.querySelectorAll(".slider-lines .slider-line");
let indexImg = 0;
const imgNumber = imgPositon.length;
imgPositon.forEach(function (item, index) {
  index = index;
  item.style.left = index * 100 + "%";
  lineItems[index].addEventListener("click", function () {
    slider(index);
    indexImg = index;
  });
});
const imgSlider = () => {
  indexImg++;
  if (indexImg >= imgNumber) {
    indexImg = 0;
  }
  slider(indexImg);
};
function slider(index) {
  let size = "-" + index * 100 + "%";
  imgContainer.style.left = size;
  const lineActive = document.querySelector(".slider-line-active");
  lineActive.classList.remove("slider-line-active");
  lineItems[index].classList.add("slider-line-active");
}
setInterval(imgSlider, 5000);
