<?php
include('../../config/Crud_bd.php');

class Actualizar_MinMax{
    private $base;

    function conexion(){
        $this->base = new Crud_bd();
        $this->base->conexion_bd();
    }

    function actualizar($PorcentajeAlcoholMin, $PorcentajeAlcoholMax, $MetanolMin, $MetanolMax, $AlcoholesSuperioresMin){

        $q1 = "UPDATE valoresminmaxdcl SET PorcentajeAlcoholMin = :PorcentajeAlcoholMin, PorcentajeAlcoholMax = :PorcentajeAlcoholMax, MetanolMin = :MetanolMin, MetanolMax = :MetanolMax, AlcoholesSuperioresMin = :AlcoholesSuperioresMin";
        
        // Supongo que tienes algún identificador único en la tabla para saber qué fila actualizar, así que lo agrego a la consulta.

        $a1 = [
            ":PorcentajeAlcoholMin" => $PorcentajeAlcoholMin,
            ":PorcentajeAlcoholMax" => $PorcentajeAlcoholMax,
            ":MetanolMin" => $MetanolMin,
            ":MetanolMax" => $MetanolMax,
            ":AlcoholesSuperioresMin" => $AlcoholesSuperioresMin,
            // Supongamos que `id` es el identificador único
        ];

        $querry = $q1;
        $parametros = $a1;

        $this->base->insertar_eliminar_actualizar($querry, $parametros);
        $this->base->cerrar_conexion();
        echo json_encode('exito');
    }
}
?>
