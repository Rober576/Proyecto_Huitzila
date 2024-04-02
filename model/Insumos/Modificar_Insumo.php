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
        $id_existente = $this->verificar_id_existente($id);

        if ($id_existente) {
            echo json_encode('id_existente');
        } else {
            $query = "UPDATE insumos SET NombreInsumo = :nombreInsumo, Unidades = :unidades, Existencia = :existencia, FechaRegistro = :fechaRegistro, StockMinimo = :stockMinimo, StockMaximo = :stockMaximo, Costo = :costo, Descripcion = :descripcion WHERE IDInsumo = :id";
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

    function verificar_id_existente($id)
    {
        $query = "SELECT COUNT(*) as count FROM insumos WHERE IDInsumo = :id";
        $result = $this->base->mostrar($query, [":id" => $id]);

        if ($result && $result[0]['count'] > 0) {
            return true;
        } else {
            return false;
        }
    }
}
?>
