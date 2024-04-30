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

/*
$Tipo_Actividad = "Fertilización";
$Fecha_Inicio = "2024-04-03";
$Semanas = "6";
$Costos_Generales = "456";
$Descripcion = "hola 11233";
$CostosImplicados = "no";
$Total = "1000";

*/

if ($CostosImplicados == "no"){
    //instanciar la clase y llamar la funcion para insertar
    $obj = new NuevosCampos();
    $obj->conexion();
    $obj->insertarActividadSinTrabajadores($Clave_Plantacion, $Fecha_Inicio, $Tipo_Actividad, NULL,NULL, $Costos_Generales, $Costos_Generales, $Descripcion);
    echo json_encode('exito');
}




?>