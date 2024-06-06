<?php

include_once('../../../../config/Crud_bd.php');

class VerificarRegistro{
    private $base;

    function instancias(){
        $this->base = new Crud_bd();
        $this->base->conexion_bd();
    }

    function verificar($id){
        // Consulta para verificar si existe el registro con el ID proporcionado
        $queryVerificar = "SELECT COUNT(*) as count FROM actividadplantacion WHERE ClavePlantacion = :id";
        $result = $this->base->mostrar($queryVerificar, [":id" => $id]);

        // Cerramos la conexión a la base de datos
        $this->base->cerrar_conexion();

        // Retornamos el resultado de la consulta
        return $result[0]['count'] > 0;
    }
}

// Utiliza $_GET para obtener el valor del ID desde la URL
$id = isset($_GET['id']) ? $_GET['id'] : null;

if ($id !== null) {
    // Creamos una instancia de la clase VerificarRegistro y la utilizamos para verificar el registro
    $verificador = new VerificarRegistro();
    $verificador->instancias();
    $registroExiste = $verificador->verificar($id);

    // Devolvemos una respuesta en formato JSON
    header('Content-Type: application/json');
    echo json_encode(["registroExiste" => $registroExiste]);
} else {
    // Si no se proporcionó un ID, devolvemos un error
    header('HTTP/1.1 400 Bad Request');
    echo json_encode(["error" => "No se proporcionó un ID"]);
}
?>
