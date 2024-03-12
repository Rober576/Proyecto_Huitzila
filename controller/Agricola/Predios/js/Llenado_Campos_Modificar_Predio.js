var id = localStorage.getItem('id');
var dataString = localStorage.getItem('data');
var data;
if (dataString) {
    data = JSON.parse(dataString);
}


console.log('ID:', id);
console.log('Datos:', data);

document.getElementById('campo1').value = data[0].campo1;
document.getElementById('campo2').value = data[0].campo2;
document.getElementById('campo3').value = data[0].campo3;
document.getElementById('campo4').value = data[0].campo4;
document.getElementById('campo5').value = data[0].campo5;

