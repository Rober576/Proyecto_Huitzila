<?php
include_once('../../model/Insumos/Mostrar_Producto_por_Insumo.php');

$salida = "";
$base = new Mostrar;
$base->instancias();
$datos = [];

// Verifica si se recibió un valor para la consulta
if(isset($_POST['consulta'])) {
    // Recibe el valor de la consulta
    $consulta = $_POST['consulta'];

    if($consulta == 'undefined'){
        $resultados = $base->busqueda();

    }

    else{
        $resultados = $base->busqueda($consulta);

    }

    $producto = ['produ', 'insum', 'cant', 'costA', 'costT'];

    for($i = 0; $i < count($resultados); $i++){
        $producto[0] = $resultados[$i]["IDProducto"];
        $producto[1] = $resultados[$i]["IDInsumos"];
        $producto[2] = $resultados[$i]["Cantidad"];
        $producto[3] = $resultados[$i]["CostoActual"];
        $producto[4] = $resultados[$i]["CostoTotal"];
        array_push($datos, $producto);
    }

    echo json_encode($datos);

    
} else {
    // Si no se recibió ninguna consulta, puedes devolver un mensaje de error o manejar la situación según tus necesidades
    echo json_encode("No se recibió ninguna consulta.");
}
?>
