// Obtener referencias a los elementos HTML
const agregarBtn = document.getElementById("agregar-btn");
const bagCount = document.getElementById("bag-count");

// Obtener el valor actual de la cantidad de ropa en la cartera desde localStorage
let cantidad = localStorage.getItem("cantidad") || 0;

// Actualizar el texto en el elemento HTML con la cantidad actual
bagCount.textContent = cantidad;

// Agregar un manejador de eventos al botón para actualizar la cantidad y almacenarla en localStorage
agregarBtn.addEventListener("click", function() {
  cantidad++;
  localStorage.setItem("cantidad", cantidad);
  bagCount.textContent = cantidad;
});

