<?php
require_once('../../model/Login/Autenticacion/Autentica_usuario.php');

class Controla_Login {
    public function __construct() {
        // Iniciar la sesión
        session_start();
    }

    public function login() {
        if(isset($_SESSION['user_id'])) {
            header("Location: index.html"); //Pendiente de conectar con el principal del usuario correspondiente
            exit();
        }

        if(isset($_POST['submit'])) {
            $username = $_POST['username'];
            $password = $_POST['password'];
            
            // Instanciar el modelo de Login
            $login_model = new Autentica();

            // Autenticar al usuario
            if($login_model->autenticar_user($username, $password)) {
                // Obtener el ID del usuario autenticado (si es necesario)
                // En este ejemplo, asumimos que la consulta SQL devuelve un solo usuario
                $usuario_autenticado = $login_model->obtener_informacion_usuario($username);
                $_SESSION['user_id'] = $usuario_autenticado['id']; // Cambiar 'id' por el nombre correcto de la columna en tu tabla de usuarios
                header("Location: index.php");  //Pendiente de conectar con el principal del usuario correspondiente
                exit();
            } else {
                $error = "Nombre de usuario o contraseña incorrectos";
            }
        }

        include("../view/login.php");
    }
}

$loginController = new Controla_Login();
$loginController->login();
?>
