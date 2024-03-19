<?php
include_once('../../model/Insumos/Eliminar_Insumo_model.php');

// Instancia de la clase del modelo para eliminar insumos
$base = new Eliminar_Campos();
$base->instancias();

$base->eliminar($_GET['id']);
echo json_encode('Eliminado con éxito');
?>