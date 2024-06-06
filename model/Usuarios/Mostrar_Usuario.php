<?php

include('../../config/Crud_bd.php');
class MostrarCampos{
    private $base;

    function instancias(){
        $this->base = new Crud_bd();
        $this->base->conexion_bd();
    }
    //hace la consulta principal de los datos de las certificaciones
    function getEjemplo(){
        $query = "SELECT * FROM usuarios";
        $resultados = $this->base->mostrar($query);
        $this->base->cerrar_conexion();
        return $resultados;
    }
    function buscador($busqueda){
        $query = "SELECT * FROM usuarios WHERE Clave LIKE :busqueda OR Nombre LIKE :busqueda OR ApellidoPaterno LIKE :busqueda OR ApellidoMaterno LIKE :busqueda OR Correo LIKE :busqueda OR IdentificadorTipo LIKE :busqueda OR IdentificadorArea LIKE :busqueda";
        $resultados = $this->base->mostrar($query, [":busqueda" => "%".$busqueda."%"]);
        $this->base->cerrar_conexion();
        echo $_POST['consulta'];
        return $resultados;
        echo $resultados;
    }

    function buscador1($Tipo) {
        $query = "SELECT Tipo FROM tipousuario WHERE IdentificadorTipo = :Tipo";
        $resultados = $this->base->mostrar($query, [":Tipo" => $Tipo]);
        $this->base->cerrar_conexion();
        // Si la consulta devuelve resultados, devuelve el tipo; de lo contrario, devuelve un mensaje indicando que no se encontraron resultados
        return $resultados;
    } 
    
    function buscador2($Area) {
        $query = "SELECT NombreArea FROM tipoareas WHERE IdentificadorArea = :Area";
        $resultados = $this->base->mostrar($query, [":Area" => $Area]);
        $this->base->cerrar_conexion();
        // Si la consulta devuelve resultados, devuelve el tipo; de lo contrario, devuelve un mensaje indicando que no se encontraron resultados
        return $resultados;
    } 
}

$obj = new MostrarCampos();
$obj->instancias();
?>