<?php
include_once '../../model/Login/Autenticacion/Autentica_usuario.php';

session_start();

$email = $_POST['Correo'];
$password = $_POST['Password'];

$usuarioModel = new Login_Model();
$usuario = $usuarioModel->buscar_usuario($email, $password);

if ($usuario) {
    $_SESSION['user_key'] = $usuario['Clave'];

    switch ($usuario['IdentificadorArea']) {
        case "1":
            header('Location: ../../view/insumos/Principal_Insumos.html');
            break;
        case "Produccion":
            header('Location: ../area2.php');
            break;
        case "Envasado":
            header('Location: ../area2.php');
            break;
        case "Calidad":
            header('Location: ../area2.php');
            break;
        case "Ventas":
            header('Location: ../area2.php');
            break;
        case "Administrativo6":
            header('Location: ../area2.php');
            break;
        case "7":
            header('Location: ../area2.php');
            break;

        default:
            break;
    }
} else {
    echo "<script>alert('Usuario o contraseña incorrecta'); window.history.back();</script>";
}
?>
