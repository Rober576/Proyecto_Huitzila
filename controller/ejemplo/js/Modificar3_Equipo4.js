// Obtener el ID almacenado en localStorage
var id = localStorage.getItem('id');

// Obtener los datos almacenados en localStorage y convertirlos de nuevo en un objeto JSON
var dataString = localStorage.getItem('data');
var data;
if (dataString) {
    data = JSON.parse(dataString);
}

// Hacer algo con el ID y los datos
console.log('ID:', id);
console.log('Datos:', data);

// Llenar los campos del formulario con la información obtenida
document.getElementById('campo1').value = data[0].campo1;
document.getElementById('campo2').value = data[0].campo2;
document.getElementById('campo3').value = data[0].campo3;
document.getElementById('campo4').value = data[0].campo4;
document.getElementById('campo5').value = data[0].campo5;

