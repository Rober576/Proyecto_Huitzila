<?php
include_once('../../../../config/Crud_bd.php');

class ControladorDatos {
    private $base;

    function __construct() {
        $this->base = new Crud_bd();
        $this->base->conexion_bd();
    }

    function obtenerPlantacion($Clave) {
        $query = "SELECT ClavePlantacion FROM plantacionpredio WHERE CodigoArea = ?";
        $result = $this->base->mostrar($query, array($Clave));
        
        $plantaciones = array();
        foreach ($result as $row) {
            $plantacion = array(
                'ClavePlantacion' => $row['ClavePlantacion']
            );
            $plantaciones[] = $plantacion;
        }
        
        return json_encode($plantaciones);
    }

    function obtenerPlantacionCosechadas($Clave) {
        $query = "SELECT pp.ClavePlantacion 
                  FROM plantacionpredio pp
                  JOIN plantaciones p ON pp.ClavePlantacion = p.ClavePlantacion
                  WHERE pp.CodigoArea = ? AND p.Cocechada = 1";
        $result = $this->base->mostrar($query, array($Clave));
        
        $plantaciones = array();
        foreach ($result as $row) {
            $plantacion = array(
                'ClavePlantacion' => $row['ClavePlantacion']
            );
            $plantaciones[] = $plantacion;
        }
        
        return json_encode($plantaciones);

    }

    function obtenerPlantacionNoCosechadas($Clave) {
        $query = "SELECT pp.ClavePlantacion 
                  FROM plantacionpredio pp
                  JOIN plantaciones p ON pp.ClavePlantacion = p.ClavePlantacion
                  WHERE pp.CodigoArea = ? AND p.Cocechada = 0";
        $result = $this->base->mostrar($query, array($Clave));
        
        $plantaciones = array();
        foreach ($result as $row) {
            $plantacion = array(
                'ClavePlantacion' => $row['ClavePlantacion']
            );
            $plantaciones[] = $plantacion;
        }
        
        return json_encode($plantaciones);

    }
    
    

}
?>