"use strict";

const form = document.querySelector("form");
const message = document.querySelector(".success");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  form.checkValidity();

  // CREATE SUCCESS MESSAGE

  message.textContent = "Your Profile was created successfully";
});

const icon = document.querySelector(".navIcons");

icon.addEventListener("click", () => {
  console.log("Hello");
});
