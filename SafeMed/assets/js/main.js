document.getElementById("menu-toggle").addEventListener("click", function () {
  const menu = document.getElementById("mobile-menu");
  menu.classList.toggle("show-menu");
});

// Function to move login links to the mobile menu
function moveAuthLinks() {
  const loginLink = document.getElementById("login-link");

  const mobileLoginLink = document.getElementById("mobile-login");
}

window.addEventListener("resize", moveAuthLinks);

moveAuthLinks();

// Change icon when clicked
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const menuIcon = document.getElementById("menu-icon");
  const mobileMenu = document.getElementById("mobile-menu");

  menuToggle.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");

    if (mobileMenu.classList.contains("active")) {
      menuIcon.classList.replace("bx-menu", "bx-x");
    } else {
      menuIcon.classList.replace("bx-x", "bx-menu");
    }
  });
});

/*=============== VALUE ACCORDION ===============*/
const accordionItems = document.querySelectorAll(".dropdown");

accordionItems.forEach((item) => {
  const accordionHeader = item.querySelector(".dropdown-header");

  accordionHeader.addEventListener("click", () => {
    const openItem = document.querySelector(".accordion-open");

    toggleItem(item);

    if (openItem && openItem !== item) {
      toggleItem(openItem);
    }
  });
});

const toggleItem = (item) => {
  const accordionContent = item.querySelector(".text-content");

  if (item.classList.contains("dropdown-open")) {
    accordionContent.removeAttribute("style");
    item.classList.remove("dropdown-open");
  } else {
    accordionContent.style.height = accordionContent.scrollHeight + "px";
    item.classList.add("dropdown-open");
  }
};

// Animate on load:
const elementsToAnimate = document.querySelectorAll(".main .animate-on-load");

function animateElements() {
  elementsToAnimate.forEach((element) => {
    element.classList.add("animate");
  });
}

window.addEventListener("load", animateElements);

// Password setup
const togglePassword = document.getElementById("togglePassword");
const passwordField = document.getElementById("password");

togglePassword.addEventListener("click", function () {
  const type =
    passwordField.getAttribute("type") === "password" ? "text" : "password";
  passwordField.setAttribute("type", type);
  this.textContent = this.textContent === "Show" ? "Hide" : "Show";
});
