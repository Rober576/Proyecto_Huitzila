<?php

include_once('../../../../config/Crud_bd.php');

class VerificarRegistro{
    private $base;

    function instancias(){
        $this->base = new Crud_bd();
        $this->base->conexion_bd();
    }

    function verificar($id,$plantacion){
        // Consulta para verificar registros en reporteactividad
        $queryCheck = "SELECT * FROM reporteactividad WHERE NumeracionActividad = :id AND ClavePlantacion = :plantacion";
        $parametrosCheck = [":id" => $id, ":plantacion" => $plantacion];
        
    
        $registros = $this->base->mostrar($queryCheck, $parametrosCheck);

        // Si existen registros en reporteactividad, eliminarlos
        if (!empty($registros)) {
            $queryEliminar = "DELETE FROM reporteactividad WHERE NumeracionActividad = :id AND ClavePlantacion = :plantacion";
            $this->base->insertar_eliminar_actualizar($queryEliminar, $parametrosCheck);
        }
        // Cerramos la conexión a la base de datos
        $this->base->cerrar_conexion();

        // Retornamos el resultado de la consulta
        return ;
    }
}

// Utiliza $_GET para obtener el valor del ID desde la URL
$id = isset($_GET['id']) ? $_GET['id'] : null;
$plantacion = isset($_GET['valorSeleccionado']) ? $_GET['valorSeleccionado'] : null;

if ($id !== null) {
    // Creamos una instancia de la clase VerificarRegistro y la utilizamos para verificar el registro
    $verificador = new VerificarRegistro();
    $verificador->instancias();
    $registroExiste = $verificador->verificar($id,$plantacion);

    // Devolvemos una respuesta en formato JSON
    header('Content-Type: application/json');
    echo json_encode(["registroExiste" => $registroExiste]);
} else {
    // Si no se proporcionó un ID, devolvemos un error
    header('HTTP/1.1 400 Bad Request');
    echo json_encode(["error" => "No se proporcionó un ID"]);
}
?>
