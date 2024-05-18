<?php
include_once('../../model/Insumos/Insumos_Por_Producto.php');
// Verificar si se ha recibido una solicitud POST con datos
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Obtener el cuerpo de la solicitud
    $json = file_get_contents('php://input');

    // Decodificar el JSON recibido
    $matriz = json_decode($json, true);

    // Verificar si la decodificación fue exitosa
    if (json_last_error() === JSON_ERROR_NONE) {
        $base = new Insumo();
        $no = $base->obtenerNo()[0]['No'] + 1;
        

        for($i = 0; $i < count($matriz); $i++){
            $no = $no + $i;
            array_push($matriz[$i], $no);
        }

        $base->regsitrarIP($matriz);
        $base->insertarCosto($matriz);

        echo json_encode("todo chido");

        


    } else {
        echo json_encode("fallo al decodificar el JSON");
    }

} else {
    echo json_encode("no se recibio nada");
}
?>
