<?php
include_once '../../config/Crud_bd.php';

class Login_Model {
    private $crud_bd;

    public function __construct() {
        $this->crud_bd = new Crud_bd();
        $this->crud_bd->conexion_bd();
    }

    public function buscar_usuario($email, $password) {
        
        $consulta = "SELECT * FROM usuarios WHERE Correo = :email";
        $parametros = array(':email' => $email);
        $usuarios = $this->crud_bd->mostrar($consulta, $parametros);
    
        if (!empty($usuarios)) {
            $hash_guardado = $usuarios[0]['Password'];
    
            
            if (password_verify($password, $hash_guardado)) {
                
                return $usuarios[0];
            } else {
               
                return null;
            }
        } else {
           
            return null;
        }
    }
    

    public function buscarArea($clave){
        $querry = "SELECT tipousuario.Tipo as tipoU, tipoareas.NombreArea as area FROM usuarios, tipousuario, tipoareas
        WHERE usuarios.correo = :clave AND tipousuario.IdentificadorTipo = usuarios.IdentificadorTipo AND 
        tipoareas.IdentificadorArea = usuarios.IdentificadorArea";

        $arre = [":clave" => $clave];
        $resultados = $this->crud_bd->mostrar($querry, $arre);
        return $resultados;
    }
}
?>
