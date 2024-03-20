//declara las variables globales
var formulario = document.getElementById('form_ingreso_agave');
var respuesta = document.getElementById('respuesta');

//responde cuando hay un click en el boton
formulario.addEventListener('submit', function (e)
{
    e.preventDefault();
    let fechaI=document.getElementById("fecha_inicio").value;
    let fechaF=document.getElementById("fecha_fin").value;
    console.log(fechaI);
    console.log(fechaF);

    if (fechaI>fechaF){
        alert("La fecha inicio no debe ser mayor que la fecha final");
    }else{
        var datos= new FormData(formulario);
        fetch('../../controller/Produccion/Registro_Bitacora.php', {
            method: 'POST',
            body: datos
        })

        .then(res => res.json())
        .then(data => {
            if (data === 'exito') {
                alert("Registro exitoso");
                location.href="../../view/Produccion/Registro_Bitacora.html";
            }
            //los datos no pasaron alguna validacion
            else if (data === 'no exito'){
                alert("Hubo un error");
            }else if (data === 'lote'){
                alert("Este lote ya esta registrado");
            }else if (data === 'guia'){
                alert("Este número de guia ya esta registrado");
            }else{
                alert (data)
            }
        })
    }  
})

document.addEventListener('DOMContentLoaded', function() {
    var selectEspecie = document.getElementById('especie');

    fetch('../../controller/Produccion/Obtener_Categorias_Clase_Especie.php?tipo=especies')
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

//responde cuando hay un click en el boton cancelar
formulario.cancelar.addEventListener('click', function (e){
    e.preventDefault();
    let urlAct = window.location+''

    var resp = confirm("Los cambios realizados no se guardarán, ¿desea continuar?");
    if(resp ==  true){
      window.location.href='Mostrar_Bitacora.html';
    }

    
})