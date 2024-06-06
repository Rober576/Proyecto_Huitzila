<?php
include_once('../../model/Produccion/Eliminar_Mezcal.php');


$base = new EliminarCampos();
$base->instancias();


$Lote = isset($_GET['id']) ? $_GET['id'] : null;
$resultado = $base->eliminar($Lote);


// Comprobar el resultado y enviar el mensaje correspondiente
if ($resultado === true) {
    echo json_encode('Eliminado');
} elseif ($resultado === false) {
    echo json_encode("Lote");
}

