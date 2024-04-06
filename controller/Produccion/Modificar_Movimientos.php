<?php
require_once('../../model/Produccion/Mod_Movimientos_Mezcal.php');
$objeto = new modificarMez();
$lote = $_POST["lote"];
$fecha = $_POST["fecha"];
$tipo = $_POST["tipo"];
$procedencia = $_POST["procedencia"];
$movimiento = $_POST["mov"];
$volumen = $_POST["volumen"];
$volumen2 = $_POST["vol_agua"];
$concentracion = $_POST["alc_vol"];


// Realiza la actualización con el ID de movimiento obtenido
$u = $objeto->actualizar($lote, $fecha, $tipo, $procedencia, $movimiento, $volumen, $volumen2, $concentracion);

if ($u == true) {
    echo json_encode('exito');
} else {
    echo json_encode('Error al actualizar el movimiento.');
}
?>

