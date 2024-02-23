<?php
// Recoger los valores de los campos del formulario
include_once('../../model/ejemplo/modificar/modificar_Equipo2.php');
$c1 = $_POST["campo1"];
$c2 = $_POST["campo2"];
$c3 = $_POST["campo3"];
$c4 = $_POST["campo4"];
$id = $_POST["id"];
//instanciar la clase y llamar la funcion para insertar
$obj = new NuevosCampos();
$obj->conexion();
$obj->editar($c1, $c2, $c3, $c4, $id);
echo json_encode('exito');
?>


