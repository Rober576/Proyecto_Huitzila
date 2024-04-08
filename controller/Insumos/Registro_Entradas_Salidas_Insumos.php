<?php
include_once('../../model/Insumos/Registro_Entradas_Salidas_Insumos.php');
$c1 = $_POST["Id_insumos"];
$c2 = $_POST["Fecha"];
$c3 = $_POST["Entrada_Salida"];
$c4 = $_POST["ID_Movimiento"];
$c5 = $_POST["Destino"];
$c6 = $_POST["Cantidad"];
$c7 = $_POST["Costo_Unitario"];
$c8 = $_POST["Costo_Total"];


$obj = new Registro();
$obj->conexion();
$obj->insertar($c1, $c2, $c3, $c4, $c5, $c6, $c7, $c8);
echo json_encode('exito');
?>
