<?php
// Recoger los valores de los campos del formulario
include_once('../../model/ejemplo/registros/registroE2.php');
$c1 = $_POST["campo1"];
$c2 = $_POST["campo2"];
$c3 = $_POST["campo3"];
$c4 = $_POST["campo4"];
$c5 = $_POST["campo5"];

//instanciar la clase y llamar la funcion para insertar
$obj = new NuevosCampos();
$obj->conexion();
$obj->insertar($c1, $c2, $c3, $c4, $c5);
echo json_encode('exito');
?>


