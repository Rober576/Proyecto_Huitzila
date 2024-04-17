<?php
include_once("../../model/Insumos/Registro_Modificar_Insumos.php");
include_once("../../model/Insumos/Mostrar_Producto.php");

$id = $_GET['id'];

$base = new Mostrar();
$base->instancias();
$insumo = $base->getProducto($id);
$descripcion = $insumo[0]['Descripcion'];
$stockMin = $insumo[0]['StockMinimo'];
$stockMax = $insumo[0]['StockMaximo'];
$costoProm = $insumo[0]['CostoProm'];
$costoUlt = $insumo[0]['CostoUltimo'];
$cantidad = $insumo[0]['Cantidad'];

include_once("../../view/insumos/Editar_Producto.html")
?>

<script>
    document.getElementById('Identificador').value = "<?php echo $id; ?>";
    document.getElementById('Stockmi').value = "<?php echo $stockMin; ?>";
    document.getElementById('Stockma').value = "<?php echo $stockMax; ?>";
    document.getElementById('CProm').value = "<?php echo $costoProm; ?>";
    document.getElementById('UCosto').value = "<?php echo $costoUlt; ?>";
    document.getElementById('cantidad').value = "<?php echo $cantidad; ?>";
    document.getElementById('Descripcion').value = "<?php echo $descripcion; ?>";
</script>
