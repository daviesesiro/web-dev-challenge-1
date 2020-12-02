const nav = document.querySelector("header nav");
const hero = document.querySelector(".hero-wrapper");
const tree = document.querySelector(".big-tree-illus");
const circle = document.querySelector(".circle-illustration");
const header = document.querySelector("header");

document.addEventListener("scroll", () => {
  if (window.scrollY >= 30 && window.innerWidth <= 900) {
    nav.classList.add("stick");
  } else {
    nav.classList.remove("stick");
  }
});

// moveover effect
const walk = 200;
function shadow(e) {
  const { offsetWidth: width, offsetHeight: height } = hero;
  let { pageX: x, pageY: y } = e;

  //remove the extra value on y coming from the header
  y -= this.offsetTop;
  const xWalk = (x / width) * walk - walk / 2;
  const yWalk = (y / height) * walk - walk / 2;
  console.log(xWalk, yWalk);
  tree.style.transform = `translate(${xWalk}px, ${yWalk}px)`;
  circle.style.transform = `translate(${xWalk}px, ${yWalk}px)`;
}

hero.addEventListener("mousemove", shadow, { capture: true });
