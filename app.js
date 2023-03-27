const toggle = document.querySelector(".btn-list");
const menu = document.querySelector(".header-nav");
const isClose = document.querySelector(".btn-off");
const isActive = document.querySelector(".is-active ");
const isHidden = document.querySelector(".is-hidden ");
const activeClass = "is-show";
const exitClass = "is-close";
toggle.addEventListener("click", function (e) {
  e.stopPropagation();
  menu.classList.add(activeClass);
  toggle.classList.add(exitClass);
  isClose.classList.add(exitClass);
});

isClose.addEventListener("click", function (e) {
  e.stopPropagation();
  isClose.classList.remove(exitClass);
  isClose.classList.add(isHidden);
  toggle.classList.remove(exitClass);
  toggle.classList.add(isActive);
  menu.classList.remove(activeClass);
});

window.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !e.target.matches(".btn-list")) {
    menu.classList.remove(activeClass);
  }
});
// let mybutton = document.getElementById("myBtn");

// // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }

// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }
