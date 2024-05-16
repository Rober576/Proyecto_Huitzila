<?php
include_once('../../../../model/Agricola/Actividades/Modificar/Obtener_Info_Actividades.php');

// Instancias de ambas clases
$base1 = new ObtenerCampos();
$base2 = new ObtenerCampos2();
$base1->instancias();
$base2->instancias();

// Utiliza $_GET para obtener los valores del ID y plantacion desde la URL
$id = isset($_GET['id']) ? $_GET['id'] : null;
$plantacion = isset($_GET['plantacion']) ? $_GET['plantacion'] : null;

// Asegúrate de que ambos parámetros estén presentes antes de llamar a las funciones obtener
if ($id !== null && $plantacion !== null) {
    $info1 = $base1->obtener($id, $plantacion);
    $info2 = $base2->obtener($id, $plantacion);
    
    // Fusionar los resultados de ambas consultas
    $info = [
        'actividadplantacion' => $info1,
        'reporteactividad' => $info2
    ];
    
    // Devolver la información como JSON
    header('Content-Type: application/json');
    echo json_encode($info);
} else {
    // Manejo de error en caso de parámetros faltantes
    header('Content-Type: application/json');
    echo json_encode(['error' => 'Faltan parámetros requeridos.']);
}
?>
