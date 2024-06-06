<?php
include_once('../../model/Produccion/Eliminar_Cremas_Destilados_Licores.php');


$base = new EliminarCampos();
$base->instancias();


$Lote = isset($_GET['id']) ? $_GET['id'] : null;
$resultado = $base->eliminar($Lote);


if ($resultado === true) {
    echo json_encode('Eliminado');
} elseif ($resultado === false) {
    echo json_encode("Lote");
}

