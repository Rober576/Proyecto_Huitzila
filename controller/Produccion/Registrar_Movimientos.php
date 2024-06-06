<?php
include_once('../../model/Produccion/Registrar_Movimientos.php');

// Obtener datos del formulario
$lote = $_POST['lote'];
$Mov = $_POST['tipo'];
$fecha = $_POST['fecha'];
$tipoES = $_POST['mov'];
$procedencia = $_POST['procedencia'];
$volumen = $_POST['volumen'];
$alc_vol = $_POST['alc_vol'];
$alc_vol_merma = $_POST['alc_vol_merma'];
$volumen_merma = $_POST['volumen_merma'];

// Verificar si alc_vol55 y agua están definidos y no son nulos, y asignarles 0 si son nulos
$alc_vol55 = isset($_POST['alc_vol55']) ? $_POST['alc_vol55'] : 0;
$agua = isset($_POST['vol_agua']) ? $_POST['vol_agua'] : 0;
$alc_vol_merma = isset($_POST['alc_vol_merma']) ? $_POST['alc_vol_merma'] : 0;
$volumen_merma = isset($_POST['volumen_merma']) ? $_POST['volumen_merma'] : 0;

// Instanciar la clase y llamar la función para insertar
$obj = new NuevosCampos();
$obj->conexion();

// Realizar la inserción
$resultado = $obj->insertar($lote, $Mov, $fecha, $tipoES, $procedencia, $volumen, $alc_vol, $alc_vol55, $agua,$alc_vol_merma,$volumen_merma);


if ($resultado === true) {
    echo json_encode('Registro exitoso');
}elseif ($resultado === "La fecha ingresada") {
    echo json_encode("La fecha ingresada es menor que la ultima fecha registrada");
} elseif ($resultado === "Error Volumen") {
    echo json_encode("Error Volumen");
}
?>
