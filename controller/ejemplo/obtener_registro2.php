<?php
include('../../config/Crud_bd.php');

// Verificar si se recibió el ID
if(isset($_GET['id'])) {
    $id = $_GET['id'];

    // Crear una instancia del objeto CRUD
    $crud = new Crud_bd();
    $crud->conexion_bd();

    try {
        // Consultar la base de datos para obtener los datos del registro con el ID especificado
        $query = "SELECT campo1, campo2, campo3, campo4, campo5 FROM tabla2 WHERE id = :id";
        $params = array(":id" => $id);
        $registro = $crud->obtener_registro($query, $params);

        // Devolver los datos del registro como JSON
        header('Content-Type: application/json'); // Establece el encabezado JSON
        echo json_encode($registro); // Genera la salida JSON
    } catch (Exception $e) {
        // Manejar cualquier excepción que ocurra durante la consulta
        http_response_code(500); // Establece el código de respuesta HTTP 500 (Error del servidor)
        echo json_encode(array('error' => $e->getMessage())); // Devuelve un mensaje de error como JSON
    }
}
?>
