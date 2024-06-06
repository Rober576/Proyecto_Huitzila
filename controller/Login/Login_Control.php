<?php
include_once '../../model/Login/Autenticacion/Autentica_usuario.php';

session_start();

$email = $_POST['Correo'];
$password = $_POST['Password'];

$usuarioModel = new Login_Model();
$usuario = $usuarioModel->buscar_usuario($email, $password);

if ($usuario) {
    $_SESSION['user_key'] = $usuario['Clave'];
    $_SESSION['Area_usuario'] = $usuario['IdentificadorArea'];
    $_SESSION['tipo_usuario'] = $usuario['IdentificadorTipo'];
    setcookie("user_key", $usuario['Clave'], time() + 3600, "/");
    switch ($usuario['IdentificadorArea']) {
        case "1":
            header('Location: ../../view/Agricola/Principal_Agricola.html');
            break;
        case "2":
            header('Location: ../../view/Produccion/Principal_Produccion.html');
            break;
        case "3":
            header('Location: ../../view/insumos/Principal_Insumos.html');
            break;
        case "4":
            header('Location: ../../view/Calidad/Principal_Calidad.html');
            break;
        case "5":
            header('Location: ../../view/Ventas/Principal_####.html');
            break;
        case "6":
            header('Location: ../../view/Administrativo/Principal_####.html');
            break;
        case "7":
            header('Location: ../../view/Usuarios/Principal_Usuarios.html');
            break;

        default:
            break;
    }
} else {
    echo "<script>alert('Usuario o contraseña incorrectos'); window.history.back();</script>";
}
?>
