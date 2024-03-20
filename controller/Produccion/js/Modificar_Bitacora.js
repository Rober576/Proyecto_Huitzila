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
        fetch('../../controller/Produccion/Modificar_Bitacora.php', {
            method: 'POST',
            body: datos
        })

        .then(res => res.json())
        .then(data => {
            if (data === 'exito') {
                alert("Actualización exitosa");
                location.href="../../view/Produccion/Mostrar_Bitacora.html";
            }
            //los datos no pasaron alguna validacion
            else if (data === 'no exito'){
                alert("Hubo un error");
            }else if (data === 'lote'){
                alert("Este lote ya esta registrado");
            }else{
                alert (data)
            }
        })
    }
})

//responde cuando hay un click en el boton cancelar
formulario.cancelar.addEventListener('click', function (e){
    e.preventDefault();
    let urlAct = window.location+''

    var resp = confirm("Los cambios realizados no se guardarán, ¿desea continuar?");
    if(resp ==  true){
      window.location.href='../../view/Produccion/Mostrar_Bitacora.html';
    }

    
})