<?php
session_start();
if (!isset($_SESSION["usuario_id"]) || $_SESSION["rol"] != "usuario") {
    header("Location: login.php");
    exit();
}

// Conectar a la base de datos 
$conexion = new mysqli("localhost", "root", "", "hola");

// Obtener los detalles del administrador
$consulta_user = $conexion->prepare("SELECT nombre, area FROM usuarios WHERE id=?");
$consulta_user->bind_param("i", $_SESSION["usuario_id"]);
$consulta_user->execute();
$resultado_user = $consulta_user->get_result();
$fila_user = $resultado_user->fetch_assoc();
$nombre_user = $fila_user["nombre"];
$area_user = $fila_user["area"];

$conexion->close();
?>