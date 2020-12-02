const nav = document.querySelector("header nav");
const hero = document.querySelector(".hero-wrapper");
const tree = document.querySelector(".big-tree-illus");
const circle = document.querySelector(".circle-illustration");
const header = document.querySelector("header");
const bestingSellingSection = document.querySelector(".best-selling");
const spacer = document.querySelector(".spacer");

document.addEventListener("scroll", () => {
  if (window.scrollY >= 200 && window.innerWidth <= 900) {
    spacer.style.height = getComputedStyle(nav).height;
    toggleClass(nav, "stick");
    if (window.scrollY >= bestingSellingSection.offsetTop) {
      nav.style.transition = ".4s";
      toggleClass(nav, "show");
    }
  } else {
    toggleClass(nav, "stick", false);
    spacer.style.height = "0px";
  }
  if (!(window.scrollY >= bestingSellingSection.offsetTop)) {
    toggleClass(nav, "show", false);
    setTimeout(() => {
      nav.style.transition = "0s";
    }, 0);
  }
});

const toggleClass = (element, className, add = true) => {
  add ? element.classList.add(className) : element.classList.remove(className);
};

// moveover effect
const LIMIT = 200;
function move(e) {
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

hero.addEventListener("mousemove", move, { capture: true });
