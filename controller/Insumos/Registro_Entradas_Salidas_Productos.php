<?php
include_once('../../model/Insumos/Registro_Entradas_Salidas_Productos.php');

$actualizarExistencia = $_POST["actualizarExistencia"];

if(isset($_POST["Id_productos"], $_POST["Fecha"], $_POST["Entrada_Salida"], $_POST["ID_Movimiento"], $_POST["Destino"], $_POST["Cantidad"], $_POST["Costo_Unitario"], $_POST["Costo_Total"])) {
    $c1 = $_POST["Id_productos"];
    $c2 = $_POST["Fecha"];
    $c3 = $_POST["Entrada_Salida"];
    $c4 = $_POST["ID_Movimiento"];
    $c5 = $_POST["Destino"];
    $c6 = $_POST["Cantidad"];
    $c7 = $_POST["Costo_Unitario"];
    $c8 = $_POST["Costo_Total"];

    
    if (!empty($c1) && !empty($c2) && !empty($c3) && !empty($c4) && !empty($c5) && !empty($c6) && !empty($c7) && !empty($c8)) {
        
        $obj = new Registro();
        $obj->conexion();
        $obj->insertar($c1, $c2, $c3, $c4, $c5, $c6, $c7, $c8, $actualizarExistencia);
        $obj->actualizarExistencia($c1, $actualizarExistencia);
        echo json_encode('exito');
    } else {
        
        echo json_encode('error: datos incompletos');
    }
} else {
   
    echo json_encode('error: datos faltantes');
}
?>
