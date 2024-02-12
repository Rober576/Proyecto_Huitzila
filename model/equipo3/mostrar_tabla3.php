<?php
//mandamos a llamar al archivo del CRUD
include_once('../../config/Crud_bd.php');


//esta es la clase que van a llamar desde controller para hacer las consultas a la base
class Mostrar{
    //se declara aqui la variable que va a ser la instancia del CRUD
    private $base;

    function inicializar(){
        $this->base = new Crud_bd();
        $this->base->conexion_bd();
    }

    //esta funcion devuelve un array asociativo con todo el contenido de la tabla
    function mostrar_todo(){
        $querry = "SELECT * FROM tabla3";

        $resultados = $this->base->mostrar($querry);
        return $resultados;
    }

    //esta funcion recibe una cadena como parametro y devuelve las tuplas de la tabla que contengan esa cadena
    function busqueda_inteligente($cadena){
        //la cadena que se recibe como parametro se va a buscar en todos los campos de la tabla
        $querry = "SELECT * FROM tabla3 WHERE campo1 LIKE :q OR campo2 LIKE :q OR campo3 LIKE :q OR 
        campo4 LIKE :q OR campo5 LIKE :q";

        //se crea un array asociativo para usar el parametro de busqueda y evitar inyecciones SQL
        $parametros = array(':q' => "%$cadena%");

        $resultados = $this->base->mostrar($querry, $parametros);
        return $resultados;

    }
}
?>