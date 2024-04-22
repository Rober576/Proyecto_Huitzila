<?php
include_once("../../model/Insumos/Mostrar_Producto.php");

$id = $_GET['id'];

$base = new Mostrar();
$base->instancias();
$producto = $base->getProducto($id);
$descripcion = $producto[0]['Descripcion'];
$stockMin = $producto[0]['StockMinimo'];
$stockMax = $producto[0]['StockMaximo'];
$costoProm = $producto[0]['CostoProm'];
$costoUlt = $producto[0]['CostoUltimo'];
$cantidad = $producto[0]['Cantidad'];
$nombre = $producto[0]['ProductoTerminado'];

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
    document.getElementById('Nombre').value = "<?php echo $nombre; ?>";
</script>
