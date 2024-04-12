<?php
include_once('../../model/Produccion/Mostrar_Movimiento_General_Mezcal.php');

$base = new MostrarMez();
$base->instancias();

$salida = '';
if (isset($_GET['lote'])) {
    $lote = $_GET['lote'];    
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
    
        foreach ($resultado as $fila) {
            if ($fila["Movimiento"]=='Merma'){
                if ($fila["EntradaSalida"]=='entrada'){
                    $salida .= '<tr>';
                    $Lote= $fila['Lote'];
                    $Fecha =$fila['Fecha'];
                    $salida .= '<td>' . $fila["Fecha"] . '</td>';
                    $salida .= '<td>' . $fila["Lote"] . '</td>';
                    $salida .= '<td>' . "S/A" . '</td>';
                    $salida .= '<td>' . $fila["Categoria"] . '</td>';
                    $salida .= '<td>' . $fila["Clase_Mezcal"] . '</td>';
                    $salida .= '<td>' . $fila["Tanque"] . '</td>';
                    $salida .= '<td>' . $fila["Volumen"] . '</td>';
                    $salida .= '<td>' . $fila["PorcentajeAlcohol"] . '</td>';
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
                    $salida .= '<tr>';
                    $Lote= $fila['Lote'];
                    $Fecha =$fila['Fecha'];
                    $salida .= '<td>' . $fila["Fecha"] . '</td>';
                    $salida .= '<td>' . $fila["Lote"] . '</td>';
                    $salida .= '<td>' . "S/A" . '</td>';
                    $salida .= '<td>' . $fila["Categoria"] . '</td>';
                    $salida .= '<td>' . $fila["Clase_Mezcal"] . '</td>';
                    $salida .= '<td>' . $fila["Tanque"] . '</td>';
                    $salida .= '<td>' . $fila["Volumen"] . '</td>';
                    $salida .= '<td>' . $fila["PorcentajeAlcohol"] . '</td>';
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
                    $salida .= '<tr>';
                    $Lote= $fila['Lote'];
                    $Fecha =$fila['Fecha'];
                    $salida .= '<td>' . $fila["Fecha"] . '</td>';
                    $salida .= '<td>' . $fila["Lote"] . '</td>';
                    $salida .= '<td>' . "S/A" . '</td>';
                    $salida .= '<td>' . $fila["Categoria"] . '</td>';
                    $salida .= '<td>' . $fila["Clase_Mezcal"] . '</td>';
                    $salida .= '<td>' . $fila["Tanque"] . '</td>';
                    $salida .= '<td>' . $fila["Volumen"] . '</td>';
                    $salida .= '<td>' . $fila["PorcentajeAlcohol"] . '</td>';
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
                    $salida .= '<tr>';
                    $Lote= $fila['Lote'];
                    $Fecha =$fila['Fecha'];
                    $salida .= '<td>' . $fila["Fecha"] . '</td>';
                    $salida .= '<td>' . $fila["Lote"] . '</td>';
                    $salida .= '<td>' . "S/A" . '</td>';
                    $salida .= '<td>' . $fila["Categoria"] . '</td>';
                    $salida .= '<td>' . $fila["Clase_Mezcal"] . '</td>';
                    $salida .= '<td>' . $fila["Tanque"] . '</td>';
                    $salida .= '<td>' . $fila["Volumen"] . '</td>';
                    $salida .= '<td>' . $fila["PorcentajeAlcohol"] . '</td>';
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

}else{
    // Si no se recibe la variable de consulta, se puede enviar un mensaje de error
    echo "Error: No se recibió la variable de consulta.";
}
?>