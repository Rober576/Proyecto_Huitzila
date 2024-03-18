<?php
// Incluir el modelo
require_once '../../model/Insumos/Mostar_insumos_model.php';

// Obtener los insumos desde el modelo
$insumos = obtener_Insumos();

// Incluir la vista
require '../../view/Insumos/Mostrar_Insumos.html';
?>
