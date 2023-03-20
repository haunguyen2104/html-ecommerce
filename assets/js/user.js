const btns = document.querySelectorAll(".user-address-button-select");
console.log(btns);
btns.innerHTML = "a";
btns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    const btnDefault = document.querySelector(".user-address-button-disable");
    btnDefault.classList.remove("user-address-button-disable");
    btnDefault.innerHTML = "Make Default";
    console.log(123);
    btn.classList.add("user-address-button-disable");
    btn.innerHTML = `<i class="fa fa-check"></i> Default`;
  });
});
