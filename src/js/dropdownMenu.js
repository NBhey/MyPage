import MenuCross from '../img/icon/cross-svgrepo-com.svg'
import MenuBurger from '../img/icon/burger-menu.svg'

const burger = document.getElementById("burger");
const navigationItemsElement = document.querySelector(
  ".header__navigation-items"
);
const dropdownMenu = document.querySelector(".header__navigation-items");
const dropdownImg = document.querySelector('.header__burger img')

burger.addEventListener("click", () => {
  navigationItemsElement.classList.toggle("active_menu");
  if (navigationItemsElement.classList.contains("active_menu")) {
    burger.setAttribute("aria-expanded", "true");
    dropdownImg.src = MenuCross
  } else {
    burger.setAttribute("aria-expanded", "false");
    dropdownImg.src = MenuBurger
  }
});



document.addEventListener("touchstart", (e) => {
  const isTouchInsideMenu = dropdownMenu.contains(e.target);
  const isTouchBurger = burger.contains(e.target)

  if(!isTouchInsideMenu && !isTouchBurger){
     navigationItemsElement.classList.remove("active_menu");
     dropdownImg.src = MenuBurger
  }

});