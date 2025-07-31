let show = document.getElementById("show");
let menu = document.getElementById("menu");
let overlay = document.getElementById("overlay");
let overlay2 = document.querySelector(".overlay2");
let nav = document.querySelectorAll("a");
const details = document.querySelector(".project-details");
const imgDetail = document.querySelector("#imgDetail");

const challengeLinks = {
  challenge01: {
    name: "Front-end Challenge 02 | Fylo dark theme landing page",
    language: `
     <img class="lang" src="assets/html.svg" alt="html"/>  <img class="lang" src="assets/css.svg" alt="html"/>`,
    live: "https://han-nari.github.io/front-end-challenge02/",
    source: "https://github.com/han-nari/front-end-challenge02",
    link: "https://www.frontendmentor.io/challenges/fylo-dark-theme-landing-page-5ca5f2d21e82137ec91a50fd",
    details: `A visually appealing dark-themed landing page built using HTML and CSS. The project recreates Fylo’s design, focusing on clean layout, responsive design, and visual hierarchy. It includes smooth section transitions, well-structured content blocks, and attention to typography and spacing for an elegant and modern look.`,
  },
  challenge02: {
    name: "Front-end Challenge 01 | Browser extension manager UI",
    language: `
     <img class="lang" src="assets/html.svg" alt="html"/>  <img class="lang" src="assets/css.svg" alt="html"/> <img class="lang" src="assets/js.svg" alt="html"  />`,
    live: "https://han-nari.github.io/front-end-challenge/",
    source: "https://github.com/han-nari/front-end-challenge",
    link: "https://www.frontendmentor.io/challenges/browser-extension-manager-ui-yNZnOfsMAp",
    details: `A clean and modern browser extension manager UI built with HTML, CSS, and JavaScript. This project replicates a typical extension management interface where users can view installed extensions, toggle them on or off, and remove them. It focuses on layout design, interactive UI elements, and responsive styling to deliver a smooth experience across devices.`,
  },
  challenge03: {
    name: "Front-end Challenge 03 | Product list with cart",
    live: "https://han-nari.github.io/front-end-challenge03/#/",
    language: `
     <img class="lang" src="assets/html.svg" alt="html"/>  <img class="lang" src="assets/css.svg" alt="html"/> <img class="lang" src="assets/reactjs.svg" alt="html"  />`,
    source: "https://github.com/han-Nari/front-end-challenge03",
    link: "https://www.frontendmentor.io/challenges/product-list-with-cart-5MmqLVAp_d",
    details: `A responsive product list page built with React, featuring a fully functional shopping cart. Users can browse products, add or remove items from the cart, and view the total cost dynamically. The project emphasizes clean UI, modular component structure, and state management using React hooks. Styled with CSS for a smooth user experience across devices.`,
  },
};

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

// Project Details
function showDetails(img, linkKey) {
  imgDetail.src = img;
  details.classList.add("details");
  overlay2.classList.add("details");

  const links = challengeLinks[linkKey];

  document.querySelector(".project-live").href = links.live;
  document.querySelector(".project-source").href = links.source;
  document.querySelector(".project-name").innerHTML = links.name;
  document.querySelector(".language").innerHTML = links.language;
  document.querySelector(".ch1").href = links.link;
  document.querySelector(".myinfo").innerHTML = links.details;
}

function closeDetails() {
  details.classList.remove("details");
  overlay2.classList.remove("details");
}

function closeOverLay2() {
  closeDetails();
}

// Handle automatic overlay removal on desktop view
window.addEventListener("resize", () => {
  if (window.innerWidth >= 800) {
    show.classList.remove("show");
    overlay.classList.remove("overlayShow");
  }
});
