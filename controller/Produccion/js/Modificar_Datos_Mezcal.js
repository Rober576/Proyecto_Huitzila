//declara las variables globales
var formulario = document.getElementById('form_datos');
var respuesta = document.getElementById('respuesta');

//responde cuando hay un click en el boton
formulario.addEventListener('submit', function (e)

{
    console.log("Mensaje de prueba en la consola");
    var datos= new FormData(formulario);
    console.log("entro aqui")
    fetch('../php/Modificar_Mezcal.php', {
        method: 'POST',
        body: datos
    })

    .then(res => res.json())
    .then(data => {
        if (data === 'exito') {
            alert("Actualización exitosa");
            location.href="../../../view/Produccion/Mostrar_Mezcal.html";
        }
        //los datos no pasaron alguna validacion
        else if (data === 'no exito'){
            alert("Hubo un error");
        }else{
            alert (data)
        }
    })
}
)

//responde cuando hay un click en el boton cancelar
formulario.cancelar.addEventListener('click', function (e){
    e.preventDefault();
    let urlAct = window.location+''
    console.log("Mensaje de prueba en la consola");

    var resp = confirm("Los cambios realizados no se guardarán, ¿desea continuar?");
    if(resp ==  true){
      window.location.href='../../../view/Produccion/Mostrar_Mezcal.html';
    }    
})