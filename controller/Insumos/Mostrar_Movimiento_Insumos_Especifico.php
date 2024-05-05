<?php
include_once('../../model/Insumos/Mostrar_Movimiento_Insumos_Especifico.php');

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

    $producto = ['fecha', 'nombre', 'movimiento', 'destino', 'cantidad', 'costouni', 'costotot', 'cantidadrest']; 

    for($i = 0; $i < count($resultados); $i++){
        $producto[0] = $resultados[$i]["Fecha"];
        $producto[1] = $resultados[$i]["NombreInsumo"]; 
        $producto[2] = $resultados[$i]["EntradaSalida"];
        $producto[3] = $resultados[$i]["Destino"];
        $producto[4] = $resultados[$i]["Cantidad"];
        $producto[5] = $resultados[$i]["CostoUnitario"];
        $producto[6] = $resultados[$i]["CostoTotal"];
        $producto[7] = $resultados[$i]["CantidadRestante"];
        array_push($datos, $producto);
    }

    echo json_encode($datos);

    
} else {
    echo json_encode("No se recibió ninguna consulta.");
}
?>
