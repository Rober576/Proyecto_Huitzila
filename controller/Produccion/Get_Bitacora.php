<?php
include_once('../../model/Produccion/Mostrar_BitacoraM.php');
include_once('../../view/Produccion/Modificar_Bitacora.html');

$id=$_GET["id"];

$objeto=new MostrarBit();
$resultado=$objeto->buscar_datos($id);
$procedencia=$resultado[0]['Procedencia'];
$costo=$resultado[0]['Costo'];
$lote=$resultado[0]['Lote'];
$fecha=$resultado[0]['FechaEntrada'];
$guia=$resultado[0]['NoGuia'];
$agave=$resultado[0]['NombrePlanta'];
$kgAgave=$resultado[0]['KgAgave'];
$brix=$resultado[0]['Brix'];
$kgArt=$resultado[0]['KgArt'];
$kgCoccion=$resultado[0]['KgCoccion'];
$fechaI=$resultado[0]['FechaInicio'];
$fechaF=$resultado[0]['FechaFinal'];
$kgArtC=$resultado[0]['KgArtCoccion'];

if ($procedencia=="Interno"){
    $proce="procedencia1";
}else if ($procedencia=="Externo"){
    $proce="procedencia2";
}

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

    document.getElementById("lote").value = "<?php echo $lote ?>";
    document.getElementById("lote").readOnly = true;
    document.getElementById("procedencia").value = "<?php echo $proce?>";
    document.getElementById("costo").value = "<?php echo $costo ?>";
    document.getElementById("fecha").value = "<?php echo $fecha ?>";
    document.getElementById("guia").value = "<?php echo $guia ?>";
    document.getElementById("guia").readOnly = true;
    document.getElementById("agave").value = "<?php echo $kgAgave ?>";
    document.getElementById("brix").value = "<?php echo $brix ?>";
    document.getElementById("art").value = "<?php echo $kgArt ?>";
    document.getElementById("coccion").value = "<?php echo $kgCoccion ?>";
    document.getElementById("fecha_inicio").value = "<?php echo $fechaI ?>";
    document.getElementById("fecha_fin").value = "<?php echo $fechaF ?>";
    document.getElementById("art2").value = "<?php echo $kgArtC ?>";
</script>