const preloaderWrapper = document.querySelector(".preloader-wrapper");
const preloaderInner = document.querySelector(".preloader-inner");

const navbar = document.querySelector(".navbar-menu");

const hamburger = document.querySelector(".hamburger-icon");

const hamburgerIcon1 = document.querySelector(".hamburger-icon-line-1");

const hamburgerIcon2 = document.querySelector(".hamburger-icon-line-2");

const hamburgerAnim = document.querySelector(".hamburger-menu-anim");

const navItems = document.querySelectorAll("li");

const circle = document.querySelector(".circle");

const pointer = document.querySelector(".pointer");

// Preloader
preloaderInner.addEventListener(
  "animationend",
  () => {
    preloaderWrapper.style.transition = "2s";
    preloaderWrapper.innerHTML = "";
  },
  { once: true }
);

// Cursor

document.addEventListener("mousemove", (e) => {
  circle.style = `left: ${e.clientX}px; top: ${e.clientY}px`;
  pointer.style = `left: ${e.clientX}px; top: ${e.clientY}px`;
});

// Navbar

function toggleNavbar() {
  hamburgerIcon1.classList.toggle("icon-1-anim");
  hamburgerIcon2.classList.toggle("icon-2-anim");
  navbar.classList.toggle("navbar-menu-display");
  hamburgerAnim.classList.toggle("menu-anim");
}

navItems.forEach((navItem) => {
  navItem.addEventListener("click", () => {
    toggleNavbar();
  });
});

hamburger.addEventListener("click", () => {
  toggleNavbar();
});

// Home

const home = document.querySelector(".home");

let index = 0;

function autoTextWriter() {
  const text = "Web Developer, Python Programmer and Designer!";

  const para = document.querySelector(".home p");

  const letters = text.slice(0, index);

  para.innerText = letters;

  if (index > text.length) {
    clearInterval(set);
  }

  index++;
}

let set = setInterval(autoTextWriter, 100);

// Hear Rain

const heartFall = function () {
  const heart = document.createElement("div");
  hearts = ["💛", "💚", "💜", "💙"];
  randomHeart = Math.floor(Math.random() * hearts.length);
  heart.innerText = `${hearts[randomHeart]}`;
  heart.classList.add("heart");

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.opacity = Math.random() * 1 + 0.4;
  heart.style.animationDuration = Math.random() * 2 + 5 + "s";

  home.append(heart);

  setTimeout(() => {
    heart.remove();
  }, 7000);
};

setInterval(heartFall, 150);
