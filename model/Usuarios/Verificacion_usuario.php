<?php
include_once('../../config/Crud_bd.php');

class ObtenerDetallesUsuario {
    private $base;

     function instancias() {
        $this->base = new Crud_bd();
        $this->base->conexion_bd();
    }

    function obtener($id) {
        $query = "SELECT Nombre, IdentificadorArea FROM usuarios WHERE Clave = :Clave";
        $resultado = $this->base->mostrar($query, [":Clave" => $id]);
        $this->base->cerrar_conexion();
        return $resultado;
    }
}

// Obtener los detalles del usuario
$obtenerDetallesUsuario = new ObtenerDetallesUsuario();
$detalles_usuario = $obtenerDetallesUsuario->obtener($_SESSION["usuario_id"]);

if ($detalles_usuario) {
    $nombre_user = $detalles_usuario[0]["Nombre"];
    $area_user = $detalles_usuario[0]["Area"];
    // Hacer algo con los detalles obtenidos
}
?>
