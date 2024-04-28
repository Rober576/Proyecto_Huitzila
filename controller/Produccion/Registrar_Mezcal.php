<?php
include_once('../../model/Produccion/Registrar_Mezcal.php');

// Obtener datos del formulario
$lote = $_POST['lote'];
$tanque = $_POST['tanque'];
$categoria = $_POST['categoria'];
$especie = $_POST['especie'];
$clase = $_POST['clase'];
$edad = isset($_POST['edad']) ? $_POST['edad'] : -1; // Valor predeterminado si el campo de edad está vacío

$obj = new NuevosCampos();
$obj->conexion();

// Realizar la búsqueda del lote
$loteExistente = $obj->buscar_lote($lote);

// Si el lote no existe, proceder con la inserción
if (!$loteExistente) {
    // Realizar la inserción
    $resultado = $obj->insertar($lote, $tanque, $categoria, $clase, $edad, $especie);

    // Comprobar el resultado y enviar el mensaje correspondiente
    if ($resultado === true) {
        echo json_encode('exitoso');
    } else {
        echo json_encode("error en la inserción");
    }
} else {
    echo json_encode("existente");
}


?>
