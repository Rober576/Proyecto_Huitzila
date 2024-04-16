<?php
// Incluir el archivo de clase u otras dependencias necesarias
include_once('../../model/Produccion/Eliminar_Mezcal.php');

// Crear una instancia del objeto que maneja la eliminación de los campos
$base = new EliminarCampos();
$base->instancias();

// Utilizar $_GET para obtener el valor del Lote desde la URL
$Lote = isset($_GET['id']) ? $_GET['id'] : null;

// Intentar eliminar el registro utilizando el método apropiado
$eliminado = $base->eliminar($Lote);

// Verificar si se eliminó correctamente
if ($eliminado) {
    // Si se eliminó correctamente, devolver un mensaje de éxito
    echo json_encode(array('mensaje' => 'Eliminado con éxito'));
} else {
    // Si hubo un problema al eliminar, devolver un mensaje de error
    echo json_encode(array('error' => 'No se pudo eliminar el registro'));
}
?>
