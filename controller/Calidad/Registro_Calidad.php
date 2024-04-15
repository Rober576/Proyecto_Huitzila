<?php
include_once('../../model/Calidad/Registro_Calidad.php');
$calidad = new Registro_Calidad();
$Lote = 'ASS';
$Azucares = 10;
$Madurez = 10;
$Materia = 10;

$u=$calidad->insertar($Lote, $Azucares, $Madurez, $Materia);
    if($u==true){
        echo json_encode('exito');
        
    }else{
        echo json_encode('no exito');
        
    }

?>