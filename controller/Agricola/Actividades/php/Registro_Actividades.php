<?php
// Recoger los valores de los campos del formulario
include_once('../../../../model/Agricola/Actividades/Registrar/Registro_Actividades.php');

$Clave_Plantacion = "L1234";

$Tipo_Actividad = $_POST["actividadSele"];
$Fecha_Inicio = $_POST["fechaIni"];
$Semanas = $_POST["canFecha"];
$Costos_Generales = $_POST["cosGenral"];
$Descripcion = $_POST["descAct"];
$CostosImplicados = $_POST["cosPre"];
$Total = $_POST["total"];
$NombrePlaga = $_POST["selePlaga"];
$NombreHerbicida = $_POST["seleHerbicida"];

if ($NombrePlaga == ""){
    $NombrePlaga = NULL;
}
if ($NombreHerbicida == ""){
    $NombreHerbicida = NULL;
}


$listaNombreTrabajador = json_decode($_POST['listaNombreTrabajador'], true);
$listaDiasSeleccionados = json_decode($_POST['listaDiasSeleccionados'], true);
$listaDescripcion = json_decode($_POST['listaDescripcion'], true);
$listaGastoGasolina = json_decode($_POST['listaGastoGasolina'], true);
$listaDatosVehiculo = json_decode($_POST['listaDatosVehiculo'], true);
$listaGastoLiquidos = json_decode($_POST['listaGastoLiquidos'], true);
$listaCompraMaterial = json_decode($_POST['listaCompraMaterial'], true);
$listaGastosExtras = json_decode($_POST['listaGastosExtras'], true);
$listaSemana = json_decode($_POST['listaSemana'], true);


if ($CostosImplicados == "no"){
    //instanciar la clase y llamar la funcion para insertar
    $obj = new NuevosCampos();
    $obj->conexion();
    $obj->insertarActividadSinTrabajadores($Clave_Plantacion, $Fecha_Inicio, $Tipo_Actividad, $NombrePlaga,$NombreHerbicida, $Costos_Generales, $Costos_Generales, $Descripcion);
    echo json_encode('exito');
} else{
    //instanciar la clase y llamar la funcion para insertar
    $obj = new NuevosCampos();
    $obj->conexion();
    $obj->insertarActividadConTrabajadores($Clave_Plantacion, $Fecha_Inicio, $Tipo_Actividad, $NombrePlaga,$NombreHerbicida, $Costos_Generales, $Costos_Generales, $Descripcion, $listaNombreTrabajador, $listaDiasSeleccionados, $listaDescripcion, $listaGastoGasolina, $listaDatosVehiculo, $listaGastoLiquidos, $listaCompraMaterial, $listaGastosExtras, $listaSemana);
    echo json_encode('exito');
}
?>