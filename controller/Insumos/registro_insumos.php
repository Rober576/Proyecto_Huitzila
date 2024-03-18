<?php
// Recoger los valores de los campos del formulario
include_once('../../model/ejemplo/registros/reg_insumos_model.php');
$c1 = $_POST["Identificador"];
$c2 = $_POST["Nombre"];
$c3 = $_POST["Descripcion"];
$c4 = $_POST["Unidades"];
$c5 = $_POST["Existencia"];
$c6 = $_POST["FechaReg"];
$c7 = $_POST["Stockmi"];
$c8 = $_POST["Stockma"];
$c9 = $_POST["Costo"];

//instanciar la clase y llamar la funcion para insertar
$obj = new Registro_Insumos();
$obj->conexion();
$obj->insertar($c1, $c2, $c3, $c4, $c5, $c6, $c7, $c8, $c9);
echo json_encode('exito');
?>
