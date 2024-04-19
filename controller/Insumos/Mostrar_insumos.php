<?php
include_once('../../model/Insumos/Mostrar_insumos.php');

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

    $producto = ['id', 'nom', 'desc', 'uni', 'exist', 'date', 'smin', 'smax', 'cost'];

    for($i = 0; $i < count($resultados); $i++){
        $producto[0] = $resultados[$i]["IDInsumo"];
        $producto[1] = $resultados[$i]["NombreInsumo"];
        $producto[2] = $resultados[$i]["Descripcion"];
        $producto[3] = $resultados[$i]["Unidades"];
        $producto[4] = $resultados[$i]["Existencia"];
        $producto[5] = $resultados[$i]["FechaReg"];
        $producto[6] = $resultados[$i]["StockMinimo"];
        $producto[7] = $resultados[$i]["StockMaximo"];
        $producto[8] = $resultados[$i]["Costo"];
        array_push($datos, $producto);
    }

    echo json_encode($datos);

    
} else {
    // Si no se recibió ninguna consulta, puedes devolver un mensaje de error o manejar la situación según tus necesidades
    echo json_encode("No se recibió ninguna consulta.");
}
?>



