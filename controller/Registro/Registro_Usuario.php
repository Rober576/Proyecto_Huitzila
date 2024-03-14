<?php
// Recoger los valores de los campos del formulario
include_once('../../model/Registro/Registro_usuario.php');
include_once('../../model/Registro/Registro_areausuario.php');
$Clave = $_POST["Clave"];
$Nombre = $_POST["Nombre"];
$ApellidoPaterno = $_POST["ApellidoPaterno"];
$ApellidoMaterno = $_POST["ApellidoMaterno"];
$IdentificadorArea = $_POST["IdentificadorArea"];
$Correo = $_POST["Correo"];
$Password = $_POST["Password"];

//instanciar la clase y llamar la funcion para insertar
$usarios = new Registro_usuarios();
$usarios->conexion();
$usarios->insertar($Clave, $Nombre, $ApellidoPaterno, $ApellidoMaterno, $Correo, $Password);
$areausuarios=new Registro_areausuarios();
$areausuarios->conexion();
$areausuarios->insertar($Clave, $IdentificadorArea);
?>
