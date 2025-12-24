import "./style.css";
import './js/dragToScroll'
if (localStorage.getItem("theme") === "false") {
  document.body.classList.add("dark-theme");
}
document.querySelector(".toggle").addEventListener("change", function () {
  let darkTheme = localStorage.getItem("theme") == "false" ? false : true;
  localStorage.setItem("theme", !darkTheme);
  document.body.classList.toggle("dark-theme");
});

const navigationItemsElement = document.querySelector(
  ".header__navigation-items"
);

const burger = document.getElementById("burger");

burger.addEventListener("click", () => {
  navigationItemsElement.classList.toggle("active_menu");
  if (navigationItemsElement.classList.contains("active_menu")) {
    burger.setAttribute("aria-expanded", "true");
  } else {
    burger.setAttribute("aria-expanded", "false");
  }
  console.log(123);
});


