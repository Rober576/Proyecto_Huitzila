<?php
require_once('../../model/Produccion/Mod_Movimientos_Mezcal.php');
$objeto = new modificarMez();
$lote2 = $_POST["lote"];
$numero =$_POST["numero"];
$fecha = $_POST["fecha"];
$tipo = $_POST["tipo"];
$procedencia = $_POST["procedencia"];
$movimiento = $_POST["mov"];
$volumen = $_POST["volumen"];
$volumen2 = $_POST["vol_agua"];
$concentracion = $_POST["alc_vol"];
$volumen3=$_POST["alc_vol55"];
$alc_vol_merma = $_POST['alc_vol_merma'];
$volumen_merma = $_POST['volumen_merma'];
$volumen3 = isset($_POST['alc_vol55']) ? $_POST['alc_vol55'] : 0;
$volumen2 = isset($_POST['vol_agua']) ? $_POST['vol_agua'] : 0;
$alc_vol_merma = isset($_POST['alc_vol_merma']) ? $_POST['alc_vol_merma'] : 0;
$volumen_merma = isset($_POST['volumen_merma']) ? $_POST['volumen_merma'] : 0;
$u = $objeto->actualizar($lote2, $numero,$fecha, $tipo, $procedencia, $movimiento, $volumen, $volumen2, $concentracion,$volumen3,$alc_vol_merma,$volumen_merma);

if ($u == true) {
    echo json_encode('exito');

} else {
    echo json_encode('Error al actualizar el movimiento.');
}
?>

