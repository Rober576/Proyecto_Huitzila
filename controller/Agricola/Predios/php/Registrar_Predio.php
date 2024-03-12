<?php
// Recoger los valores de los campos del formulario
include_once('../../../../model/Agricola/Predios/Registrar/Registrar_Predio.php');

$clave = $_POST["codArea"];
$nombre = $_POST["nomPred"];
$superficie = $_POST["superfPre"];
$descripcion = $_POST["desdescPrec"];

//instanciar la clase y llamar la funcion para insertar
$obj = new NuevosCampos();
$obj->conexion();
$obj->insertar($clave, $nombre, $superficie, $descripcion);
echo json_encode('exito');
?>