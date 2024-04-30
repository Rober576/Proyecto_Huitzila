<?php

// Configura PHP para mostrar todos los errores y advertencias
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Incluye el archivo de la clase
include_once('../../model/Produccion/Mostrar_Cremas_Destilados_licores.php');

try {
    // Instancia la clase MostrarCDL
    $base = new MostrarCDL();
    $base->instancias();

    // Verifica si se envió un formulario
    if (isset($_POST['lote'])) {
        $busqueda = $_POST['lote'];
        $resultado = $base->buscador($busqueda);
    } else {
        $resultado = $base->getInfo();
    }

    // Inicializa la variable $salida
    $salida = '';

    // Construye la tabla si hay resultados
    if ($resultado) {
        $salida .= '<table border="1">
                        <thead>
                            <tr>
                                <th>No. de lote</th>
                                <th>Tanque</th>
                                <th>Tipo</th>
                                <th>Clase</th>
                                <th>Edad</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>';

        // Recorre los resultados y construye las filas de la tabla
        foreach ($resultado as $fila) {
            $Lote = $fila['Lote'];
            $salida .= '<tr>';
            $salida .= '<td>' . $fila["Lote"] . '</td>';
            $salida .= '<td>' . $fila["tanque"] . '</td>';
            $salida .= '<td>' . $fila["NombreDestilado"] . '</td>';
            $salida .= '<td>' . $fila["Clase_Mezcal"] . '</td>';
            if ($fila["Clase_Mezcal"] == 'Añejo') {
                $salida .= '<td>' . $fila["Edad"] . " Años" . '</td>';
            } else {
                $salida .= '<td>' . ($fila["Edad"] == -1 ? '-' : $fila["Edad"] . " Meses") . '</td>';
            }
            $salida .= '<td>';
            $salida .= '<button  href="#"  class="boton-eliminar" type="submit" data-id="' . $Lote . '">Eliminar</button>';
            $salida .= ' ';
            $salida .= '<button  onclick="window.location.href=\'../../controller/Produccion/Get_Cremas_Destilados_Licores.php?id=' . $Lote . '\'"  class="boton-modificar" type="submit" data-id="' . $Lote . '">Modificar</button>';
            $salida .= '</td>';
            $salida .= '</tr>';
        }

        $salida .= '</tbody></table>';
    } else {
        $salida .= 'No se encontraron resultados';
    }

    // Imprime la salida
    echo $salida;
} catch (Exception $e) {
    // Maneja cualquier excepción que pueda ocurrir
    echo 'Error: ' . $e->getMessage();
}
?>
