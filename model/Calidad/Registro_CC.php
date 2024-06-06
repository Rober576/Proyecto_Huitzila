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

    function insertar($Lote, $Embasado, $Sellado, $Etiqueta, $SinAbolladuras, $Color)
    {
        $lote_existente = $this->verificar_lote_existente($Lote);


        if ($lote_existente) {
            echo json_encode('loterep');
        } else {

            $cumplimiento = 2;

            if ($Embasado == 1 && $Sellado == 1 && $Etiqueta == 1 && $SinAbolladuras == 1 && $Color == 1) {
                $cumplimiento = 1;
            }

            $q1 = "INSERT INTO controlcalidad (Lote,Embasado,Sellado,Etiqueta,SinAbolladuras,Color,cumplimiento)
            VALUES(:Lote,:Embasado,:Sellado,:Etiqueta,:SinAbolladuras,:Color, :cumplimiento)";
            $a1 = [
                ":Lote" => $Lote,
                ":Embasado" => $Embasado,
                ":Sellado" => $Sellado,
                ":Etiqueta" => $Etiqueta,
                ":SinAbolladuras" => $SinAbolladuras,
                ":Color" => $Color,
                ":cumplimiento" => $cumplimiento,
            ];
            $querry = $q1;
            $parametros = $a1;



            $this->base->insertar_eliminar_actualizar($querry, $parametros);
            $this->base->cerrar_conexion();
            echo json_encode('exito');
        }
    }

    function verificar_lote_existente($lote)
    {
        $q2 = "SELECT COUNT(*) as count FROM controlcalidad WHERE Lote = :lote";
        $a2 = [":lote" => $lote];
        $resultado = $this->base->mostrar($q2, $a2);

        if ($resultado && $resultado[0]['count'] > 0) {
            return true;
        } else {
            return false;
        }
    }
}
