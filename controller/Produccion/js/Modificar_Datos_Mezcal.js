var id = localStorage.getItem('id');
var formulario = document.getElementById('advanced-form');
formulario.addEventListener('submit', function (e) {
    e.preventDefault();

    var datos = new FormData(formulario);
    datos.append('id', id);
    fetch('../../../controller/Produccion/php/Actualizar_Datos_Mezcal.php', {
        method: 'POST',
        body: datos
        
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if (data === 'exito') {
           
            window.location.href='../../../view/Produccion/Mostrar_Mezcal.html';
        }
    });
    document.addEventListener('DOMContentLoaded', function() {
        var selectCategoria = document.getElementById('categoria');
        var selectClase = document.getElementById('clase');
        var selectEspecie = document.getElementById('especie');
    
        fetch('../../controller/Produccion/php/Obtener_Categorias_Clase_Especie.php?tipo=categorias')
        .then(response => response.json())
        .then(data => {
            data.forEach(item => {
                var option = document.createElement('option');
                option.value = item;
                option.textContent = item;
    
                if (selectCategoria) {
                    selectCategoria.appendChild(option);
                }
            });
        })
        .catch(error => console.error('Error al obtener categorías:', error));
    
        fetch('../../controller/Produccion/php/Obtener_Categorias_Clase_Especie.php?tipo=clases')
        .then(response => response.json())
        .then(data => {
            data.forEach(item => {
                var option = document.createElement('option');
                option.value = item;
                option.textContent = item;
    
                if (selectClase) {
                    selectClase.appendChild(option);
                }
            });
        })
        .catch(error => console.error('Error al obtener clases:', error));
    
        fetch('../../controller/Produccion/php/Obtener_Categorias_Clase_Especie.php?tipo=especies')
        .then(response => response.json())
        .then(data => {
            data.forEach(item => {
                var option = document.createElement('option');
                option.value = item;
                option.textContent = item;
    
                if (selectEspecie) {
                    selectEspecie.appendChild(option);
                }
            });
        })
        .catch(error => console.error('Error al obtener especies:', error));
    });
    



});