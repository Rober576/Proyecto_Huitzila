<?php
// Recoger los valores de los campos del formulario
include_once('../../../../model/Agricola/Plantaciones/Registrar/Registrar_Planta.php');

$Tipo_Actividad = $_POST[""];
$Fecha_Inicio = $_POST[""];
$Fecha_Fin = $_POST[""];
$Descripcion = $_POST[""];
$Costos = $_POST[""];




//instanciar la clase y llamar la funcion para insertar
$obj = new NuevosCampos();
$obj->conexion();
$obj->insertarPlantacion($NombrePlanta, $NombreCientifico, $Descripcion);
echo json_encode('exito');
?>