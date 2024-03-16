<?php
// Recoger los valores de los campos del formulario
include_once('../../model/Usuarios/Registro_usuario.php');
$Clave = $_POST["clave_us"];
$Nombre = $_POST["nombre_us"];
$ApellidoPaterno = $_POST["apellido_pat"];
$ApellidoMaterno = $_POST["apellido_mat"];
$Correo = $_POST["email_us"];
$Password = $_POST["email"];
$IdentificadorTipo = $_POST["tipo_us"];
$IdentificadorArea = $_POST["area_us"];

//instanciar la clase y llamar la funcion para insertar
$usarios = new Registro_usuarios();
$usarios->conexion();
$usarios->insertar($Clave, $Nombre, $ApellidoPaterno, $ApellidoMaterno, $Correo, $Password, $IdentificadorTipo, $IdentificadorArea);
?>
