<?php
include('../../config/Crud_bd.php');

class NuevosCampos
{
    private $base;

    function conexion()
    {
        $this->base = new Crud_bd();
        $this->base->conexion_bd();
    }

    function insertar($id, $nombreInsumo, $unidades, $existencia, $fechaRegistro, $stockMinimo, $stockMaximo, $costo, $descripcion)
    {
        $query = "UPDATE insumos SET NombreInsumo = :nombreInsumo, Unidades = :unidades, Existencia = :existencia, FechaReg = :fechaRegistro, StockMinimo = :stockMinimo, StockMaximo = :stockMaximo, Costo = :costo, Descripcion = :descripcion WHERE IDInsumo = :id";
        $parametros = [
            ":nombreInsumo" => $nombreInsumo,
            ":unidades" => $unidades,
            ":existencia" => $existencia,
            ":fechaRegistro" => $fechaRegistro,
            ":stockMinimo" => $stockMinimo,
            ":stockMaximo" => $stockMaximo,
            ":costo" => $costo,
            ":descripcion" => $descripcion,
            ":id" => $id
        ];

        $this->base->insertar_eliminar_actualizar($query, $parametros);
        $this->base->cerrar_conexion();
        echo json_encode('exito');
    }
}
?>
