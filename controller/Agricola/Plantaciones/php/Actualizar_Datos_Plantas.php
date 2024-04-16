<?php
// Recoger los valores de los campos del formulario
include_once('../../../../model/Agricola/Plantaciones/Modificar/Modificar_Datos_Planta.php');

$cNom = $_POST["nomPlanta"];
$cNomC = $_POST["nomCienti"];
$cDes = $_POST["descPla"];


//instanciar la clase y llamar la funcion para insertar
$obj = new NuevosCampos();
$obj->conexion();
$obj->editar($cNom, $cNomC, $cDes);
echo json_encode('exito');
?>
