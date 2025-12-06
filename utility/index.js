export const foodkingUtility = {
  scrollAnimation() {
    if (typeof window !== "undefined") {
      window.WOW = require("wowjs");
    }
    new WOW.WOW().init();
  },
  stickyNav() {
    const header = document.getElementById("header-sticky");
    window.addEventListener("scroll", function () {
      if (window.scrollY > 250) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    });
  },
  preloader() {
    const preloader = document.querySelector(".preloader");
    preloader.classList.add("loaded");
    setTimeout(function () {
      preloader.style.transition = "opacity 0.6s";
      preloader.style.opacity = "0";
      preloader.addEventListener("transitionend", function () {
        preloader.style.display = "none";
      });
    }, 600);
  },
  sliderAnimation(slides) {
    slides.forEach((slide) => {
      const animatedElements = slide.querySelectorAll("[data-animation]");
      animatedElements.forEach((element) => {
        const anim = element.getAttribute("data-animation");
        const delay = element.getAttribute("data-delay");
        const duration = element.getAttribute("data-duration");

        // Reset animation
        element.style.animation = "none";
        element.offsetHeight; // Trigger reflow
        element.style.animation = `${anim} ${duration} ${delay}`;

        // Add animation class
        element.classList.add("animated");

        // Remove animation class after animation ends
        element.addEventListener(
          "animationend",
          () => {
            element.classList.remove("animated");
          },
          { once: true }
        );
      });
    });
  },
  sliderAnimation(slides) {
    slides.forEach((slide) => {
      const animatedElements = slide.querySelectorAll("[data-animation]");
      animatedElements.forEach((element) => {
        const anim = element.getAttribute("data-animation");
        const delay = element.getAttribute("data-delay");
        const duration = element.getAttribute("data-duration");

        // Reset animation
        element.style.animation = "none";
        element.offsetHeight; // Trigger reflow
        element.style.animation = `${anim} ${duration} ${delay}`;

        // Add animation class
        element.classList.add("animated");

        // Remove animation class after animation ends
        element.addEventListener(
          "animationend",
          () => {
            element.classList.remove("animated");
          },
          { once: true }
        );
      });
    });
  },
  preloader() {
    const preloader = document.querySelector(".preloader");
    preloader.classList.add("loaded");
    setTimeout(function () {
      preloader.style.transition = "opacity 0.6s";
      preloader.style.opacity = "0";
      preloader.addEventListener("transitionend", function () {
        preloader.style.display = "none";
      });
    }, 600);
  },
};
