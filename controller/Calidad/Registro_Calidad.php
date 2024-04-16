<?php
include_once('../../model/Calidad/Registro_Calidad.php');
$calidad = new Registro_Calidad();
$Lote = $_POST["lote"];
$Azucares = $_POST["azucares"];
$Madurez = $_POST["madurez"];
$Materia = $_POST["mat_prima"];

$u=$calidad->insertar($Lote, $Azucares, $Madurez, $Materia);
    if($u==true){
        echo json_encode('exito');
        
    }else{
        echo json_encode('no exito');
        
    }

?>