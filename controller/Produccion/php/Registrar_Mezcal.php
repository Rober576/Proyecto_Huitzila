<?php
include_once('../../../model/Produccion/Registrar/Registrar_Mezcal.php');

// Obtener datos del formulario
$lote = $_POST['lote'];
$tanque = $_POST['tanque'];
$categoria = $_POST['categoria'];
$especie = $_POST['especie'];
$clase = $_POST['clase'];
$edad = $_POST['edad'];
$concentracion = $_POST['concentracion'];
$volumen = $_POST['volumen'];

//instanciar la clase y llamar la funcion para insertar
$obj = new NuevosCampos();
$obj->conexion();
$obj->insertar($lote, $tanque, $categoria, $clase, $edad, $concentracion, $volumen);
echo json_encode('exito');
?>
