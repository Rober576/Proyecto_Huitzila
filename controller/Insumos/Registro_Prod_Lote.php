<?php
// Recoger los valores de los campos del formulario
include_once('../../model/Insumos/Registro_prod_lote.php');
$c1 = $_POST["Lote"];
$c2 = $_POST["Id_productos"];
$c3 = $_POST["Cantidad"];
$cantidadMezcal = 0;
/*$c1 = "ZZZZ4";
$c2 = "Huitzila1Lt";
$c3 = 5;*/

//instanciar la clase y llamar la funcion para insertar
$obj = new Registro_Prod_Lotes();
$obj->conexion();

/*
if($obj->verifica_insumos($c2, $c3)){
    echo"Si se puede registrar";

    $obj->insertar($c1, $c2, $c3);
    echo json_encode('exito');
}else{
    echo"NO se puede registrar";
    echo json_encode('fallido');
    
}*/

$searchLote = $obj->busca_lote($c1);
if($searchLote === true){
    
    $valida = $obj->verifica_insumos($c2,$c3);
    $validaMezcal = $obj->verifica_mezcal($c2,$c3);
    if($valida === true){
        if($validaMezcal != 0){
        //echo"Si se puede";
        $obj->insertar($c1, $c2, $c3);
        $obj->movimientoMezcal($c2,$c3);
        echo json_encode('exito');
        }else{
            echo json_encode('fallido2');
        }
    } else{
        echo json_encode('fallido');
    }
} else{
    echo json_encode('existente');
}





?>
