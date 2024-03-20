<?php
include('../../config/Crud_bd.php');

class NuevosCampos
{
    private $base;

    //crea un objeto del CRUD para hacer las consultas
    function conexion()
    {
        $this->base = new Crud_bd();
        $this->base->conexion_bd();
    }


    //manda las consultas para insertar en las tablas de certificaciones internas e historicos
    function insertar($id, $c1, $c2, $c3, $c4, $c5, $c6)
    {
        $correo_existente = $this->verificar_correo_existente($id,$c4);

        if ($correo_existente) {
            echo json_encode('corre');
        } else {
            //consultas para la tabla de certificaciones internas
            $q1 = "UPDATE usuarios SET Nombre = :c1, ApellidoPaterno = :c2, ApellidoMaterno = :c3, Correo = :c4, IdentificadorTipo = :c5, IdentificadorArea = :c6 WHERE Clave = '$id'";
            $a1 = [":c1" => $c1, ":c2" => $c2, ":c3" => $c3, ":c4" => $c4, ":c5" => $c5, ":c6" => $c6];
            $querry = $q1;
            $parametros = $a1;

            $this->base->insertar_eliminar_actualizar($querry, $parametros);
            $this->base->cerrar_conexion();
            echo json_encode('exito');
        }
    }

    function verificar_correo_existente($id, $Correo)
    {//echo '<script>alert("El correo ya existe");</script>';
        $q2 = "SELECT COUNT(*) as count FROM usuarios WHERE Correo = :Correo AND Clave != :id";
        $a2 = [":Correo" => $Correo, ":id" => $id];
        $resultado = $this->base->mostrar($q2, $a2);

        if ($resultado && $resultado[0]['count'] > 0) {
            return true;
        } else {
            return false;
        }
    }
}
