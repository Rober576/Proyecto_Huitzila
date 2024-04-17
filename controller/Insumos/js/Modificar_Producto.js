var formulario = document.getElementById('insumos_form')
var respuesta = document.getElementById('respuesta')


formulario.addEventListener('submit', function(e){
    console.log("si entra al otro js 2")
    e.preventDefault()
    var datos = new FormData(formulario)

    //fusiona el html con el php de la logica y validaciones
    fetch('../../controller/insumos/Modificar_Producto.php', {
        method: 'POST',
        body: datos
    })
        //recibe el mensaje para mandarlo como alerta
        .then(res => res.json())
        .then(data =>
        {
            console.log(data)
            //el registro fue exitoso
            if (data === 'todo chido') {
                alert("Registro exitoso");
                location.href = '../../view/insumos/Mostrar_Producto.html';
            }

            //los datos no pasaron alguna validacion
            else {
                alert(data);
            }
        })
})