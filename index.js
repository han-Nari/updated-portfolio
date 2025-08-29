let show = document.getElementById("show");
let menu = document.getElementById("menu");
let overlay = document.getElementById("overlay");
let overlay2 = document.querySelector(".overlay2");
let nav = document.querySelectorAll("a");

nav.forEach((item) => {
  item.addEventListener("click", () => {
    nav.forEach((item) => {
      item.classList.remove("active");
    });
    item.classList.add("active");
    show.classList.remove("show");
    overlay.classList.remove("overlayShow");
  });
});

function openNav() {
  show.classList.toggle("show");
  overlay.classList.toggle("overlayShow");
}

function removeNav() {
  show.classList.remove("show");
  overlay.classList.remove("overlayShow");
}

// Handle automatic overlay removal on desktop view
window.addEventListener("resize", () => {
  if (window.innerWidth >= 800) {
    show.classList.remove("show");
    overlay.classList.remove("overlayShow");
  }
});
