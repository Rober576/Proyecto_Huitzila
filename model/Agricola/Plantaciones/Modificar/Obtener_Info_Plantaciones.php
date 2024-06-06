<?php
include_once('../../../../config/Crud_bd.php');

class ObtenerCampos {
    private $base;

    function instancias() {
        $this->base = new Crud_bd();
        $this->base->conexion_bd();
    }

    function obtener($id) {
        $queryPlantacion = "SELECT * FROM plantaciones WHERE ClavePlantacion = :id";
        $queryPredio = "SELECT p.Nombre
                        FROM plantacionpredio pp
                        INNER JOIN predios p ON pp.CodigoArea = p.CodigoArea
                        WHERE pp.ClavePlantacion = :id";
        $queryPlanta = "SELECT t.NombrePlanta
                        FROM tipoplantas t
                        WHERE t.ClavePlantacion = :id";

        $resultadoPlantacion = $this->base->mostrar($queryPlantacion, [":id" => $id]);
        $resultadoPredio = $this->base->mostrar($queryPredio, [":id" => $id]);
        $resultadoPlanta = $this->base->mostrar($queryPlanta, [":id" => $id]);

        $datos = [
            'plantacion' => ($resultadoPlantacion && count($resultadoPlantacion) > 0) ? $resultadoPlantacion[0] : null,
            'nombrePredio' => ($resultadoPredio && count($resultadoPredio) > 0) ? $resultadoPredio[0]['Nombre'] : null,
            'nombrePlanta' => ($resultadoPlanta && count($resultadoPlanta) > 0) ? $resultadoPlanta[0]['NombrePlanta'] : null
        ];

        $this->base->cerrar_conexion();

        return $datos;
    }
}
?>
