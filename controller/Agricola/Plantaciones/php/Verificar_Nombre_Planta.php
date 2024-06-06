<?php
include_once('../../../../model/Agricola/Plantaciones/Registrar/Consultar_Nombre_Planta.php');

$base = new MostrarCampos();
$base->instancias();

$nombre_existente = False;

$nombre = $_POST["nomPlanta"];
$resultado = $base->getEjemplo();

/* Se realiza la consulta del nombre(clave de planta) a la base de datos y se analizan los resultados 
para saber si el nombre ya fue usado en el registro de otro predio o no */
foreach ($resultado as $fila){
    if ($nombre == $fila['NombrePlanta']){
        $nombre_existente = True;
    }
}

if ($nombre_existente == True){
    echo json_encode('nombreUsado');
}
else{
    echo json_encode('nombreNoUsado');
}

?>