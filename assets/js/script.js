const headerMenuItem = document.querySelectorAll(".header-menu-item");
headerMenuItem.forEach(function (item, index) {
  headerMenuItem[index].addEventListener("click", function () {
    const headerMenuItemActive = document.querySelector(
      ".header-menu-item-active"
    );
    headerMenuItemActive.classList.remove("header-menu-item-active");
    headerMenuItem[index].classList.add("header-menu-item-active");
  });
});

//=======header============
const header = document.querySelector(".header");
window.addEventListener("scroll", function (e) {
  let y = this.window.pageYOffset;
  if (y >= 20) {
    header.classList.add("header-scroll");
    header.style.borderBottom = "1px solid #dddddd";
  } else {
    header.classList.remove("header-scroll");
    header.style.borderBottom = "none";
  }
});

//=======cart page============
const favourite = document.querySelectorAll(".cart-l-favourite p");
favourite.forEach(function (heart, index) {
  heart.addEventListener("click", function () {
    heart.classList.toggle("cart-l-favourite-active");
  });
});
//========paging===========
const lists = document.querySelector(".product-list");
let thisPage = 1;
let limit = lists.getAttribute("data-limit") || 8;
let listProduct = document.querySelectorAll(".product-list .product-item");
function loadItem() {
  let itemStart = limit * (thisPage - 1);
  let itemEnd = limit * thisPage - 1;
  // console.log(itemEnd, itemStart);
  listProduct.forEach((item, index) => {
    if (index >= itemStart && index <= itemEnd) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
  listPage();
}
function listPage() {
  let countPage = Math.ceil(listProduct.length / limit);
  document.querySelector(".pagination").innerHTML = "";
  if (thisPage != 1) {
    /*
    //Fisrt Page
      let firstPage = document.createElement("li");
      firstPage.innerText = `First Page`;
      firstPage.setAttribute("onclick", `changePage(1)`);
      document.querySelector(".pagination").appendChild(firstPage);
    */
    let prev = document.createElement("li");
    prev.innerText = `Prev`;
    prev.setAttribute("onclick", `changePage(${thisPage - 1})`);
    document.querySelector(".pagination").appendChild(prev);
  }
  for (let i = 1; i <= countPage; i++) {
    let newPage = document.createElement("li");
    newPage.innerText = i;
    if (i == thisPage) {
      newPage.classList.add("pagination-active");
    }
    newPage.setAttribute("onclick", `changePage(${i})`);
    document.querySelector(".pagination").appendChild(newPage);
  }
  if (thisPage != countPage) {
    let next = document.createElement("li");
    next.innerText = "Next";
    next.setAttribute("onclick", `changePage(${thisPage + 1})`);
    document.querySelector(".pagination").appendChild(next);

    /*
    //Last Page
      let lastPage = document.createElement("li");
      lastPage.innerText = `Last Page`;
      lastPage.setAttribute("onclick", `changePage(${countPage})`);
      document.querySelector(".pagination").appendChild(lastPage);
    */
  }
}

function changePage(i) {
  thisPage = i;
  loadItem();
}
loadItem();

//page detail
const bigImg = document.querySelector(".detail-image .detail-image-big img");
const smallImgs = document.querySelectorAll(
  ".detail-image .detail-image-small img"
);

smallImgs.forEach(function (item, index) {
  item.addEventListener("click", function () {
    bigImg.src = item.src;
  });
});

//========cart page ===========
//const favourite = document.querySelectorAll(".cart-l-favourite");
//favourite.forEach(function (item, index) {
//item.addEventListener("click", () => {
// if (item.classList.contains("enable")) {
//   item.classList.contains("disable").style.display = "block";
//   item.classList.contains("enable").style.display = "none";
// } else {
//   item.classList.contains("enable").style.display = "block";
//   item.classList.contains("disable").style.display = "none";
// }
// });
//});
