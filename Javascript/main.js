let btnMenu = document.getElementById("btn-menu");
let mainNav = document.getElementById("main-nav");
btnMenu.addEventListener("click", function () {
  mainNav.classList.toggle("mostrar");
});

const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length - 1];

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

// Obtener los datos del localStorage
var username = localStorage.getItem("username");
var email = localStorage.getItem("email");
var password = localStorage.getItem("password");

// Mostrar un mensaje de bienvenida al usuario
document.getElementById("bienvenido").innerHTML = "Bienvenido, " + username + "! Tu dirección de correo electrónico es " + email + " y tu contraseña es " + password;

// Obtener el nombre de usuario del localStorage
var username = localStorage.getItem("username");

// Mostrar un mensaje de bienvenida al usuario
document.getElementById("bienvenido").innerHTML = "Bienvenido, " + username + "!";



slider.insertAdjacentElement("afterbegin", sliderSectionLast);

function Next() {
  let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
  slider.style.marginLeft = "-200%";
  slider.style.transition = "all 0.5s";
  setTimeout(function () {
    slider.style.transition = "none";
    slider.insertAdjacentElement("beforeend", sliderSectionFirst);
    slider.style.marginLeft = "-100%";
  }, 500);
}

function Prev() {
  let sliderSection = document.querySelectorAll(".slider__section");
  let sliderSectionLast = sliderSection[sliderSection.length - 1];
  slider.style.marginLeft = "0";
  slider.style.transition = "all 0.5s";
  setTimeout(function () {
    slider.style.transition = "none";
    slider.insertAdjacentElement("afterbegin", sliderSectionLast);
    slider.style.marginLeft = "-100%";
  }, 500);
}

btnRight.addEventListener("click", function () {
  Next();
});

btnLeft.addEventListener("click", function () {
  Prev();
});

setInterval(function () {
  Next();
}, 5000);
