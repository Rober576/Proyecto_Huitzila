<?php
include_once('../../../model/Produccion/Registrar/Eliminar/Eliminar_Mezcal.php');

$base = new EliminarCampos();
$base->instancias();

// Utiliza $_GET para obtener el valor del Lote desde la URL
$Lote = isset($_GET['Lote']) ? $_GET['Lote'] : null;

if ($Lote !== null) {
    // Intenta eliminar el registro
    $eliminado = $base->eliminar($Lote);

    if ($eliminado) {
        echo json_encode('Eliminado con éxito');
    } else {
        echo json_encode('Error al eliminar el registro');
    }
} else {
    echo json_encode('Lote no proporcionado');
}
?> 
