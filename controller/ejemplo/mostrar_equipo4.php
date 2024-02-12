<?php
include_once('../../model/ejemplo/mostrar/equipo4/mostrar.php');
$salida = '';
$base = new MostrarCampos();
$base->instancias();
echo("siiiiii");
if (isset($_POST['consulta'])) {
    $busqueda = $_POST['consulta'];
    $resultado = $base->buscador($busqueda);
    if ($resultado == true) {
        //pone los encabezados de la tabla
        $salida .= '
        <div class="di">
        <table class="header_table" >
                        <thead  >
                            <tr>
                                <th>c1</th>
                                <th>c2</th>
                                <th>c3</th>
                                <th>c4</th>
                                <th>c5</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                <tbody>';
    
        //agrega los resultados de la busqueda
        for ($i = 0; $i < count($resultado); $i++) {
    
            //obtiene los valores de la tupla actual de cada uno de los campos y los guarda como variables
            $c1 = $resultado[$i]["campo1"];
            $c2 = $resultado[$i]["campo2"];
            $c3 = $resultado[$i]["campo3"];
            $c4 = $resultado[$i]["campo4"];
            $c5 = $resultado[$i]["campo5"];
            //escribe los valores en la tabla
            $salida .= '<tr>';
            $salida .= '<td>' . $c1. '</td>';
            $salida .= '<td>' . $c2 . '</td>';
            $salida .= '<td>' . $c3 . '</td>';
            $salida .= '<td>' . $c4 . '</td>';
            $salida .= '<td>' . $c5 . '</td>';
            //
            //
            $salida .= '</tr></div>';
    
            
        }
    } 
    
    else {
        $salida .= 'No se encontraron resultados';
    }
} else {
    $resultado = $base->getEjemplo();
    if ($resultado == true) {
        //pone los encabezados de la tabla
        $salida .= '
        <div class="di">
        <table class="header_table" >
                        <thead  >
                            <tr>
                                <th>c1</th>
                                <th>c2</th>
                                <th>c3</th>
                                <th>c4</th>
                                <th>c5</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                <tbody>';
    
        //agrega los resultados de la busqueda
        for ($i = 0; $i < count($resultado); $i++) {
    
            //obtiene los valores de la tupla actual de cada uno de los campos y los guarda como variables
            $c1 = $resultado[$i]["campo1"];
            $c2 = $resultado[$i]["campo2"];
            $c3 = $resultado[$i]["campo3"];
            $c4 = $resultado[$i]["campo4"];
            $c5 = $resultado[$i]["campo5"];
            //escribe los valores en la tabla
            $salida .= '<tr>';
            $salida .= '<td>' . $c1. '</td>';
            $salida .= '<td>' . $c2 . '</td>';
            $salida .= '<td>' . $c3 . '</td>';
            $salida .= '<td>' . $c4 . '</td>';
            $salida .= '<td>' . $c5 . '</td>';
            
            $salida .= '</tr></div>';
    
            
        }
    } 
    
    else {
        $salida .= 'No se encontraron resultados';
    }
}



$salida .= "</tbody></table>";
echo $salida;
?>