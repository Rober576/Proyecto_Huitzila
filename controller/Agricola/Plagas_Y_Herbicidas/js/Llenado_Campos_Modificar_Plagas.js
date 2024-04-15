var id = localStorage.getItem('id');
var dataString = localStorage.getItem('data');
var data;
if (dataString) {
    data = JSON.parse(dataString);
}


document.getElementById('nomPlaga').value = data[0].Nombre;
document.getElementById('nomciePlaga').value = data[0].Cientifico;
document.getElementById('tratPlaga').value = data[0].Descripcion;

