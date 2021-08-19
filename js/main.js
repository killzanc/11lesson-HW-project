const btn = document.querySelector(".bio__btn");
const item = document.querySelector(".bio__text");

btn.addEventListener("click", e => {
  item.classList.toggle("bio__text--hidden")
})

const nav = document.querySelector(".header__wrapper");
const menu = document.querySelector(".header__menu");

menu.addEventListener("click", e => {
  nav.classList.toggle("header__wrapper--open");
})
