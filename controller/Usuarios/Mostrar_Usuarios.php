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
                    <th>Tipo de usuario</th>
                    <th>Área</th>
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


        $base = new MostrarCampos();
        $base->instancias();

        $salida1 = $fila["IdentificadorTipo"];
        $resultadoTipo = $base->buscador1($salida1);

        $base = new MostrarCampos();
        $base->instancias();

        $salida2 = $fila["IdentificadorTipo"];
        $resultadoArea = $base->buscador2($salida2);

        $salida .= '<td>' . $resultadoTipo[0][0] . '</td>';
        $salida .= '<td>' . $resultadoArea[0][0] . '</td>';

        $salida .= '<td>';
        $salida .= '<button type="submit" class="table_item__link eliminar-elemento" data-id="' . $id . '">Eliminar</button>';
        $salida .= '  ';
        $salida .= '<button type="submit" onclick="window.location.href=\'../../view/Usuarios/Editar_Usuario.html?id=' . $id . '\'">Editar</button>';
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