<?php
// Recoger los valores de los campos del formulario
include_once('../../model/ejemplo/registros/registro_E4.php');
$c1 = $_POST["campo1"];
$c2 = $_POST["campo2"];
$c3 = $_POST["campo3"];

//instanciar la clase y llamar la funcion para insertar
$obj = new NuevosCampos();
$obj->conexion();
$obj->insertar($c1, $c2, $c3);
echo json_encode('exito');
?>


