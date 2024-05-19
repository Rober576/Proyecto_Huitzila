<?php
// Recoger los valores de los campos del formulario
include_once('../../model/Insumos/Registro_prod_lote.php');
$c1 = $_POST["Lote"];
$c2 = $_POST["Id_productos"];
$c3 = $_POST["Cantidad"];


//instanciar la clase y llamar la funcion para insertar
$obj = new Registro_Prod_Lotes();
$obj->conexion();
$obj->insertar($c1, $c2, $c3);
echo json_encode('exito');
?>
