<?php
include_once('../../model/Insumos/Registro_Producto.php');

class RegProducto{
    private $id, $desc, $smin, $smax, $cprom, $cu, $cantidad, $base;

    function instancias(){
        $this->id = $_POST['Identificador'];
        $this->desc = $_POST['Descripcion'];
        $this->smin = $_POST['Stockmi'];
        $this->smax = $_POST['Stockma'];
        $this->cprom = $_POST['CProm'];
        $this->cu = $_POST['UCosto'];
        $this->cantidad = $_POST['cantidad'];

        $this ->base = new RegistroProducto();
        $this->base->instancias();
    }

    function validar(){
        $resultado = $this->base->buscarID($this->id);

        if($resultado == true){
            echo json_encode("El ID del producto ya existe");
        }

        else{
            $this->base->registrar($this->id, $this->desc, $this->smin, $this->smax, $this->cprom, $this->cu, $this->cantidad);
            echo json_encode('todo chido');
        }
    }
}

$obj = new RegProducto();
$obj->instancias();
$obj->validar();
?>