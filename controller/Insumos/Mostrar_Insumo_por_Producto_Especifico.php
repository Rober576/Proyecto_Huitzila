<?php
/*include_once('../../model/Insumos/Mostrar_Insumo_por_Producto.php');

$salida = "";
$base = new Mostrar;
$base->instancias();
$datos = [];


if(isset($_POST['consulta'])) {
    
    $consulta = $_POST['consulta'];

    if($consulta == 'undefined'){
        $resultados = $base->busqueda();

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
}*/
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
        $producto[2] = $resultados[$i]["CostoUltimo"];
        $producto[3] = $resultados[$i]["Cantidad"];
        array_push($datos, $producto);
    }

    echo json_encode($datos);

    
} else {
    // Si no se recibió ninguna consulta, puedes devolver un mensaje de error o manejar la situación según tus necesidades
    echo json_encode("No se recibió ninguna consulta.");
}
?>
