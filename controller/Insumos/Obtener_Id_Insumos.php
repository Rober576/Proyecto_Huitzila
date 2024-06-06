<?php

include_once('../../config/Crud_bd.php');


function obtenerIdNombreInsumos() {
    
    $crud_bd = new Crud_bd();
    
    $crud_bd->conexion_bd();

    
    $query = "SELECT IDInsumo, NombreInsumo FROM insumos";

    
    $result = $crud_bd->mostrar($query);

   
    $crud_bd->cerrar_conexion();

    
    echo json_encode($result);
}


obtenerIdNombreInsumos();
?>
