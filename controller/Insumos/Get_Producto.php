<?php
include_once("../../model/Insumos/Mostrar_Producto.php");

$id = $_GET['id'];

$base = new Mostrar();
$base->instancias();
$producto = $base->getProducto($id);
$descripcion = $producto[0]['Descripcion'];
$stockMin = $producto[0]['StockMinimo'];
$stockMax = $producto[0]['StockMaximo'];
$nombre = $producto[0]['ProductoTerminado'];
// $costoProm = $producto[0]['CostoProm'];
// $costoUlt = $producto[0]['CostoUltimo'];
// $cantidad = $producto[0]['Cantidad'];


include_once("../../view/insumos/Editar_Producto.html")
?>

<script>
    document.getElementById('Identificador').value = "<?php echo $id; ?>";
    document.getElementById('Stockmi').value = "<?php echo $stockMin; ?>";
    document.getElementById('Stockma').value = "<?php echo $stockMax; ?>";
    document.getElementById('Descripcion').value = "<?php echo $descripcion; ?>";
    document.getElementById('Nombre').value = "<?php echo $nombre; ?>";
</script>
