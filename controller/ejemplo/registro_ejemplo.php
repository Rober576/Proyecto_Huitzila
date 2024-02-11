<?php
// Recoger los valores de los campos del formulario
include_once('../../model/ejemplo/registros/registro_ejemplo.php');
$c1 = $_POST["id1"];
$c2 = $_POST["id2"];
$c3 = $_POST["id3"];
$c4 = $_POST["id4"];
$c5 = $_POST["id5"];

//instanciar la clase y llamar la funcion para insertar
$obj = new NuevosCampos();
$obj->conexion();
$obj->insertar($c1, $c2, $c3, $c4, $c5);
echo json_encode('exito');
?>
