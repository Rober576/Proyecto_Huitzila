<?php
include('../../config/Crud_bd.php');

class Registro_CC
{
    private $base;

    function conexion()
    {
        $this->base = new Crud_bd();
        $this->base->conexion_bd();
    }

    function insertar($Lote,$Embasado,$Sellado,$Etiqueta,$SinAbolladuras,$Color)
{
    
    $q1 = "INSERT INTO controlcalidad (Lote,Embasado,Sellado,Etiqueta,SinAbolladuras,Color)
            VALUES(:Lote,:Embasado,:Sellado,:Etiqueta,:SinAbolladuras,:Color)";
    $a1 = [
        ":Lote" => $Lote,
        ":Embasado" => $Embasado,
        ":Sellado" => $Sellado,
        ":Etiqueta" => $Etiqueta,
        ":SinAbolladuras" => $SinAbolladuras,
        ":Color" => $Color,
    ];
    $querry = $q1;
    $parametros = $a1;

    

    $this->base->insertar_eliminar_actualizar($querry, $parametros);
    $this->base->cerrar_conexion();
    echo json_encode('exito');

    
}

}