<?php
include_once('../../model/Insumos/Modificar_Producto.php');

class Modificar{
    private $id, $nombre, $desc, $smin, $smax, $base; // $cprom, $cu, $cantidad, 

    function instancias(){

        $this->id = $_POST['Identificador'];
        $this->nombre = $_POST['Nombre'];
        $this->desc = $_POST['Descripcion'];
        $this->smin = $_POST['Stockmi'];
        $this->smax = $_POST['Stockma'];
        // $this->cprom = $_POST['CProm'];
        // $this->cu = $_POST['UCosto'];
        // $this->cantidad = $_POST['cantidad'];

        $this ->base = new EditarProducto();
        $this->base->instancias();
    }

    function actualizar(){
    
        $this->base->actualizar($this->id, $this->nombre, $this->desc, $this->smin, $this->smax); //$this->cprom, $this->cu, $this->cantidad);
        echo json_encode('todo chido');
    }
}

$obj = new Modificar();
$obj->instancias();
$obj->actualizar();
?>