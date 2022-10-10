// Script for drop-down burger menu when page is sized down
const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navMenu");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});

// Scripts for clicking left & right through carousel
const productContainers = [...document.querySelectorAll(".product-container")];
const nxtBtn = [...document.querySelectorAll(".nxt-btn")];
const preBtn = [...document.querySelectorAll(".pre-btn")];

productContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtn[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth;
  });

  preBtn[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });
});
