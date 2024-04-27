<?php
include_once('../../model/Produccion/Registro_Cremas_Destilados_Licores.php');

// Obtener datos del formulario
$lote = $_POST['lote'];
$tanque = $_POST['tanque'];
$tipo = $_POST['tipo'];
$clase = $_POST['clase'];
$edad = $_POST['edad'];

//instanciar la clase y llamar la funcion para insertar
$obj = new NuevosCampos();
$obj->conexion();

// Realizar la inserción
$resultado = $obj->insertar($lote, $tipo, $clase, $edad, $tanque);

// Comprobar el resultado y enviar el mensaje correspondiente
if ($resultado === true) {
    echo json_encode('Registro exitoso');
} elseif ($resultado === false) {
    echo json_encode("Lote existente");
}
?>
