<?php

require_once("../../../config/Crud_bd.php");

class Autentica {
    private $crud_bd;

    public function __construct() {
        $this->crud_bd = new Crud_bd();
    }

    public function autenticar_user($correo, $password) {
        $consulta = "SELECT * FROM usuarios WHERE Correo = :correo AND password = :password";
        $parametros = array(':correo' => $correo, ':password' => $password);

        $usuario_autenticado = $this->crud_bd->mostrar($consulta, $parametros);

        // Verificar si se encontró un usuario con las credenciales proporcionadas
        if (!empty($usuario_autenticado)) {
            // Llamar a la función para obtener información adicional del usuario (tipo y área)
            $this->obtener_informacion_usuario($correo);
            return true; // Usuario autenticado correctamente

        } else {
            return false; // Credenciales incorrectas
        }
    }

    public function obtener_Area($correo) {
        $consulta = "SELECT IdentificadorTipo,IdentficadorArea FROM usuarios WHERE Correo = :correo AND 
        tipoareas.IdentificadorArea = usuarios.IdentificadorArea AND tipousuario.IdentificadorTipo = usuarios.IdentificadorTipo";
        $parametros = array(':correo' => $correo);

        $area = $this->crud_bd->mostrar($consulta, $parametros);

        return $area;
    }

    
    public function obtener_informacion_usuario($correo) {
        // Realiza las consultas para obtener información adicional del usuario (tipo y área)
        $consulta = "SELECT IdentidicadorArea, IdentidicadorTipo FROM usuarios WHERE Correo = :correo";
        $parametros = array(':correo' => $correo);

        $informacion_usuario = $this->crud_bd->mostrar($consulta, $parametros);

        // Procesar la información obtenida
        if (!empty($informacion_usuario)) {
         
            // Aquí puede realizar cualquier procesamiento adicional con la información del usuario
            
        }
    }
}
?>
