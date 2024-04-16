<?php
include('../../../../config/Crud_bd.php');

class NuevosCampos{
    private $base;

    function conexion(){
        $this->base = new Crud_bd();
        $this->base->conexion_bd();
    }
   
    function Consultar($id) {
        // Consulta para verificar si el id existe en la tabla bitacoramezcal
        $query_bitacora = "SELECT COUNT(*) AS count FROM bitacoramezcal WHERE NombrePlanta = :id";
        $params_bitacora = [":id" => $id];
        $result_bitacora = $this->base->consultar($query_bitacora, $params_bitacora);
        $count_bitacora = $result_bitacora[0]['count'];

        // Consulta para verificar si el id existe en la tabla registromezcal
        $query_registro = "SELECT COUNT(*) AS count FROM registromezcal WHERE NombrePlanta = :id";
        $params_registro = [":id" => $id];
        $result_registro = $this->base->consultar($query_registro, $params_registro);
        $count_registro = $result_registro[0]['count'];

        // Consulta para verificar si el id existe en la tabla tipoplantas
        $query_tipoplantas = "SELECT COUNT(*) AS count FROM tipoplantas WHERE NombrePlanta = :id";
        $params_tipoplantas = [":id" => $id];
        $result_tipoplantas = $this->base->consultar($query_tipoplantas, $params_tipoplantas);
        $count_tipoplantas = $result_tipoplantas[0]['count'];

        // Verificamos si el id existe en alguna de las tablas
        if ($count_bitacora > 0 || $count_registro > 0 || $count_tipoplantas > 0) {
            return "NoSePuedeEliminar";
        } else {
            return "SiSePuede";
        }
    }
}

?>
