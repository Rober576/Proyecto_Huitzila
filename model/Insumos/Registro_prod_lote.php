
<?php
    include('../../config/Crud_bd.php');

    class Registro_Prod_Lotes{
        private $base;

        //crea un objeto del CRUD para hacer las consultas
        function conexion(){
            $this->base = new Crud_bd();
            $this->base->conexion_bd();
        }

        //Función para buscar si el lote ya existe
        function busca_lote($c1) {
            $consultaLote = "SELECT Lote FROM produccionlotes WHERE Lote = :c1";
            $arrayLote = [":c1" => $c1];

            $resultado = $this->base->mostrar($consultaLote, $arrayLote);
            if (count($resultado) == 0) {
                //$this->base->cerrar_conexion();
                return true; // Si no se encuentra el insumo, retornar false
            } else{
                return false;
            }
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

                if(!is_null($IDInsumo)) {
                    // Consulta para obtener la existencia del insumo
                    $consultaExistencia = "SELECT Existencia, StockMinimo FROM insumos WHERE IDInsumo = :IDInsumoo";
                    $parametrosExistencia = [":IDInsumoo" => $IDInsumo];

                    // Ejecutar la consulta
                    $resultado = $this->base->mostrar($consultaExistencia, $parametrosExistencia);
                    
                    if (count($resultado) == 0) {
                        //$this->base->cerrar_conexion();
                        return false; // Si no se encuentra el insumo, retornar false
                    }

                    $existencia = $resultado[0]['Existencia'];
                    $stockMinimo = $resultado[0]['StockMinimo'];

                    // Verificar si hay suficiente existencia y no baja del stock mínimo
                    if ($existencia < $cantidadNecesaria || ($existencia - $cantidadNecesaria) < $stockMinimo) {
                        //$this->base->cerrar_conexion();
                        return false; // No hay suficiente insumo o baja del stock mínimo
                    }
                }
                           
            }
            //$this->base->cerrar_conexion();
            return true; // Todos los insumos tienen suficiente existencia
        }

        // Función para insertar los campos en la BD
        function insertar($c1, $c2, $c3){
            //try {
                // Iniciar una transacción
                //$this->base->beginTransaction();
                
                // Obtener el CostoUltimo del producto
                $querry1 = "SELECT CostoUltimo FROM productoterminado WHERE IDProducto = :c2";
                $array1 = [":c2" => $c2];
                $resultado = $this->base->mostrar($querry1, $array1);
                $costoUnitario = $resultado[0]['CostoUltimo'];

                $c4 = $costoUnitario;
                $c5 = $costoUnitario * $c3;

                // Consulta para insertar en la tabla produccionlotes
                $q1 = "INSERT INTO produccionlotes (Lote, Producto, Cantidad, CostoUnitario, CostoTotal) VALUES(:c1, :c2, :c3, :c4, :c5)";
                $a1 = [":c1"=>$c1, ":c2"=>$c2, ":c3"=>$c3, ":c4"=>$c4, ":c5"=>$c5];
                
                $querry = $q1;
                $parametros = $a1;

                $this->base->insertar_eliminar_actualizar($querry, $parametros);
        
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
                       VALUES (:c2, NOW(), 'Entrada', 1, 'Producción', :c3, :costoUnitario, :costoTotal, :nuevoNumeroMovimiento, :cantidadRestante)";
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
                
                // Consulta para obtener los insumos necesarios para el producto
                $consultaInsumos = "SELECT IDInsumos, Cantidad FROM insumosproductos WHERE IDProducto = :c2  AND IDInsumos != NULL";
                $parametrosInsumos = [":c2" => $c2];

                // Ejecutar la consulta
                $filas_insumos = $this->base->mostrar($consultaInsumos, $parametrosInsumos);
                foreach ($filas_insumos as $insumoo) {
                    $IDInsumo = $insumoo['IDInsumos'];
                    $cantidadNecesaria = $insumoo['Cantidad'] * $c3;

                    // Consulta para obtener la existencia del insumo
                    $consultaExistencia = "SELECT Existencia FROM insumos WHERE IDInsumo = :IDInsumo";
                    $parametrosExistencia = [":IDInsumo" => $IDInsumo];
                    // Ejecutar la consulta
                    $resultado = $this->base->mostrar($consultaExistencia, $parametrosExistencia);
                    
                    
                    // Decrementa la cantidad de existencia en la tabla de insumos del insumo que se está iterando
                    $querry_resInsumos = "UPDATE insumos SET Existencia = Existencia - :cantNes WHERE IDInsumo = :IDInsumo";
                    $data_resInsumos = [":cantNes" => $cantidadNecesaria, ":IDInsumo" => $IDInsumo];
                    $this->base->insertar_eliminar_actualizar($querry_resInsumos, $data_resInsumos);

                    
                    // Obtener el costo del insumo
                    $q7 = "SELECT Costo FROM insumos WHERE IDInsumo = :IdInsumoo";
                    $a7 = [":IdInsumoo" => $IDInsumo];
                    $resultado = $this->base->mostrar($q7, $a7);
                    $costoUnitario = $resultado[0]['Costo'];
            

                    // Calcular el costo total del insumo
                    $costoTotal = $costoUnitario * $cantidadNecesaria;
            
                    // Obtener el último NumeroMovimiento para el producto específico
                    $q8 = "SELECT MAX(NumeroMovimiento) AS UltimoMovimiento FROM movimientoinsumos WHERE IDInsumo = :IdInsumooo";
                    $a8 = [":IdInsumooo" => $IDInsumo];
                    $resultado = $this->base->mostrar($q8, $a8);
                    $ultimoMovimiento = $resultado[0]['UltimoMovimiento'];
                    $nuevoNumeroMovimiento = $ultimoMovimiento ? $ultimoMovimiento + 1 : 1;

            
                    // Obtener la cantidad restante del insumo en su tabla
                    $q9 = "SELECT Existencia FROM insumos WHERE IDInsumo = :IdInsumooo";
                    $resultado = $this->base->mostrar($q9, $a8);
                    $cantidadRestante = $resultado[0]['Existencia'];
            
                    // Insertar en la tabla movimientoproductos
                    $q10 = "INSERT INTO movimientoinsumos (IDInsumo, Fecha, EntradaSalida, IdMovimiento, Destino, Cantidad, CostoUnitario, CostoTotal, NumeroMovimiento, CantidadRestante) 
                        VALUES (:c2, NOW(), 'Salida', 1, 'Producción', :c3, :costoUnitario, :costoTotal, :nuevoNumeroMovimiento, :cantidadRestante)";
                    $a10 = [
                        ":c2" => $IDInsumo,
                        ":c3" => $cantidadNecesaria,
                        ":costoUnitario" => $costoUnitario,
                        ":costoTotal" => $costoTotal,
                        ":nuevoNumeroMovimiento" => $nuevoNumeroMovimiento,
                        ":cantidadRestante" => $cantidadRestante
                    ];
                    $this->base->insertar_eliminar_actualizar($q10, $a10);                
                }
                
                // Movimientos para mezcal -------------------------------------------------------------------------------------------
            $this->base->cerrar_conexion();
                                

            // Confirmar la transacción
            /*$this->base->commit();
            } catch (Exception $e) {
                // Revertir la transacción en caso de error
                //echo "Error al realizar el registro: ",$e;
                $this->base->rollBack();
                throw $e;
            } finally {
                // Cerrar la conexión
                $this->base->cerrar_conexion();
            }*/
            
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