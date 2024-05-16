<?php
include_once('../../model/Produccion/Registrar_Movimientos_Cremas_Destilados_Licores.php');

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

header('Content-Type: application/json');

try {
    // Obtener datos del formulario
    $lote = $_POST['lote'];
    $Mov = $_POST['tipo'];
    $fecha = $_POST['fecha'];
    $tipoES = $_POST['mov'];
    $procedencia = $_POST['procedencia'];
    $volumen = $_POST['volumen'];
    $alc_vol = $_POST['alc_vol'];
    $alc_vol_merma = isset($_POST['alc_vol_merma']) ? $_POST['alc_vol_merma'] : 0;
    $volumen_merma = isset($_POST['volumen_merma']) ? $_POST['volumen_merma'] : 0;
    $alc_vol55 = isset($_POST['alc_vol55']) ? $_POST['alc_vol55'] : 0;
    $agua = isset($_POST['vol_agua']) ? $_POST['vol_agua'] : 0;

    // Instanciar la clase y llamar la función para insertar
    $obj = new NuevosCampos();
    $obj->conexion();

    // Realizar la inserción
    $resultado = $obj->insertar($lote, $Mov, $fecha, $tipoES, $procedencia, $volumen, $alc_vol, $alc_vol55, $agua, $alc_vol_merma, $volumen_merma);

    // Comprobar el resultado y enviar el mensaje correspondiente
    if ($resultado === true) {
        echo json_encode(array('status' => 'success', 'message' => 'Registro exitoso'));
    } elseif ($resultado === "La fecha ingresada es menor que la ultima fecha registrada") {
        echo json_encode(array('status' => 'error', 'message' => 'La fecha ingresada es menor que la última fecha registrada'));
    } elseif ($resultado === false) {
        echo json_encode(array('status' => 'error', 'message' => 'Lote existente'));
    }
} catch (Exception $e) {
    echo json_encode(array('status' => 'error', 'message' => $e->getMessage()));
}
?>
