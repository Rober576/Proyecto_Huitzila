<?php
include_once('../../../../model/Agricola/Predios/Registrar/Consultar_Codigo_Predio.php');

$base = new MostrarCampos();
$base->instancias();

$codigo_existente = False;

$codigo = $_POST["codArea"];
$resultado = $base->getEjemplo();

/* Se realiza la consulta del codigo(clave de predio) a la base de datos y se analizan los resultados 
para saber si el codigo ya fue usado en el registro de otro predio o no */
foreach ($resultado as $fila){
    if ($codigo == $fila['CodigoArea']){
        $codigo_existente = True;
    }
}

if ($codigo_existente == True){
    echo json_encode('codigoUsado');
}
else{
    echo json_encode('codigoNoUsado');
}

?>