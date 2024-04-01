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
$alc_vol55 = $_POST['alc_vol55'];


// Instanciar la clase y llamar la función para insertar
$obj = new NuevosCampos();
$obj->conexion();

// Realizar la inserción
$resultado = $obj->insertar($lote, $Mov, $fecha, $tipoES, $procedencia, $volumen, $alc_vol,$alc_vol55);

// Comprobar el resultado y enviar el mensaje correspondiente
if ($resultado === true) {
    echo json_encode('Registro exitoso');
} elseif ($resultado === false) {
    echo json_encode("Lote existente");
}
?>
