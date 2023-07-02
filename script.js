"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const sectionOne = document.querySelector("#section--1");
const nav = document.querySelector(".nav");
const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const city = document.getElementById("city");
const message = document.getElementById("message");
const submit = document.getElementById("submit");

const slide = document.querySelectorAll(".slide");
let curSlide = 0;
const maxSlide = slide.length;
slide.forEach((el, i) => {
  el.style.transform = `translateX(${100 * i}%)`;
});

const updateSlide = function (slides) {
  slide.forEach(
    (el, i) => (el.style.transform = `translateX(${100 * (i - slides)}%)`)
  );
};

const nextSlide = function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  updateSlide(curSlide);
};

const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }
  updateSlide(curSlide);
};

document
  .querySelector(".slider__btn--right")
  .addEventListener("click", nextSlide);

document
  .querySelector(".slider__btn--left")
  .addEventListener("click", prevSlide);

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") {
    nextSlide();
  } else if (e.key === "ArrowLeft") {
    prevSlide();
  }
});

const init = function () {
  updateSlide(0);
};
init();

window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

var menu = document.querySelector(".menu");
var menuBtn = document.querySelector(".menu-btn");
var closeBtn = document.querySelector(".close-btn");

menuBtn.addEventListener("click", function () {
  menu.classList.add("active");
});

closeBtn.addEventListener("click", function () {
  menu.classList.remove("active");
});
