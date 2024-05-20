<?php
include_once('../../model/Insumos/Mostrar_Insumo_por_Producto.php');

$salida = "";
$id= $_GET['id'];
$base = new Mostrar;
$base->instancias();
$datos = [];


if(isset($_POST['consulta'])) {
    
    $consulta = $_POST['consulta'];

    if($consulta == 'undefined'){
        $resultados = $base->getProducto($id);

    }

    else{
        $resultados = $base->busqueda($consulta);

    }

    $producto = ['produ', 'insum', 'cant', 'costA', 'costT', 'noMov'];

    for($i = 0; $i < count($resultados); $i++){
        $producto[0] = $resultados[$i]["IDProducto"];
        $producto[1] = $resultados[$i]["IDInsumos"];
        $producto[2] = $resultados[$i]["Cantidad"];
        $producto[3] = $resultados[$i]["CostoActual"];
        $producto[4] = $resultados[$i]["CostoTotal"];
        $producto[5] = $resultados[$i]["NoInsumo"];
        array_push($datos, $producto);
    }

    echo json_encode($datos);

    
} else {
    echo json_encode("No se recibió ninguna consulta.");
}
?>
