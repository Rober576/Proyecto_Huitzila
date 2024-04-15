<?php
// Recoger los valores de los campos del formulario
include_once('../../../../model/Agricola/Plagas_Y_Herbicidas/Modificar/Mod_Datos_Plagas.php');
$cCie = $_POST["nomciePlaga"];
$cNom = $_POST["nomPlaga"];
$cDes = $_POST["tratPlaga"];


//instanciar la clase y llamar la funcion para insertar
$obj = new NuevosCampos();
$obj->conexion();
$obj->editar($cCie, $cNom, $cDes);
echo json_encode('exito');
?>


