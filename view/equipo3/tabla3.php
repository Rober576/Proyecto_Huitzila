<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="/view/css/cssMostrar.css">
<title>Tabla con cuatro columnas</title>
</head>
<body>

<table border="1">
  <tr>
    <th colspan="5">Equipo 3</th>
  </tr>
  <tr>
    <th>Campo 1</th>
    <th>Campo 2</th>
    <th>Campo 3</th>
    <th>Campo 4</th>
    <th>Campo 5</th>
  </tr>

 <?php
  $servername = "localhost";
  $username = "practicamvc";
  $password = "Leo1234@";
  $dbname = "baseejemplo";
  
  $conn = new mysqli($servername, $username, $password, $dbname);
  if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
  }
  
  $sql = "SELECT campo1, campo2, campo3, campo4, campo5 FROM tabla3";
  $result = $conn->query($sql);
  
  if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
      echo "<tr>";
      echo "<td>" . $row["campo1"] . "</td>";
      echo "<td>" . $row["campo2"] . "</td>";
      echo "<td>" . $row["campo3"] . "</td>";
      echo "<td>" . $row["campo4"] . "</td>";
      echo "<td>" . $row["campo5"] . "</td>";
      echo "</tr>";
    }
  } else {
    echo "0 resultados";
  }
  $conn->close();
?>

</table>

</body>
</html>
