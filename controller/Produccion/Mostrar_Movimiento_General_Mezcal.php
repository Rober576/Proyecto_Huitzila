<?php
include_once('../../model/Produccion/Mostrar_Movimiento_General_Mezcal.php');

$base = new MostrarMez();
$base->instancias();

$salida = '';
if ($_GET['fecha_inicio'] == 'null') {
    $lote = $_GET['lote'];    
    
    $resultado1=$base->buscador_menor($lote);
    foreach ($resultado1 as $fila1){
        $fecha=$fila1["fecha"];
    }

    $resultado3=$base->buscador_menor1($lote);
    foreach ($resultado3 as $fila3){
        $fecha1=$fila3["fecha"];
    }

    $resultado2=$base->datos_finales($fecha1);

    $resultado = $base->buscador($lote);
    

    if ($resultado) {
        $salida .= '
        <table>
					<thead>
						<tr >
                            <th rowspan="2" class="columna">Fecha</th>
							<th rowspan="2" class="columna">No. de lote</th>
                            <th rowspan="2" class="columna"># Análisis fisicoquímico</th>
							<th rowspan="2" class="columna">Categoría</th>
							<th rowspan="2" class="columna">Clase </th>
							<th rowspan="2" class="columna">Tanque</th>
                            <th colspan="2">Inventario inicial</th>	
                            <th colspan="4">Entradas</th>	
                            <th colspan="3">Salidas</th>	
                            <th colspan="3">Mermas o saldo a favor</th>	
                            <th colspan="2">Inventario final teórico
                                
                            </th>			
						</tr>
                        <tr>
                            <th class="columna">Volumen</th>
                            <th class="columna">% Alc. Vol.</th>
                            <th class="columna">Procedencia</th>
                            <th class="columna">Volumen</th>
                            <th class="columna">% Alc. Vol.</th>
                            <th class="columna">Volumen de agua</th>
                            <th class="columna">Destino</th>
                            <th class="columna">Volumen</th>
                            <th class="columna">% Alc. Vol</th>
                            <th class="columna">Volumen</th>
                            <th class="columna">% Alc. Vol</th>
                            <th class="columna">Vol a 55% Alc. Vol.</th>
                            <th class="columna">Volumen</th>
                            <th class="columna">% Alc. Vol</th>
                        </tr>
					</thead>
					<tbody>';
        $indice_resultado2 = 0;
        foreach ($resultado as $fila){
            if ($fila['Fecha']==$fecha){
                $salida .= '<tr>';
                $Lote= $fila['Lote'];
                $Fecha =$fila['Fecha'];
                $salida .= '<td>' . $fila["Fecha"] . '</td>';
                $salida .= '<td>' . $fila["Lote"] . '</td>';
                $salida .= '<td>' . "S/A" . '</td>';
                $salida .= '<td>' . $fila["Categoria"] . '</td>';
                $salida .= '<td>' . $fila["Clase_Mezcal"] . '</td>';
                $salida .= '<td>' . $fila["Tanque"] . '</td>';
                $salida .= '<td>' . "0.00" . '</td>';
                $salida .= '<td>' . "0.00" . '</td>';
            }else {
                // Si la fecha no coincide, verificar si hay datos en $resultado2
                if ($indice_resultado2 <= count($resultado2)) {
                    // Agregar datos de $fila y $fila2 al $salida
                    $fila2 = $resultado2[$indice_resultado2];
                    $salida .= '<tr>';
                    $salida .= '<td>' . $fila["Fecha"] . '</td>';
                    $salida .= '<td>' . $fila["Lote"] . '</td>';
                    $salida .= '<td>' . "S/A" . '</td>';
                    $salida .= '<td>' . $fila["Categoria"] . '</td>';
                    $salida .= '<td>' . $fila["Clase_Mezcal"] . '</td>';
                    $salida .= '<td>' . $fila["Tanque"] . '</td>';
                    $salida .= '<td>' . $fila2["final"] . '</td>';
                    $salida .= '<td>' . $fila2["porcentaje"] . '</td>';
                    
                    // Incrementar el índice de $resultado2
                    $indice_resultado2++;
                }
            }
           
            if ($fila["Movimiento"]=='Merma'){
                if ($fila["EntradaSalida"]=='entrada'){
                    $salida .= '<td>' . $fila["DestinoProcedencia"] . '</td>';
                    $salida .= '<td>' . $fila["Volumen"] . '</td>';
                    $salida .= '<td>' . $fila["PorcentajeAlcohol"] . '</td>';
                    $salida .= '<td>' . $fila["VolumenAgua"] . '</td>';
                    $salida .= '<td>' . "-". '</td>';
                    $salida .= '<td>' . "-". '</td>';
                    $salida .= '<td>' . "-". '</td>';
                    $salida .= '<td>' . $fila["MermasVolumen"] . '</td>';
                    $salida .= '<td>' . $fila["MermasPorcentaje"] . '</td>';
                    $salida .= '<td>' . $fila["Volumen55"] . '</td>';
                    $salida .= '<td>' . $fila["FinalVolumen"] . '</td>';
                    $salida .= '<td>' . $fila["FinalPorcentaje"] . '</td>';
                    $salida .= '</td>';
                    $salida .= '</tr>';
                }else if ($fila["EntradaSalida"]=='salida'){
                    $salida .= '<td>' . "-". '</td>';
                    $salida .= '<td>' . "-". '</td>';
                    $salida .= '<td>' . "-". '</td>';
                    $salida .= '<td>' . "-". '</td>';
                    $salida .= '<td>' . $fila["DestinoProcedencia"] . '</td>';
                    $salida .= '<td>' . $fila["Volumen"] . '</td>';
                    $salida .= '<td>' . $fila["PorcentajeAlcohol"] . '</td>';
                    $salida .= '<td>' . $fila["MermasVolumen"] . '</td>';
                    $salida .= '<td>' . $fila["MermasPorcentaje"] . '</td>';
                    $salida .= '<td>' . $fila["Volumen55"] . '</td>';
                    $salida .= '<td>' . $fila["FinalVolumen"] . '</td>';
                    $salida .= '<td>' . $fila["FinalPorcentaje"] . '</td>';
                    $salida .= '</td>';
                    $salida .= '</tr>';
                }
            }else{
                if ($fila["EntradaSalida"]=='entrada'){
                    $salida .= '<td>' . $fila["DestinoProcedencia"] . '</td>';
                    $salida .= '<td>' . $fila["Volumen"] . '</td>';
                    $salida .= '<td>' . $fila["PorcentajeAlcohol"] . '</td>';
                    $salida .= '<td>' . $fila["VolumenAgua"] . '</td>';
                    $salida .= '<td>' . "-". '</td>';
                    $salida .= '<td>' . "-". '</td>';
                    $salida .= '<td>' . "-". '</td>';
                    $salida .= '<td>' . "-". '</td>';
                    $salida .= '<td>' . "-". '</td>';
                    $salida .= '<td>' . "-". '</td>';
                    $salida .= '<td>' . $fila["FinalVolumen"] . '</td>';
                    $salida .= '<td>' . $fila["FinalPorcentaje"] . '</td>';
                    $salida .= '</td>';
                    $salida .= '</tr>';
                }else if ($fila["EntradaSalida"]=='salida'){
                    $salida .= '<td>' . "-". '</td>';
                    $salida .= '<td>' . "-". '</td>';
                    $salida .= '<td>' . "-". '</td>';
                    $salida .= '<td>' . "-". '</td>';
                    $salida .= '<td>' . $fila["DestinoProcedencia"] . '</td>';
                    $salida .= '<td>' . $fila["Volumen"] . '</td>';
                    $salida .= '<td>' . $fila["PorcentajeAlcohol"] . '</td>';
                    $salida .= '<td>' . "-". '</td>';
                    $salida .= '<td>' . "-". '</td>';
                    $salida .= '<td>' . "-". '</td>';
                    $salida .= '<td>' . $fila["FinalVolumen"] . '</td>';
                    $salida .= '<td>' . $fila["FinalPorcentaje"] . '</td>';
                    $salida .= '</td>';
                    $salida .= '</tr>';
                }
            }
        
            
            
        }
        $salida .= '</tbody></table>';
        
      
    } else {
        echo "No se encontraron resultados";
    }
    echo $salida; // Aquí imprimimos la tabla generada

}else {
    $lote = $_GET['lote'];   
    $fecha_inicio=$_GET['fecha_inicio'];
    $fecha_fin=$_GET['fecha_fin'];
    $filtrado = $base->filtrado($lote, $fecha_inicio, $fecha_fin);
    

    if ($filtrado) {
        $salida .= '
        <table>
                    <thead>
                        <tr >
                            <th rowspan="2" class="columna">Fecha</th>
                            <th rowspan="2" class="columna">No. de lote</th>
                            <th rowspan="2" class="columna"># Análisis fisicoquímico</th>
                            <th rowspan="2" class="columna">Categoría</th>
                            <th rowspan="2" class="columna">Clase </th>
                            <th rowspan="2" class="columna">Tanque</th>
                            <th colspan="2">Inventario inicial</th>	
                            <th colspan="4">Entradas</th>	
                            <th colspan="3">Salidas</th>	
                            <th colspan="3">Mermas o saldo a favor</th>	
                            <th colspan="2">Inventario final teórico
                                
                            </th>			
                        </tr>
                        <tr>
                            <th class="columna">Volumen</th>
                            <th class="columna">% Alc. Vol.</th>
                            <th class="columna">Procedencia</th>
                            <th class="columna">Volumen</th>
                            <th class="columna">% Alc. Vol.</th>
                            <th class="columna">Volumen de agua</th>
                            <th class="columna">Destino</th>
                            <th class="columna">Volumen</th>
                            <th class="columna">% Alc. Vol</th>
                            <th class="columna">Volumen</th>
                            <th class="columna">% Alc. Vol</th>
                            <th class="columna">Vol a 55% Alc. Vol.</th>
                            <th class="columna">Volumen</th>
                            <th class="columna">% Alc. Vol</th>
                        </tr>
                    </thead>
                    <tbody>';
        foreach ($filtrado as $fila){
            $salida .= '<tr>';
            $Lote= $fila['Lote'];
            $Fecha =$fila['Fecha'];
            $salida .= '<td>' . $fila["Fecha"] . '</td>';
            $salida .= '<td>' . $fila["Lote"] . '</td>';
            $salida .= '<td>' . "S/A" . '</td>';
            $salida .= '<td>' . $fila["Categoria"] . '</td>';
            $salida .= '<td>' . $fila["Clase_Mezcal"] . '</td>';
            $salida .= '<td>' . $fila["Tanque"] . '</td>';

            if ($fila["Movimiento"]=='Merma'){
                if ($fila["EntradaSalida"]=='entrada'){
                    $salida .= '<td>' . $fila["DestinoProcedencia"] . '</td>';
                    $salida .= '<td>' . $fila["Volumen"] . '</td>';
                    $salida .= '<td>' . $fila["PorcentajeAlcohol"] . '</td>';
                    $salida .= '<td>' . $fila["VolumenAgua"] . '</td>';
                    $salida .= '<td>' . "-". '</td>';
                    $salida .= '<td>' . "-". '</td>';
                    $salida .= '<td>' . "-". '</td>';
                    $salida .= '<td>' . $fila["MermasVolumen"] . '</td>';
                    $salida .= '<td>' . $fila["MermasPorcentaje"] . '</td>';
                    $salida .= '<td>' . $fila["Volumen55"] . '</td>';
                    $salida .= '<td>' . $fila["FinalVolumen"] . '</td>';
                    $salida .= '<td>' . $fila["FinalPorcentaje"] . '</td>';
                    $salida .= '</td>';
                    $salida .= '</tr>';
                }else if ($fila["EntradaSalida"]=='salida'){
                    $salida .= '<td>' . "-". '</td>';
                    $salida .= '<td>' . "-". '</td>';
                    $salida .= '<td>' . "-". '</td>';
                    $salida .= '<td>' . "-". '</td>';
                    $salida .= '<td>' . $fila["DestinoProcedencia"] . '</td>';
                    $salida .= '<td>' . $fila["Volumen"] . '</td>';
                    $salida .= '<td>' . $fila["PorcentajeAlcohol"] . '</td>';
                    $salida .= '<td>' . $fila["MermasVolumen"] . '</td>';
                    $salida .= '<td>' . $fila["MermasPorcentaje"] . '</td>';
                    $salida .= '<td>' . $fila["Volumen55"] . '</td>';
                    $salida .= '<td>' . $fila["FinalVolumen"] . '</td>';
                    $salida .= '<td>' . $fila["FinalPorcentaje"] . '</td>';
                    $salida .= '</td>';
                    $salida .= '</tr>';
                }
            }else{
                if ($fila["EntradaSalida"]=='entrada'){
                    $salida .= '<td>' . $fila["DestinoProcedencia"] . '</td>';
                    $salida .= '<td>' . $fila["Volumen"] . '</td>';
                    $salida .= '<td>' . $fila["PorcentajeAlcohol"] . '</td>';
                    $salida .= '<td>' . $fila["VolumenAgua"] . '</td>';
                    $salida .= '<td>' . "-". '</td>';
                    $salida .= '<td>' . "-". '</td>';
                    $salida .= '<td>' . "-". '</td>';
                    $salida .= '<td>' . "-". '</td>';
                    $salida .= '<td>' . "-". '</td>';
                    $salida .= '<td>' . "-". '</td>';
                    $salida .= '<td>' . $fila["FinalVolumen"] . '</td>';
                    $salida .= '<td>' . $fila["FinalPorcentaje"] . '</td>';
                    $salida .= '</td>';
                    $salida .= '</tr>';
                }else if ($fila["EntradaSalida"]=='salida'){
                    $salida .= '<td>' . "-". '</td>';
                    $salida .= '<td>' . "-". '</td>';
                    $salida .= '<td>' . "-". '</td>';
                    $salida .= '<td>' . "-". '</td>';
                    $salida .= '<td>' . $fila["DestinoProcedencia"] . '</td>';
                    $salida .= '<td>' . $fila["Volumen"] . '</td>';
                    $salida .= '<td>' . $fila["PorcentajeAlcohol"] . '</td>';
                    $salida .= '<td>' . "-". '</td>';
                    $salida .= '<td>' . "-". '</td>';
                    $salida .= '<td>' . "-". '</td>';
                    $salida .= '<td>' . $fila["FinalVolumen"] . '</td>';
                    $salida .= '<td>' . $fila["FinalPorcentaje"] . '</td>';
                    $salida .= '</td>';
                    $salida .= '</tr>';
                }
            }
        
            
            
        }
        $salida .= '</tbody></table>';
        
    
    } else {
        echo "No se encontraron resultados";
    }
    echo $salida; // Aquí imprimimos la tabla generada

}

?>