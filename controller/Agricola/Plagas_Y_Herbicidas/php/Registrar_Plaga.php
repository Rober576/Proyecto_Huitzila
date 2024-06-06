<?php
// Recoger los valores de los campos del formulario
include_once('../../../../model/Agricola/Plagas_Y_Herbicidas/Registrar/Registrar_Plaga.php');

$nomPlaga = $_POST["nomPlaga"];
$nomciePlaga = $_POST["nomciePlaga"];
$descPlaga = $_POST["descPlaga"];


//instanciar la clase y llamar la funcion para insertar
$obj = new NuevosCampos();
$obj->conexion();
$obj->insertarPlantacion($nomPlaga, $nomciePlaga, $descPlaga);
echo json_encode('exito');
?>