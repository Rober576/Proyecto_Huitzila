<?php

require_once("../../../config/Crud_bd.php");

class Autentica {
    private $crud_bd;

    public function __construct() {
        $this->crud_bd = new Crud_bd();
    }

    public function autenticar_user($correo, $password) {
        $pass_hashed = password_hash($password, PASSWORD_BCRYPT);
        //Realiza un hash a la contraseña ingresada para poder verificarla con la contraseña almacenada
        $consulta = "SELECT * FROM usuarios WHERE Correo = :correo AND Password = :password";
        $parametros = array(':correo' => $correo, ':password' => $pass_hashed);

        $usuario_autenticado = $this->crud_bd->mostrar($consulta, $parametros);

        // Verificar si se encontró un usuario con las credenciales proporcionadas
        if (!empty($usuario_autenticado)) {
            // Llamar a la función para obtener información adicional del usuario (tipo y área)
            //$this->obtener_Area($correo);
            return true; // Usuario autenticado correctamente
        } else {
            return false; // Credenciales incorrectas
        }
    }
    
        // Función para realizar las consultas para obtener información adicional del usuario (tipo y área)
    public function obtener_Area($correo) {
        $consulta = "SELECT Clave, IdentidicadorArea, IdentidicadorTipo FROM usuarios WHERE Correo = :correo";
        $parametros = array(':correo' => $correo);

        $informacion_usuario = $this->crud_bd->mostrar($consulta, $parametros);

        // Procesar la información obtenida
        if (!empty($informacion_usuario)) {
            return $informacion_usuario;
            //Retorna la información del usuario donde se encuentra su área y tipo
        } else {
            
        }
    }
}
?>
