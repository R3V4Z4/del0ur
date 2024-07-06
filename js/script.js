"use strict";

// header
let lastScrollTop = 0;
const header = document.getElementById("navbar");
const burger = document.getElementById("burgerBar");
const menu = document.getElementById("menu");
const registration = document.getElementById("contactButton");
const registrationDiv = document.getElementById("contactContainer");

window.addEventListener("scroll", function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (
    scrollTop > lastScrollTop &&
    !menu.classList.contains("isactive") &&
    !registrationDiv.classList.contains("reg")
  ) {
    header.classList.add("hidden");
  } else {
    header.classList.remove("hidden");
  }
  lastScrollTop = scrollTop;
});

burger.addEventListener("click", function () {
  burger.classList.toggle("isactive");
  menu.classList.toggle("isactive");
  if (menu.classList.contains("isactive")) {
    header.classList.remove("hidden");
  }
});

registration.addEventListener("click", function () {
  let comment = document.getElementById("comment");
  registrationDiv.classList.toggle("reg");
  if (!registration.classList.contains("reg")) {
    registration.classList.add("reg");
    comment.classList.remove("fa-regular");
    comment.classList.remove("fa-comments");
    comment.classList.add("fa-solid");
    comment.classList.add("fa-arrow-left");
  } else {
    registration.classList.remove("reg");
    comment.classList.add("fa-regular");
    comment.classList.add("fa-comments");
    comment.classList.remove("fa-solid");
    comment.classList.remove("fa-arrow-left");
  }
  if (registrationDiv.classList.contains("reg")) {
    header.classList.remove("hidden");
  }
});



//
document.addEventListener("DOMContentLoaded", () => {
  const subMenus = document.querySelectorAll(".sub-menu");
  const buttons = document.querySelectorAll(".bar");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      subMenus.forEach((menu) => (menu.style.height = "0px"));
      buttons.forEach((btn) => btn.classList.remove("active"));

      const subMenu = button.nextElementSibling;

      if (subMenu && subMenu.classList.contains("sub-menu")) {
        const ul = subMenu.querySelector("ul");
        subMenu.style.height = subMenu.clientHeight
          ? "0px"
          : `${ul.clientHeight}px`;
        button.classList.toggle("active");
      } else {
        button.classList.add("active");
      }
      const arrowIcon = button.querySelector(".arrow-icon");
      if (arrowIcon) {
        arrowIcon.classList.toggle("rotated");
      }
    });
  });
});

//
const buttons = document.querySelectorAll(".data");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const link = this.dataset.link;
    window.location.href = link;
  });
});

const allItems = document.querySelectorAll(".one-grid");
allItems.forEach(function (element, index) {
  element.addEventListener("click", function () {
    let contentId = `content${index + 1}`;
    let content = document.getElementById(contentId);
    if (content) {
      content.classList.toggle("isactive");
    }
  });
});

// burger bar

// contact

//

// slider

document.addEventListener("DOMContentLoaded", function () {
  new Splide("#carousel1", {
    type: "loop",
    autoplay: {
      speed: 2,
    },
  }).mount();

  new Splide("#carousel2", {
    type: "loop",
    perPage: 6,
    direction: "rtl",
    pagination: false, // Disable pagination
    arrows: false,
    autoScroll: {
      speed: 1,
    },
    // breakpoints: {
    //   1200: {
    //     perPage: 3,
    //   },
    //   992: {
    //     perPage: 2,
    //   },
    //   768: {
    //     perPage: 1,
    //   },
    // },
  }).mount(window.splide.Extensions);

  new Splide("#carousel3", {
    type: "loop",
    perPage: 6,
    direction: "ltr",
    pagination: false,
    arrows: false,
    autoScroll: {
      speed: 1,
    },
    // breakpoints: {
    //   1200: {
    //     perPage: 3,
    //   },
    //   992: {
    //     perPage: 2,
    //   },
    //   768: {
    //     perPage: 1,
    //   },
    // },
  }).mount(window.splide.Extensions);
});
