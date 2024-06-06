var formulario = document.getElementById('insumos_form')
var respuesta = document.getElementById('respuesta')

formulario.addEventListener('submit', function(e){
    console.log("si entra al otro js")
    e.preventDefault()
    var datos = new FormData(formulario)

    //fusiona el html con el php de la logica y validaciones
    fetch('../../controller/Insumos/Registro_Insumo_Por_Producto.php', {
        method: 'POST',
        body: datos
    })
        //recibe el mensaje para mandarlo como alerta
        .then(res => res.json())
        .then(data =>
        {
            //el registro fue exitoso
            if (data === 'todo chido') {
                alert("Registro exitoso");
                location.href = '../../view/insumos/Registro_Producto.html';
            }

            //los datos no pasaron alguna validacion
            else {
                alert(data);
            }
        })
})