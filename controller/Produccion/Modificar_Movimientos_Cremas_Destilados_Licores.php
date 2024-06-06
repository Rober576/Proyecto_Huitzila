<?php
require_once('../../model/Produccion/Modificar_Movimientos_Cremas_Destilados_LicoresM.php');
$objeto = new modificarMez();

$lote2 = $_POST["lote"];
$fecha = $_POST["fecha"];
$numero =$_POST["numero"];
$tipo = $_POST["tipo"];
$procedencia = $_POST["procedencia"];
$movimiento = $_POST["mov"];
$volumen = $_POST["volumen"];
$concentracion = $_POST["alc_vol"];
$alc_vol_merma = $_POST['alc_vol_merma'];
$volumen_merma = $_POST['volumen_merma'];


$volumen3 = isset($_POST['alc_vol55']) ? $_POST['alc_vol55'] : 0;
$volumen2 = isset($_POST['vol_agua']) ? $_POST['vol_agua'] : 0;
$alc_vol_merma = isset($_POST['alc_vol_merma']) ? $_POST['alc_vol_merma'] : 0;
$volumen_merma = isset($_POST['volumen_merma']) ? $_POST['volumen_merma'] : 0;
$u = $objeto->actualizar($lote2,$numero,$fecha, $tipo, $procedencia, $movimiento, $volumen, $volumen2, $concentracion,$volumen3,$alc_vol_merma,$volumen_merma);

if ($u === true) {
    echo json_encode('Registro exitoso');
}elseif ($u === "La fecha ingresada") {
    echo json_encode("La fecha ingresada es menor que la ultima fecha registrada");
} elseif ($u === "Error Volumen") {
    echo json_encode("Error Volumen");
}
?>


