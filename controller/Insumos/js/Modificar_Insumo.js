var formulario = document.getElementById('insumos_form'); 
var mod = true;
console.log("si");

formulario.addEventListener('submit', function (e) {
    e.preventDefault();

    if (e.submitter.id === 'registrar') { 
        var datos = new FormData(formulario);

        fetch('../../controller/Insumos/Modificar_Insumo.php', { 
            method: 'POST',
            body: datos
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data === 'exito') {
                const form = document.getElementById('insumos_form'); 
                form.reset();
                alert("Se han modificado los datos");
                
                window.location.href = '../../view/Insumos/Mostrar_Insumos.html';
            } else if (data === 'id_existente') { 
                alert("El ID ya existe");
            }
        });
    }
});
