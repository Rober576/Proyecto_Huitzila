<?php
include_once('../../model/ejemplo/modificar/Obtener_InfoE4.php');

$base = new ObtenerInformacion();
$base->instancias();

// Utiliza $_GET para obtener el valor del ID desde la URL
$id = isset($_GET['id']) ? $_GET['id'] : null;
$info = $base->obtenerInformacion($id);

// Devuelve la información obtenida como JSON
echo json_encode($info);
?>
