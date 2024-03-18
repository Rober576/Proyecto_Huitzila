<?php
include_once('../../model/Login/Autenticacion/Autentica_usuario.php');

class Controla_Login {
    public function __construct() {
        // Iniciar la sesión
        session_start();
    }

    public function login() {
        if(isset($_SESSION['clave'])) {
            header("Location: index.html");  //Devuelve al inicio si no hay una sesión
            exit();
        }
    }


    public function autentica() {
        $correo = $_POST['correo'];
        $password = $_POST['password'];
        
        // Instanciar el modelo de Login
        $login_model = new Autentica();

        // Autenticar al usuario
        if($login_model->autenticar_user($correo, $password)) {
            // En este ejemplo, asumimos que la consulta SQL devuelve un solo usuario
            $info = $login_model->obtener_Area($correo);
            
            $_SESSION['clave'] = $info['Clave']; // Asigna la clave del usuario de la bd a la sesión
            header("Location: index.html");  //Pendiente de conectar con el principal   

            $area = $info[0]["IdentidicadorArea"];
            $tipo = $info[0]["IdentidicadorTipo"];

            if($area == "Agricola"){
                //se manda al area de agricola
            }

            else if($area == "Produccion"){

            }

            else if($area == "Envasado"){

            }

            else if($area == "Calidad"){

            }

            else if($area == "Ventas"){

            }

            else if($area == "Administrativo"){

            }

        } else {
            $error = "Nombre de usuario o contraseña incorrectos";
        }
    
    include("../../view/Login.html");
    }
}

$loginController = new Controla_Login();
$loginController->login();
?>
