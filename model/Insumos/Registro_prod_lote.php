
<?php
    include('../../config/Crud_bd.php');

    class Registro_Prod_Lotes{
        private $base;

        //crea un objeto del CRUD para hacer las consultas
        function conexion(){
            $this->base = new Crud_bd();
            $this->base->conexion_bd();
        }


        // Función para verificar insumos
        function verifica_insumos($c2, $c3) {
            // Consulta para obtener los insumos necesarios para el producto
            $consultaInsumos = "SELECT IDInsumos, Cantidad FROM insumosproductos WHERE IDProducto = :c2";
            $parametrosInsumos = [":c2" => $c2];

            // Ejecutar la consulta
            $insumos = $this->base->mostrar($consultaInsumos, $parametrosInsumos);
            $bandera = true;
            foreach ($insumos as $insumo) {
                $IDInsumo = $insumo['IDInsumos'];
                $cantidadNecesaria = $insumo['Cantidad'] * $c3;

                // Consulta para obtener la existencia del insumo
                $consultaExistencia = "SELECT Existencia, StockMinimo FROM insumos WHERE IDInsumo = :IDInsumoo";
                $parametrosExistencia = [":IDInsumoo" => $IDInsumo];

                // Ejecutar la consulta
                $resultado = $this->base->mostrar($consultaExistencia, $parametrosExistencia);
                
                if (count($resultado) == 0) {
                    //$this->base->cerrar_conexion();
                    $bandera = false; // Si no se encuentra el insumo, retornar false
                }

                $existencia = $resultado[0]['Existencia'];
                $stockMinimo = $resultado[0]['StockMinimo'];

                // Verificar si hay suficiente existencia y no baja del stock mínimo
                if ($existencia < $cantidadNecesaria || ($existencia - $cantidadNecesaria) < $stockMinimo) {
                    //$this->base->cerrar_conexion();
                    return false; // No hay suficiente insumo o baja del stock mínimo
                }
            }
            //$this->base->cerrar_conexion();
            return true; // Todos los insumos tienen suficiente existencia
        }

        // Función para insertar los campos en la BD
        function insertar($c1, $c2, $c3){
            try {
                // Iniciar una transacción
                $this->base->beginTransaction();
                
                // Consulta para insertar en la tabla produccionlotes
                $q1 = "INSERT INTO produccionlotes (Lote, Producto, Cantidad) VALUES(:c1, :c2, :c3)";
                $a1 = [":c1"=>$c1, ":c2"=>$c2, ":c3"=>$c3];
                $this->base->insertar_eliminar_actualizar($q1, $a1);
        
                // Movimientos para los productos -------------------------------------------------------------------------------------------        
                
                // Incrementar la cantidad en la tabla productoterminado
                $q2 = "UPDATE productoterminado SET Cantidad = Cantidad + :c3 WHERE IDProducto = :c2";
                $a2 = [":c3" => $c3, ":c2" => $c2];
                $this->base->insertar_eliminar_actualizar($q2, $a2);
        
                // Obtener el CostoUltimo del producto
                $q3 = "SELECT CostoUltimo FROM productoterminado WHERE IDProducto = :c2";
                $a3 = [":c2" => $c2];
                $resultado = $this->base->mostrar($q3, $a3);
                $costoUnitario = $resultado[0]['CostoUltimo'];
        
                // Calcular el costo total
                $costoTotal = $costoUnitario * $c3;
        
                // Obtener el último NumeroMovimiento para el producto específico
                $q4 = "SELECT MAX(NumeroMovimiento) AS UltimoMovimiento FROM movimientoproductos WHERE IDProducto = :c2";
                $a4 = [":c2" => $c2];
                $resultado = $this->base->mostrar($q4, $a4);
                $ultimoMovimiento = $resultado[0]['UltimoMovimiento'];
                $nuevoNumeroMovimiento = $ultimoMovimiento ? $ultimoMovimiento + 1 : 1;

        
                // Obtener la cantidad restante del producto en productoterminado
                $q5 = "SELECT Cantidad FROM productoterminado WHERE IDProducto = :c2";
                $resultado = $this->base->mostrar($q5, $a3);
                $cantidadRestante = $resultado[0]['Cantidad'];
        
                // Insertar en la tabla movimientoproductos
                $q6 = "INSERT INTO movimientoproductos (IDProducto, Fecha, EntradaSalida, IdMovimiento, Destino, Cantidad, CostoUnitario, CostoTotal, NumeroMovimiento, CantidadRestante) 
                       VALUES (:c2, NOW(), 'Entrada', 1, 'producción', :c3, :costoUnitario, :costoTotal, :nuevoNumeroMovimiento, :cantidadRestante)";
                $a6 = [
                    ":c2" => $c2,
                    ":c3" => $c3,
                    ":costoUnitario" => $costoUnitario,
                    ":costoTotal" => $costoTotal,
                    ":nuevoNumeroMovimiento" => $nuevoNumeroMovimiento,
                    ":cantidadRestante" => $cantidadRestante
                ];
                $this->base->insertar_eliminar_actualizar($q6, $a6);
        

                // Movimientos para los insumos -------------------------------------------------------------------------------------------
                /*
                // Consulta para obtener los insumos necesarios para el producto
                $consultaInsumos = "SELECT IDInsumos, Cantidad FROM insumosproductos WHERE IDProducto = :c2";
                $parametrosInsumos = [":c2" => $c2];

                // Ejecutar la consulta
                $insumos = $this->base->mostrar($consultaInsumos, $parametrosInsumos);
                $bandera = true;
                foreach ($insumos as $insumo) {
                    $IDInsumo = $insumo['IDInsumos'];
                    $cantidadNecesaria = $insumo['Cantidad'] * $c3;

                    // Consulta para obtener la existencia del insumo
                    $consultaExistencia = "SELECT Existencia, StockMinimo FROM insumos WHERE IDInsumo = :IDInsumoo";
                    $parametrosExistencia = [":IDInsumoo" => $IDInsumo];

                    // Ejecutar la consulta
                    $resultado = $this->base->mostrar($consultaExistencia, $parametrosExistencia);
                    



                
                }*/
                

                // Confirmar la transacción
                $this->base->commit();
            } catch (Exception $e) {
                // Revertir la transacción en caso de error
                $this->base->rollBack();
                throw $e;
            } finally {
                // Cerrar la conexión
                $this->base->cerrar_conexion();
            }
        }
        
        /*
        function insertar($c1, $c2, $c3){
            //consultas para la tabla de insumos
            $q1 = "INSERT INTO produccionlotes (Lote, Producto, Cantidad)
            VALUES(:c1, :c2, :c3)";
            $a1= [":c1"=>$c1, ":c2"=>$c2,    ":c3"=>$c3];
            // Organiza en arreglos para mandarlos al CRUD

            $querry = $q1;
            $parametros = $a1;           
            
            //Movimientos que se hacen para registrar   



            $this->base->insertar_eliminar_actualizar($querry, $parametros);
            $this->base->cerrar_conexion();
        }*/
        
    }

?>