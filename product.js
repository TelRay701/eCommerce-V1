// Script for drop-down burger menu when page is sized down
const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navMenu");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});

// Script for grabbing materials from the JSON File
let http = new XMLHttpRequest(); //Interacts with the JSON File

http.open("get", "product.json", true);
http.send();
http.onload = function () {
  if (this.readyState == 4 && this.status == 200) {
    let product = JSON.parse(this.responseText); //return text from JSON file

    let output = ""; // empty array for output of JSON File

    for (let item of product) {
      output += `
      <div class=products>
      <img class="img" src="${item.image}"/>
      <p class="device">${item.device}</p>
      <p class="description">${item.description}</p>
      <p class="price">${item.price}</p>
      </div>`;
    }
    document.querySelector(".title").innerHTML = `
    <h1 class="site-title">Desktop Products</h1>`;
    document.querySelector(".prod").innerHTML = output;
  }
};
