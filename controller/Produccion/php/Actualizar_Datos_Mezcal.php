<?php
// Recoger los valores de los campos del formulario
include_once('../../../../model/Produccion/Modificar/Mod_Datos_Mezcal.php');


$cLote = $_POST["CLote"];
$cNomPlanta = $_POST["CNomPlanta"];
$cTanque = $_POST["CTanque"];
$cIdClase=$_POST["CIdClase"];
$cEdad = $_POST["CEdad"];
$cIdMovimiento = $_POST["CIdMovimiento"];
$cIdVolomen = $_POST["CIdVolumen"];
$cConcentracion = $_POST["CConcentracion"];
$cDestinoSalida= $_POST["CDestinoSalida"];
$cIdcategoria = $_POST["CIdcategoria"];
$id= $_POST["id"];

//instanciar la clase y llamar la funcion para insertar
$obj = new NuevosCampos();
$obj->conexion();
$obj->editar($cCod, $cNom, $cSuper, $cDesc, $id);
echo json_encode('exito');
?>


