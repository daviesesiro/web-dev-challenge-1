const nav = document.querySelector("header nav");
const hero = document.querySelector(".hero-wrapper");
const tree = document.querySelector(".big-tree-illus");
const circle = document.querySelector(".circle-illustration");
const header = document.querySelector("header");
const bestingSellingSection = document.querySelector(".best-selling");

document.addEventListener("scroll", () => {
  if (window.scrollY >= 30 && window.innerWidth <= 900) {
    nav.classList.add("stick");
    if (window.scrollY >= bestingSellingSection.offsetTop) {
      nav.classList.add("show");
    }
  } else {
    nav.classList.remove("stick");
  }
  if (!(window.scrollY >= bestingSellingSection.offsetTop)) {
    nav.classList.remove("show");
  }
});

// moveover effect
const LIMIT = 200;
function shadow(e) {
  if (window.innerWidth <= 900) {
    tree.style.transform = ``;
    return;
  }
  const { offsetWidth: width, offsetHeight: height } = hero;
  let { pageX: x, pageY: y } = e;

  //remove the extra value on y coming from the header
  y -= this.offsetTop;
  const xLIMIT = (x / width) * LIMIT - LIMIT / 2;
  const yLIMIT = (y / height) * LIMIT - LIMIT / 2;
  tree.style.transform = `translate(${xLIMIT}px, ${yLIMIT}px)`;
}

hero.addEventListener("mousemove", shadow, { capture: true });
