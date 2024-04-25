<?php
include_once('../../model/Produccion/Registrar_Mezcal.php');

// Obtener datos del formulario
$lote = $_POST['lote'];
$tanque = $_POST['tanque'];
$categoria = $_POST['categoria'];
$especie = $_POST['especie'];
$clase = $_POST['clase'];
$edad = $_POST['edad'];

//instanciar la clase y llamar la funcion para insertar
$obj = new NuevosCampos();
$obj->conexion();

// Realizar la inserción
$resultado = $obj->insertar($lote, $tanque, $categoria, $clase, $edad, $especie);

// Comprobar el resultado y enviar el mensaje correspondiente
if ($resultado === true) {
    echo json_encode('Registro exitoso');
} elseif ($resultado === false) {
    echo json_encode("Lote existente");
}
?>
