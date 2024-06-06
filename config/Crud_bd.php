<?php
/*
* 
* Este archivo crea las consultas para una base de datos en phpmyadmin
*/
define("HOST", "mysql:host=localhost;");
define("DBNAME", "dbname=proyhuitzila");
define("USUARIO", "practicamvc");
define("PASSWORD", 'Leo1234@');


class Crud_bd{

    private $conexion;

    public function conexion_bd(){

        /**
         * Esta funcion crea la conexion con la base de datos
         */

        try {
            
            $this->conexion = new PDO(HOST. DBNAME,USUARIO,PASSWORD );
            $this->conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $this->conexion->exec("SET NAMES UTF8");
            
            return $this->conexion;
        } catch (Exception $e) {

            die("Error:".$e->getMessage());
            echo "Linea del error " . $e->getLine();
        }

        
    }

    public function mostrar($consultaEscrita, ?array $arrayAsociativo = null){
        /**
         * Esta funcion regresa un array asociativo y un array normal con 
         * los elementos de la tabla
         */
        
        try{
            $this->conexion->beginTransaction();
            if($arrayAsociativo == null){
                $sentencia = $this->conexion->query($consultaEscrita);
            }else{
                $sentencia = $this->conexion->prepare($consultaEscrita);
                $sentencia->execute($arrayAsociativo);
        
            }
            $this->conexion->commit();
            $filas=$sentencia->fetchAll();
            $sentencia = null;
    
            #var_dump($filas);
            return $filas;

        }catch (\Exception $e) {
            if ($this->conexion->inTransaction()) {
                $this->conexion->rollback();

                die("Error:" . $e->getMessage());
                echo "Linea del error " . $e->getLine();
            }
            throw $e;
        }
    }

    public function consultar($consultaEscrita, ?array $arrayAsociativo = null){
        try {
            $this->conexion->beginTransaction();
            if ($arrayAsociativo == null) {
                $sentencia = $this->conexion->query($consultaEscrita);
            } else {
                $sentencia = $this->conexion->prepare($consultaEscrita);
                $sentencia->execute($arrayAsociativo);
            }
            $this->conexion->commit();
            $filas = $sentencia->fetchAll(PDO::FETCH_ASSOC);
            $sentencia = null;
            return $filas;
        } catch (\Exception $e) {
            if ($this->conexion->inTransaction()) {
                $this->conexion->rollback();
                die("Error: " . $e->getMessage());
                echo "Linea del error: " . $e->getLine();
            }
            throw $e;
        }
    }

    public function insertar_eliminar_actualizar($consultaEscrita, $arrayAsociativo){
        /**
         * Esta funcion perminte insertar, eliminar, los parametros de busqueda y modificacion 
         * se colocan en el array asociativo 
         */
        try{
            $this->conexion->beginTransaction(); 

            if(is_array($consultaEscrita) && is_array($arrayAsociativo)){
                for($i=0; $i<count($consultaEscrita);$i++){
                    $resultados = $this->conexion->prepare($consultaEscrita[$i]);
                    $resultados->execute($arrayAsociativo[$i]);
                }
            }else{
                $resultados=$this->conexion->prepare($consultaEscrita);
                $resultados->execute($arrayAsociativo);

            }
           
            $this->conexion->commit();
            $resultados = null;
            
            return true;
        }catch (\Exception $e) {
            if ($this->conexion->inTransaction()) {
                $this->conexion->rollback();

                die("Error:" . $e->getMessage());
                echo "Linea del error " . $e->getLine();
            }
            throw $e;
            
        }
       

    }


    public function cerrar_conexion()
    {
        $this->conexion = null;
    }

    


}



?>