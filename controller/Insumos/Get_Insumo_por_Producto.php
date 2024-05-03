<?php
include_once("../../model/Insumos/Mostrar_Insumo_por_Producto.php");

$id = $_GET['id'];
$base = new Mostrar();
$base->instancias();
$insumo = $base->getInsumo($id);

if (!empty($insumo)) {
    $id_producto = $insumo[0]['IDProducto'];
    $id_insumo = $insumo[0]['IDInsumos'];
    $cantidad = $insumo[0]['Cantidad'];
    $costo_uni = $insumo[0]['CostoActual'];
    $costo_tot = $insumo[0]['CostoTotal'];
    $no_movimiento = $insumo[0]['NoInsumo'];
    
} else {
    
    echo "El insumo no fue encontrado.";
    exit; 
}


include_once("../../view/insumos/Editar_Insumo_Por_Producto.html");
?>

<script>
    document.getElementById('Id_Productos').value = '<?php echo $id_producto; ?>';
    document.getElementById('Id_Insumos').value = '<?php echo $id_insumo; ?>';
    document.getElementById('Cantidad').value = '<?php echo $cantidad; ?>';
    document.getElementById('Costo_uni').value = '<?php echo $costo_uni; ?>';
    document.getElementById('Costo_tot').value = '<?php echo $costo_tot; ?>';
    document.getElementById('NoInsumo').value = '<?php echo $no_movimiento; ?>';
</script>