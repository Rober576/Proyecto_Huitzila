<?php
include_once('../../model/Insumos/Mostrar_Producto.php');

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

    $producto = ['id', 'des', 'max', 'min', 'cp', 'uc', 'can'];

    for($i = 0; $i < count($resultados); $i++){
        $producto[0] = $resultados[$i]["IDProducto"];
        $producto[1] = $resultados[$i]["Descripcion"];
        $producto[2] = $resultados[$i]["StockMinimo"];
        $producto[3] = $resultados[$i]["StockMaximo"];
        $producto[4] = $resultados[$i]["CostoProm"];
        $producto[5] = $resultados[$i]["CostoUltimo"];
        $producto[6] = $resultados[$i]["Cantidad"];
        $producto[7] = $resultados[$i]["ProductoTerminado"];
        array_push($datos, $producto);
    }

    echo json_encode($datos);

    
} else {
    // Si no se recibió ninguna consulta, puedes devolver un mensaje de error o manejar la situación según tus necesidades
    echo json_encode("No se recibió ninguna consulta.");
}
?>
