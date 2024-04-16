<?php
// Recoger los valores de los campos del formulario
include_once('../../../../model/Agricola/Plagas_Y_Herbicidas/Modificar/Mod_Datos_Herbicidas.php');
$cNom = $_POST["nomHerb"];
$cFab = $_POST["fabriHerb"];
$cDes = $_POST["descHerb"];


//instanciar la clase y llamar la funcion para insertar
$obj = new NuevosCampos();
$obj->conexion();
$obj->editar($cNom, $cFab, $cDes);
echo json_encode('exito');
?>


