<?php
include_once('../../config/Crud_bd.php');

class Insumo extends Crud_bd{
    public $base;

    public function __construct(){
        parent::conexion_bd();
    }
    function obtenerLotes(){
        $querry = "SELECT Lote FROM analisisficoquimico WHERE cumplimiento = 1";
        $resultados = $this->mostrar($querry);
        return $resultados;

    }

    public function obtenerNo(){
        $querry = "SELECT MAX(NoInsumo) as No FROM insumosproductos";
        $resultados = $this->mostrar($querry);
        return $resultados;
    }

    public function regsitrarIP($matriz){
        $consultas = array();
        $datos = array();

        for($i = 0; $i < count($matriz); $i++){
            $querry = "INSERT INTO insumosproductos (IDproducto, IDInsumos, Cantidad, CostoActual, 
            CostoTotal, Mezcal, NoInsumo) VALUES (:prod, :ins, :cant, :costo, :costot, :mezcal, :num)";
            $arre = ["prod" => $matriz[$i][0], "ins" => $matriz[$i][1], "cant" => $matriz[$i][2], "costo" => $matriz[$i][3], "costot" => $matriz[$i][4], "mezcal" => $matriz[$i][5], "num" => $matriz[$i][6] ];
            array_push($datos, $arre);
            array_push($consultas, $querry);
        }

        $this->insertar_eliminar_actualizar($consultas, $datos);
    }


    //Insertar el total en el registro de productos.
    public function insertarCosto($matriz){
        $costoTotal = 0;

        for ($i = 0; $i < count($matriz); $i++){
            $costoTotal += $matriz[$i][4];
        }
        
        $consulta = "UPDATE productoterminado SET CostoUltimo = :costoTotal WHERE IDProducto = :ID";
        $IDProducto = $matriz[0][0];
        $datos = array("ID" => $IDProducto, "costoTotal" => $costoTotal);
        $this->insertar_eliminar_actualizar($consulta, $datos);
    }

    public function obtenerCosto($id){
        $querry = "SELECT Costo FROM insumos WHERE IDInsumo = :id";
        $datos = array("id" => $id);
        $resultados = $this->mostrar($querry, $datos);
        return $resultados;
    }

}
?>