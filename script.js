const nav = document.querySelector("header nav");

document.addEventListener("scroll", () => {
  if (window.scrollY >= 30 && window.innerWidth <= 900) {
    nav.classList.add("stick");
  } else {
    nav.classList.remove("stick");
  }
});
