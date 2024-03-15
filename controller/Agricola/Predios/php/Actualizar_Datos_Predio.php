<?php
// Recoger los valores de los campos del formulario
include_once('../../../../model/Agricola/Predios/Modificar/Mod_Datos_Predio.php');
$cCod = $_POST["codArea"];
$cNom = $_POST["nomPred"];
$cSuper = $_POST["superfPre"];
$cDesc = $_POST["desdescPrec"];
$id= $_POST["id"];

//instanciar la clase y llamar la funcion para insertar
$obj = new NuevosCampos();
$obj->conexion();
$obj->editar($cCod, $cNom, $cSuper, $cDesc, $id);
echo json_encode('exito');
?>


