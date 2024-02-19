<?php
include_once('../../model/ejemplo/mostrar/equipo3/mostrar.php');

$base = new MostrarCampos();
$base->instancias();

if (isset($_POST['consulta'])) {
    $busqueda = $_POST['consulta'];
    $resultado = $base->buscador($busqueda);
} else {
    $resultado = $base->getEjemplo();
}

$salida = '';

if ($resultado) {
    
    $salida .= '
        <table border="1">
            <thead>
                <tr>
                    <th>Campo 1</th>
                    <th>Campo 2</th>
                    <th>Campo 3</th>
                    <th>Campo 4</th>
                    <th>Campo 5</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>';

    foreach ($resultado as $fila) {
        $id = $fila['id'];
        $salida .= '<tr>';
        $salida .= '<td>' . $fila["campo1"] . '</td>';
        $salida .= '<td>' . $fila["campo2"] . '</td>';
        $salida .= '<td>' . $fila["campo3"] . '</td>';
        $salida .= '<td>' . $fila["campo4"] . '</td>';
        $salida .= '<td>' . $fila["campo5"] . '</td>';
        $salida .= '<td><a href="#" class="table_item__link eliminar-elemento" data-id="' . $id . '">Eliminar</a>
                        <a href="#" class="table_item__link2 eliminar-elemento" data-id="' . $id . '">Editar</a>
        
        </td>'; // Aquí va el link para eliminar, por ejemplo: href="eliminar.php?id='.$fila['id'].'
        
        $salida .= '</tr>';
    }

    $salida .= '</tbody></table>';
} else {
    $salida .= 'No se encontraron resultados';
}

echo $salida;
?>

<script src="../../controller/ejemplo/js/Eliminar_Equipo3.js"></script>
