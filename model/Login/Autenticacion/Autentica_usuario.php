

<?php
require_once '../../../config/Crud_bd.php';

class Login_Model {
    private $crud_bd;

    public function __construct() {
        $this->crud_bd = new Crud_bd();
    }

    public function buscar_usuario($email, $password) {
        // Método para encripar la contraseña para que coincida con la almacenada
        $pass_hashed = password_hash($password, PASSWORD_BCRYPT);

        $consulta = "SELECT * FROM usuarios WHERE Correo = :email AND Password = :password";
        $parametros = array(':email' => $email, ':password' => $pass_hashed);
        
        $usuarios = $this->crud_bd->mostrar($consulta, $parametros);

        if (!empty($usuarios)) {
            return $usuarios[0];
        } else {
            return null;
        }
    }
}
?>
