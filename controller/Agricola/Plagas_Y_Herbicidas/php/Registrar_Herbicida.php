<?php
// Recoger los valores de los campos del formulario
include_once('../../../../model/Agricola/Plagas_Y_Herbicidas/Registrar/Registrar_Herbicida.php');

$nomHerb = $_POST["nomHerb"];
$fabriHerb = $_POST["fabriHerb"];
$descHerb = $_POST["descHerb"];


//instanciar la clase y llamar la funcion para insertar
$obj = new NuevosCampos();
$obj->conexion();
$obj->insertarPlantacion($nomHerb, $fabriHerb, $descHerb);
echo json_encode('exito');
?>