"use strict";

const form = document.querySelector("form");
const message = document.querySelector(".success");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  form.checkValidity();

  // CREATE SUCCESS MESSAGE

  message.textContent = "Your Profile was created successfully";
});

const hamburger = document.querySelector(".hamburger");
const navItems = document.querySelector(".navItems");
const list = document.querySelectorAll("li");

hamburger.addEventListener("click", () => {
  console.log("Hello");
  hamburger.classList.toggle("active");
  navItems.classList.toggle("active");
});

list.forEach((li) =>
  li.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navItems.classList.remove("active");
  })
);
