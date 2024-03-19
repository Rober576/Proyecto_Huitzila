<?php
include_once('../../model/Produccion/Eliminar_Bitacora.php');

$base = new EliminarCampos();
$base->instancias();


// Utiliza $_GET para obtener el valor del ID desde la URL
$Guia = isset($_GET['id']) ? $_GET['id'] : null;
$base->eliminar($Guia);
echo json_encode('Eliminado con éxito');
?> 