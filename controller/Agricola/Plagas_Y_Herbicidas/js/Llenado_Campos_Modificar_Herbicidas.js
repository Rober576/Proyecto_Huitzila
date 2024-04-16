var id = localStorage.getItem('id');
var dataString = localStorage.getItem('data');
var data;
if (dataString) {
    data = JSON.parse(dataString);
}


document.getElementById('nomHerb').value = data[0].NombreHerbicidas;
document.getElementById('fabriHerb').value = data[0].Fabricante;
document.getElementById('descHerb').value = data[0].Descripcion;

