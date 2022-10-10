// Script for drop-down burger menu when page is sized down
const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navMenu");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});

let http = new XMLHttpRequest();

http.open("get", "product.json", true);
http.send();
http.onload = function () {
  if (this.readyState == 4 && this.status == 200) {
    let product = JSON.parse(this.responseText);

    let output = "";

    for (let item of product) {
      output += `
      <div class products>
      <img class="img" src="${item.image}"
      <p class="device">${item.device}</p>
      <p class="description">${item.description}</p>
      <p class="price">
      <span>${item.price}</span>
      </p>
      </div>`;
    }
    document.querySelector(".title").innerHTML = `
    <h1 class="site-title">Desktop Products</h1>`;
    document.querySelector(".prod").innerHTML = output;
  }
};