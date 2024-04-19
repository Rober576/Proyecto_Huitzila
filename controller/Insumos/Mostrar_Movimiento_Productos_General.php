<?php
include_once('../../model/Insumos/Mostrar_Movimiento_Productos_General.php');

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

    $producto = ['id', 'nombre', 'can', 'costouni']; 

    for($i = 0; $i < count($resultados); $i++){
        $producto[0] = $resultados[$i]["IDProducto"];
        $producto[1] = $resultados[$i]["NombreProducto"]; 
        $producto[2] = $resultados[$i]["Cantidad"];
        $producto[3] = $resultados[$i]["CostoUnitario"];
        array_push($datos, $producto);
    }

    echo json_encode($datos);

    
} else {
    echo json_encode("No se recibió ninguna consulta.");
}
?>
