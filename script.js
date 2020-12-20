"use strict";

// get the intitial dark mode state
let darkMode = localStorage.getItem("darkMode");

// dark mode toggle. #dark id on the moon icon from font awesome
const darkModeToggle = document.getElementById("dark");

const enableDarkMode = () => {
  document.querySelector("body").classList.remove("theme-light");
  document.querySelector("body").classList.add("theme-dark");

  // Set localstorage to darkMode enabled
  localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
  document.querySelector("body").classList.remove("theme-dark");
  document.querySelector("body").classList.add("theme-light");

  // Set localstorage to darkMode disabled
  localStorage.setItem("darkMode", null);
};

// checks local storage for status of dark mode
if (darkMode === "enabled") {
  enableDarkMode();
}

// click event listener for moon icon
darkModeToggle.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode");

  if (darkMode !== "enabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
  console.log("clicked");
});
