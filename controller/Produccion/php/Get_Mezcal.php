<?php
include_once('../../../model/Produccion/Registrar/Mostrar/Mostrar_Mezcal.php');
include_once('../../../view/Produccion/Modificar_Mezcal.html');

$id=$_GET["id"];
$objeto=new MostrarMez();
$resultado=$objeto->buscar_datos($id);
$lote=$resultado[0]['Lote'];
$tanque=$resultado[0]['Tanque'];
$categoria=$resultado[0]['IDCategoria'];
$clase=$resultado[0]['IDClase'];
$especie=$resultado[0]['Especie'];
$edad=$resultado[0]['Edad'];
?>
<!-- script para poner los valores en los campos correspondientes -->

<script languaje="javascript">
    document.addEventListener('DOMContentLoaded', function() {
    var selectEspecie = document.getElementById('especie');
    var agave ="<?php echo $agave ?>"

    fetch('Obtener_Categorias_Clase_Especie.php?tipo=especies')
    .then(response => response.json())
    .then(data => {
        data.forEach(item => {
            var option = document.createElement('option');
            option.value = item;
            option.textContent = item;

            if (selectEspecie) {
                selectEspecie.appendChild(option);
            }
            if(item==agave){
                selectEspecie.value=agave;
            }
        });
    })
    .catch(error => console.error('Error al obtener especies:', error));
});

    document.getElementById("Lote").value = "<?php echo $lote ?>";
    document.getElementById("Tanque").value = "<?php echo $tanque ?>";
    document.getElementById("IDCategoria").value = "<?php echo $categoria ?>";
    document.getElementById("IDClase").value = "<?php echo $clase ?>";
    document.getElementById("Especie").value = "<?php echo $especie ?>";
    document.getElementById("Edad").value = "<?php echo $edad ?>";
   
   
</script>