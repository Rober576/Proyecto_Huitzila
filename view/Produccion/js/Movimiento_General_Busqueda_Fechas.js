// Obtener referencias al botón y al modal
var boton_fechas = document.getElementById("boton_fechas");
var modal = document.getElementById("myModal");

// Obtener la referencia del botón de cerrar
var closeButton = document.getElementsByClassName("close")[0];

// Función para abrir el modal
boton_fechas.onclick = function() {
  modal.style.display = "block"; // Mostrar el modal
}

// Función para cerrar el modal cuando se hace clic en el botón de cerrar
closeButton.onclick = function() {
  modal.style.display = "none"; // Ocultar el modal
}

// Función para cerrar el modal cuando se hace clic fuera del contenido del modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none"; // Ocultar el modal
  }
}