<?php
// Recoger los valores de los campos del formulario
include_once('../../../../model/Agricola/Actividades/Modificar/Mod_Datos_Actividades.php');


$ActivRealizada = $_POST["actividadSele"];
$Fecha = $_POST["fechaIni"];
$Semanas = $_POST["canFecha"];
$GastGenerales = $_POST["cosGenral"];
$Descri = $_POST["descAct"];
$Plaga = $_POST["selePlaga"];
$Herbicida = $_POST["seleHerbicida"];


//instanciar la clase y llamar la funcion para insertar
$obj = new NuevosCampos();
$obj->conexion();
$obj->editar($ActivRealizada,$Fecha,$Semanas,$GastGenerales,$Descri,$Plaga,$Herbicida);
echo json_encode('exito');
?>


