<?php

include_once('../../../../model/Agricola/Plantaciones/Modificar/Eliminar_Plantacion.php');

$base = new EliminarCampos();
$base->instancias();

/*en caso de que hubiera relaciones con otras tablas, se debe buscar primero si hay dependencias de este registro
en particular y en base a los requierimientos hacer las acciones necesarias, como en este caso no hay,
el registro se elimina directamente*/

// Utiliza $_GET para obtener el valor del ID desde la URL
$id = isset($_GET['id']) ? $_GET['id'] : null;
$base->eliminar($id);
?>