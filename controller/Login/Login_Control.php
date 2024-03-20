<?php
include_once '../../model/Login/Autenticacion/Autentica_usuario.php';

// Iniciar sesión
session_start();

// Recibir datos del formulario
$email = $_POST['Correo'];
$password = $_POST['Password'];

// Validar credenciales
$usuarioModel = new Login_Model();
$usuario = $usuarioModel->buscar_usuario($email, $password);

if ($usuario) {
    // Inicia la sesión y guarda la clave del usuario
    $_SESSION['user_key'] = $usuario['Clave'];

    // Redireccionar según el área del usuario
    switch ($usuario['IdentificadorArea']) {
        case "1":
            header('Location: ../area1.html');
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
            header('Location: ../dashboard.php'); // Redirigir a un dashboard por defecto
            break;
    }
} else {
    echo 'Usuario o contraseña incorrectos';
}
