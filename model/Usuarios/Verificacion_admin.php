<?php
session_start();

// Función para verificar si el usuario es administrador
function verificar_admin() {
    if (!isset($_SESSION["usuario_id"]) || $_SESSION["rol"] != "admin") {
        header("Location: login.php");
        exit();
    }
}

// Función para conectar a la base de datos
function conectar_bd() {
    $conexion = new mysqli("localhost", "root", "", "hola");
    if ($conexion->connect_error) {
        die("Error de conexión: " . $conexion->connect_error);
    }
    return $conexion;
}

// Función para obtener los detalles del administrador
function obtener_detalles_admin() {
    verificar_admin(); // Verificar si el usuario es administrador
    $conexion = conectar_bd(); // Conectar a la base de datos
    
    $consulta_admin = $conexion->prepare("SELECT nombre, area FROM usuarios WHERE id=?");
    $consulta_admin->bind_param("i", $_SESSION["usuario_id"]);
    $consulta_admin->execute();
    $resultado_admin = $consulta_admin->get_result();
    
    if ($resultado_admin->num_rows == 1) {
        $fila_admin = $resultado_admin->fetch_assoc();
        $nombre_admin = $fila_admin["nombre"];
        $area_admin = $fila_admin["area"];
        $conexion->close();
        return array("nombre" => $nombre_admin, "area" => $area_admin);
    } else {
        $conexion->close();
        return false; // No se encontró el administrador
    }
}



// Obtener los detalles del administrador
$detalles_admin = obtener_detalles_admin();
if ($detalles_admin) {
    $nombre_admin = $detalles_admin["nombre"];
    $area_admin = $detalles_admin["area"];
    // Hacer algo con los detalles obtenidos
}
?>

