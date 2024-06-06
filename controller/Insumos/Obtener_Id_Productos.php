<?php

include_once('../../config/Crud_bd.php');


function obtenerIdProductos() {
    
    $crud_bd = new Crud_bd();
    
    $crud_bd->conexion_bd();

    
    $query = "SELECT IDProducto, ProductoTerminado FROM productoterminado";

    
    $result = $crud_bd->mostrar($query);

   
    $crud_bd->cerrar_conexion();

    
    echo json_encode($result);
}


obtenerIdProductos();
?>
