<?php
// Recoger los valores de los campos del formulario
include_once('../../model/Usuarios/Modificar_Usuario.php');
$id= $_POST["clave_us"];
$c1 = $_POST["nombre_us"];
$c2 = $_POST["apellido_pat"];
$c3 = $_POST["apellido_mat"];
$c4 = $_POST["email_us"];
$c5 = $_POST["tipo_us"];
$c6 = $_POST["area_us"];

//instanciar la clase y llamar la funcion para insertar
$obj = new NuevosCampos();
$obj->conexion();
$obj->insertar($id, $c1,$c2, $c3, $c4, $c5, $c6);
?>