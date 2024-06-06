<?php
include_once("../../model/Insumos/Obtener_Entradas_Salidas_Productos.php");

if(isset($_GET['id'])) {
    $id = $_GET['id'];

    $conn = new ObtenerCampos();
    $conn->instancias();
    $result = $conn->obtener($id);

    echo json_encode($result);
} else {
    echo json_encode(array()); 
}

?>
