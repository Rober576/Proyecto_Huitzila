<?php
// Recoger los valores de los campos del formulario
include_once('../../../../model/Produccion/Modificar/Mod_Datos_Mezcal.php');



$lote = $_POST['lote'];
$tanque = $_POST['tanque'];
$categoria = $_POST['categoria'];
$clase = $_POST['clase'];
$edad = $_POST['edad'];

//instanciar la clase y llamar la funcion para insertar
$obj = new NuevosCampos();
$obj->conexion();
$obj->editar($lote, $tanque, $categoria, $clase,$edad, $id);
echo json_encode('exito');
?>


