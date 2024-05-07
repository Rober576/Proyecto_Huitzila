<?php
// Recoger los valores de los campos del formulario
include_once('../../../../model/Agricola/Plantaciones/Modificar/Modificar_Plantacion.php');


$ClavePlantacion = $_POST["codPlantacion"];
$Superficie = $_POST["superfPre"];
$CantidadPlantas = $_POST["canPlan"];
$Fecha = $_POST["fecPlant"];

$NombrePlanta = $_POST["tipPlanta"];



//instanciar la clase y llamar la funcion para insertar
$obj = new ModificarCampos();
$obj->conexion();
$obj->modificarPlantacion($ClavePlantacion, $Superficie, $CantidadPlantas, $Fecha,  $NombrePlanta);
echo json_encode('exito');
?>