//Function header to add class
let nav = document.getElementById("nav__bar");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 50) {
    nav.classList.add("box-sh-nav");
  } else {
    nav.classList.remove("box-sh-nav");
  }
});
