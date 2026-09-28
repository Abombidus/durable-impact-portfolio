const menuBtn = document.querySelector(".menu-btn");
const burgerMenu = document.querySelector(".menu-btn-burger");
const nav = document.querySelector(".nav");
const navMenu = document.querySelector(".nav-menu");

const links = document.querySelectorAll(".nav-menu-item-link");

let clicked = false;
menuBtn.addEventListener("click", () => {
  if (!clicked) {
    burgerMenu.classList.add("open");
    nav.style.visibility = "visible";

    clicked = true;
  } else {
    burgerMenu.classList.remove("open");
    nav.style.visibility = "hidden";
    clicked = false;
  }
});
