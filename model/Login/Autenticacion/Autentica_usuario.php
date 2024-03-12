<?php
require_once('../../../config/Crud_bd.php');

class Autentica {
    private $crud_bd;

    public function __construct() {
        $this->crud_bd = new Crud_bd();
    }

    public function autenticar_user($username, $password) {
        $consulta = "SELECT * FROM usuarios WHERE username = :username AND password = :password";
        $parametros = array(':username' => $username, ':password' => $password);

        $usuario_autenticado = $this->crud_bd->mostrar($consulta, $parametros);

        // Verificar si se encontró un usuario con las credenciales proporcionadas
        if (!empty($usuario_autenticado)) {
            // Llamar a la función para obtener información adicional del usuario (tipo y área)
            $this->obtener_informacion_usuario($username);
            return true; // Usuario autenticado correctamente

        } else {
            return false; // Credenciales incorrectas
        }
    }

    public function getArea($username) {
        $consulta = "SELECT nombrearea, Tipo FROM tipoareas, usuarios, tipousuario WHERE Nombre = :username AND 
        tipoareas.IdentificadorArea = usuarios.IdentificadorArea AND tipousuario.IdentificadorTipo = usuarios.IdentificadorTipo";
        $parametros = array(':username' => $username);

        $area = $this->crud_bd->mostrar($consulta, $parametros);

        return $area;
    }

    public function obtener_informacion_usuario($username) {
        // Realiza las consultas para obtener información adicional del usuario (tipo y área)
        $consulta = "SELECT area, tipo FROM usuarios WHERE username = :username";
        $parametros = array(':username' => $username);

        $informacion_usuario = $this->crud_bd->mostrar($consulta, $parametros);

        // Procesar la información obtenida
        if (!empty($informacion_usuario)) {
         
            // Aquí puedes realizar cualquier procesamiento adicional con la información del usuario
            // Por ejemplo, asignar valores a variables de sesión para utilizar en otras partes de la aplicación
        }
    }
}
?>
