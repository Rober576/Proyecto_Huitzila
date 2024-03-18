<?php
include_once('../../../model/Produccion/Registrar/Mostrar/Mostrar_Mezcal.php');
include_once('../../../view/Produccion/Modificar_Mezcal.html');

$lote=$_GET["lote"];

$objeto=new MostrarMez();
$resultado=$objeto->buscar_datos($id);

$lote=$resultado[0]['lote'];
$tanque=$resultado[0]['tanque'];
$categoria=$resultado[0]['categoria'];
$clase=$resultado[0]['IDClase'];
$especie=$resultado[0]['especie'];
$edad=$resultado[0]['edad'];


?>
<!-- script para poner los valores en los campos correspondientes -->

<script languaje="javascript">


document.addEventListener('DOMContentLoaded', function() {
    var selectClase = document.getElementById('clases');
   
    fetch('Obtener_Categorias_Clase_Especie.php?tipo=clases')
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
});

document.addEventListener('DOMContentLoaded', function() {
    var selectCategoria = document.getElementById('categorias');
   
    fetch('Obtener_Categorias_Clase_Especie.php?tipo=categorias')
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
    .catch(error => console.error('Error al obtener categoias:', error));
});


    document.getElementById("lote").value = "<?php echo $lote ?>";
    document.getElementById("tanque").value = "<?php echo $tanque ?>";
    document.getElementById("categoria").value = "<?php echo $categoria ?>";
    document.getElementById("IDClase").value = "<?php echo $clase ?>";
    document.getElementById("especie").value = "<?php echo $especie ?>";
    document.getElementById("edad").value = "<?php echo $edad ?>";
   
   
</script>