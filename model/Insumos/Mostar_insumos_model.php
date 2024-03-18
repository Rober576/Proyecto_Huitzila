<?php
// Incluir el archivo Crud.php para interactuar con la base de datos
require_once '../../config/Crud_bd.php';

// Función para obtener todos los insumos desde la base de datos
function obtener_Insumos() {
    // Crear una instancia de la clase Crud_bd para realizar consultas
    $crud = new Crud_bd();
    $conexion = $crud->conexion_bd();
    // Consulta SQL para seleccionar todos los insumos
    $query = "SELECT * FROM insumos";
    // Ejecutar la consulta y obtener los resultados
    $insumos = $crud->mostrar($query);
    // Cerrar conexión con la base de datos
    $crud->cerrar_conexion();
    return $insumos;
}
?>

