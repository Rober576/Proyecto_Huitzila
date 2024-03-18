<?php

include_once('../../model/Usuarios/Mostrar_Usuario.php');

$base = new MostrarCampos();
$base->instancias();

if (isset($_POST['consulta'])) {
    $busqueda = $_POST['consulta'];
    $resultado = $base->buscador($busqueda);
} else {
    $resultado = $base->getEjemplo();
    //echo "No se envio";
}

$salida = '';

if ($resultado) {
    $salida .= '
        <table border="1">
            <thead>
                <tr>
                    <th>Clave</th>
                    <th>Nombre</th>
                    <th>Apellido paterno</th>
                    <th>Apellido materno</th>
                    <th>Correo</th>
                    <th>Identificador tipo</th>
                    <th>Identificador area</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>';

    foreach ($resultado as $fila) {
        $id = $fila['Clave'];
        $salida .= '<tr>';
        $salida .= '<td>' . $fila["Clave"] . '</td>';
        $salida .= '<td>' . $fila["Nombre"] . '</td>';
        $salida .= '<td>' . $fila["ApellidoPaterno"] . '</td>';
        $salida .= '<td>' . $fila["ApellidoMaterno"] . '</td>';
        $salida .= '<td>' . $fila["Correo"] . '</td>';
        $salida .= '<td>' . $fila["IdentificadorTipo"] . '</td>';
        $salida .= '<td>' . $fila["IdentificadorArea"] . '</td>';

        $salida .= '<td>';
        $salida .= '<a href="#" class="table_item__link eliminar-elemento" data-id="' . $id . '">Eliminar</a>';
        $salida .= ' | ';
        $salida .= '<a href="../../view/Usuarios/Editar_Usuario.html?id=' . $id . '">Editar</a>';
        $salida .= '</td>';

        $salida .= '</tr>';
    }

    $salida .= '</tbody></table>';
} else {
    $salida .= 'No se encontraron resultados';
}

echo $salida;
?>
<script src="../../controller/Usuarios/js/Eliminar_Usuarios.js"></script>