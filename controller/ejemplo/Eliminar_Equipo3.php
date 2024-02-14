<?php
include_once('../../model/ejemplo/eliminar/Eliminar_Equipo3.php');

$base = new EliminarCampos();
$base->instancias();

/*en caso de que hubiera relaciones con otras tablas, se debe buscar primero si hay dependencias de este registro
en particular y en base a los requierimientos hacer las acciones necesarias, como en este caso no hay,
el registro se elimina directamente*/

$base->eliminar($_GET['id']);
echo json_encode('Eliminado con éxito');
?>