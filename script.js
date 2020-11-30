const nav = document.querySelector("header nav");
const cards = document.querySelectorAll(".card");

document.addEventListener("scroll", () => {
  if (window.scrollY >= 30 && window.innerWidth <= 900) {
    nav.classList.add("stick");
  } else {
    nav.classList.remove("stick");
  }
});
