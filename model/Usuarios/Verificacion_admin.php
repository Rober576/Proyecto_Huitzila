<?php
include_once('../../config/Crud_bd.php');

class ObtenerDetallesAdmin {
    private $base;

     function instancias() {
        $this->base = new Crud_bd();
        $this->base->conexion_bd();
    }

     function obtener($id) {
        $query = "SELECT Nombre, IdenttificadorArea FROM usuarios WHERE Clave = :Clave";
        $resultado = $this->base->mostrar($query, [":Clave" => $id]);
        $this->base->cerrar_conexion();
        return $resultado;
    }
}

// Obtener los detalles del administrador
$obtenerDetallesAdmin = new ObtenerDetallesAdmin();
$detalles_admin = $obtenerDetallesAdmin->obtener($_SESSION["usuario_id"]);

if ($detalles_admin) {
    $nombre_admin = $detalles_admin[0]["Nombre"];
    $area_admin = $detalles_admin[0]["IdentificadorArea"];
    // Hacer algo con los detalles obtenidos
}
?>
