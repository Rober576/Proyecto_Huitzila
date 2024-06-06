var id = localStorage.getItem('id');
var dataString = localStorage.getItem('data');
var data;
if (dataString) {
    data = JSON.parse(dataString);
}


document.getElementById('codArea').value = data[0].CodigoArea;
document.getElementById('nomPred').value = data[0].Nombre;
document.getElementById('superfPre').value = data[0].Superficie;
document.getElementById('descPre').value = data[0].DescripcionArea;

