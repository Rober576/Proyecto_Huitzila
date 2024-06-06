<?php
// Recoger los valores de los campos del formulario
include_once('../../../../model/Agricola/Plantaciones/Registrar/Registrar_Planta.php');

$NombrePlanta = $_POST["nomPlanta"];
$NombreCientifico = $_POST["nomCienti"];
$Descripcion = $_POST["descPla"];


//instanciar la clase y llamar la funcion para insertar
$obj = new NuevosCampos();
$obj->conexion();
$obj->insertarPlantacion($NombrePlanta, $NombreCientifico, $Descripcion);
echo json_encode('exito');
?>