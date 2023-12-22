"use strict";

const mobileHamburger = document.getElementById("mobileHamburger");
const mobileNav = document.getElementById("mobileNav");

mobileHamburger.addEventListener("click", () => {
  mobileNav.classList.add("showNavbar");
});

mobileNav.addEventListener("click", (e) => {
  if (e.target.classList.contains("mobile-nav")) {
    mobileNav.classList.remove("showNavbar");
  }
  console.log("e.target :", e.target);
});
