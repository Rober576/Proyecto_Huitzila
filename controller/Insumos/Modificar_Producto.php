<?php
include_once('../../model/Insumos/Modificar_Producto.php');

class Modificar{
    private $id, $desc, $smin, $smax, $cprom, $cu, $cantidad, $base;

    function instancias(){

        $this->id = $_POST['Identificador'];
        $this->desc = $_POST['Descripcion'];
        $this->smin = $_POST['Stockmi'];
        $this->smax = $_POST['Stockma'];
        $this->cprom = $_POST['CProm'];
        $this->cu = $_POST['UCosto'];
        $this->cantidad = $_POST['cantidad'];

        $this ->base = new EditarProducto();
        $this->base->instancias();
    }

    function actualizar(){
    
        $this->base->actualizar($this->id, $this->desc, $this->smin, $this->smax, $this->cprom, $this->cu, $this->cantidad);
        echo json_encode('todo chido');
    }
}

$obj = new Modificar();
$obj->instancias();
$obj->actualizar();
?>