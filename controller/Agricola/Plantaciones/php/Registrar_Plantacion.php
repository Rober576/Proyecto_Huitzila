<?php
// Recoger los valores de los campos del formulario
include_once('../../../../model/Agricola/Plantaciones/Registrar/Registrar_Plantacion.php');


$ClavePlantacion = $_POST["codPlantacion"];
$Superficie = $_POST["superfPre"];
$CantidadPlantas = $_POST["canPlan"];
$Fecha = $_POST["fecPlant"];
$CodigoArea = $_POST["predioSem"];
$Planta = $_POST["tipPlanta"];


/*
$Trabajador = $_POST["nomTraba"];
$Vehiculo = $_POST["datVec"];
$Gasolina = $_POST["costGas"];
$CostoMaterial = $_POST["cosMate"];
$FechaInicio = $_POST["fecIni"];
$FechaFin = $_POST["fecFin"];
*/

//instanciar la clase y llamar la funcion para insertar
$obj = new NuevosCampos();
$obj->conexion();
$obj->insertarPlantacion($ClavePlantacion, $Superficie, $CantidadPlantas, $Fecha, $CodigoArea);
echo json_encode('exito');
?>