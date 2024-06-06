<?php
include_once('../../model/Insumos/Mostrar_Insumos.php');

$salida = "";
$base = new Mostrar;
$base->instancias();
$datos = [];

// Verifica si se recibió un valor para la consulta
if(isset($_POST['consulta'])){
    $consulta = $_POST['consulta'];

    if($consulta == 'undefined'){
        $resultados = $base->busqueda();
    }

    else{
        $resultados = $base->busqueda($consulta);
    }

    $insumo = ['id', 'nom', 'des', 'uni', 'exi', 'fr', 'sm', 'sx', 'cos'];

    for($i = 0; $i < count($resultados); $i++){
        $insumo[0] = $resultados[$i]["IDInsumo"];
        $insumo[1] = $resultados[$i]["NombreInsumo"];
        $insumo[2] = $resultados[$i]["Descripcion"];
        $insumo[3] = $resultados[$i]["Unidades"];
        $insumo[4] = $resultados[$i]["Existencia"];
        $insumo[5] = $resultados[$i]["FechaReg"];
        $insumo[6] = $resultados[$i]["StockMinimo"];
        $insumo[7] = $resultados[$i]["StockMaximo"];
        $insumo[8] = $resultados[$i]["Costo"];
        array_push($datos, $insumo);
    }

    echo json_encode($datos);
}

else{
    echo json_encode("No se recibió ninguna consulta.");
}
?>