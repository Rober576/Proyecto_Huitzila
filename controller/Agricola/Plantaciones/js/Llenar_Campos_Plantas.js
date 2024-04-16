var id = localStorage.getItem('id');
var dataString = localStorage.getItem('data');
var data;
if (dataString) {
    data = JSON.parse(dataString);
}


document.getElementById('nomPlanta').value = data[0].NombrePlanta;
document.getElementById('nomCienti').value = data[0].NombreCientifico;
document.getElementById('descPla').value = data[0].Descripcion;

