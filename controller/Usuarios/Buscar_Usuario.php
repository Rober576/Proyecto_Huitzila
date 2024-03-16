<?php
include_once('../../model/Usuarios/Registro_usuario.php');
$Clave = $_POST["clave_us"];

$usarios = new Buscar_usuarios();
$usarios->conexion();
$usarios->buscar($Clave);
?>