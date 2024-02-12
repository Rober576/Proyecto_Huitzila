<?php
//mandamos a llamar al archivo de model
include("../../model/equipo3/mostrar_tabla3.php");

echo '<script>console.log("hola")</script>';
//salida es la que va a contener todo lo que se va a mostrar en el formulario
$salida = "";
$base = new Mostrar();
$base->inicializar();

//se revisa si la caja de busqueda tiene algo escrito
if(isset($_POST['consulta'])){

    //si hay algo en la caja se hace una busqueda inteligente
    $resultado = $base->busqueda_inteligente($_POST['consulta']);
    
}

else{
    //si no tiene nada se muestra todo el contenido de la tabla
    $resultado = $base->mostrar_todo();
}

//se verifica si la busqueda devolvio algo
if($resultado == true){
    $salida = "<table class='tabla_datos'>
                <thead>
                    <tr>
                        <th>campo1</th>
                        <th>campo2</th>
                        <th>campo3</th>
                        <th>campo4</th>
                        <th>campo5</th>
                    </tr>
                </thead>
                <tbody>";

    //se recorre el array asociativo que se obtuvo de la busqueda
    for($i = 0; $i < count($resultado); $i++){
        $salida .= "<tr>
                        <td>".$resultado[$i]['campo1']."</td>
                        <td>".$resultado[$i]['campo2']."</td>
                        <td>".$resultado[$i]['campo3']."</td>
                        <td>".$resultado[$i]['campo4']."</td>
                        <td>".$resultado[$i]['campo5']."</td>
                    </tr>";

    }   
}

else{
    //si no se encontro nada se muestra un mensaje
    $salida = "<p>No se encontraron resultados</p>";
}

echo $salida;
?>