<?php
include_once("../../model/Insumos/Mostrar_Insumos.php");

$id = $_GET['id'];
$base = new Mostrar();
$base->instancias();
$insumo = $base->getInsumo($id);

$nombre = $insumo[0]['NombreInsumo'];
$descripcion = $insumo[0]['Descripcion'];
$unidades = $insumo[0]['Unidades'];
$existencia = $insumo[0]['Existencia'];
$fecha = $insumo[0]['FechaReg'];    
$smin = $insumo[0]['StockMinimo'];
$smax = $insumo[0]['StockMaximo'];
$costo = $insumo[0]['Costo'];   

include_once("../../view/Insumos/Editar_Insumos.html");
?>

<script>
    document.getElementById('Nombre').value = '<?php echo $nombre; ?>';
    document.getElementById('Descripcion').value = '<?php echo $descripcion; ?>';
    document.getElementById('Unidades').value = '<?php echo $unidades; ?>';
    document.getElementById('Existencia').value = '<?php echo $existencia; ?>';
    document.getElementById('FechaReg').value = '<?php echo $fecha; ?>';
    document.getElementById('Stockmi').value = '<?php echo $smin; ?>';
    document.getElementById('Stockma').value = '<?php echo $smax; ?>';
    document.getElementById('Costo').value = '<?php echo $costo; ?>';
    document.getElementById('Identificador').value = '<?php echo $id; ?>';
</script>