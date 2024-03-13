var id = localStorage.getItem('id');
var dataString = localStorage.getItem('data');
var data;
if (dataString) {
    data = JSON.parse(dataString);
}


console.log('ID:', id);
console.log('Datos:', data);

document.getElementById('codArea').value = data[0].campo1;
document.getElementById('nomPred').value = data[0].campo2;
document.getElementById('superfPre').value = data[0].campo3;
document.getElementById('descPrec').value = data[0].campo4;

