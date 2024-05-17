<?php
include('../../../../config/Crud_bd.php');
 
class NuevosCampos {
    private $base;

    function conexion() {
        $this->base = new Crud_bd();
        $this->base->conexion_bd();
    }

    function editar($id, $plantacion, $Fecha, $IdActividad, $NombrePlaga, $NombreHerbicida, $Costo, $Descripcion, $Semana) {
        // Convertir 'None' a NULL
        $NombrePlaga = ($NombrePlaga === 'None') ? null : $NombrePlaga;
        $NombreHerbicida = ($NombreHerbicida === 'None') ? null : $NombreHerbicida;

        $query = "UPDATE actividadplantacion
                  SET Fecha = :Fecha, 
                      IdActividad = :IdActividad,
                      NombrePlaga = :NombrePlaga,
                      NombreHerbicida = :NombreHerbicida,
                      Costo = :Costo,
                      Descripcion = :Descripcion,
                      Semana = :Semana
                  WHERE ClavePlantacion = :plantacion
                  AND NumeracionActividad = :id";
                      
        $params = [
            ":Fecha" => $Fecha,
            ":IdActividad" => $IdActividad,
            ":NombrePlaga" => $NombrePlaga,
            ":NombreHerbicida" => $NombreHerbicida,
            ":Costo" => $Costo,
            ":Descripcion" => $Descripcion,
            ":Semana" => $Semana,
            ":plantacion" => $plantacion,
            ":id" => $id
        ];
        
        $this->base->insertar_eliminar_actualizar($query, $params);
        $this->base->cerrar_conexion();
    }
}
?>
