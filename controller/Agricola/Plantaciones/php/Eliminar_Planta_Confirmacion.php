<?php

include_once('../../../../model/Agricola/Plantaciones/Modificar/Eliminar_Planta.php');

$base = new EliminarCampos();
$base->instancias();

$id = isset($_GET['id']) ? $_GET['id'] : null;
$base->eliminar($id);
echo json_encode('Eliminado con éxito');
?>