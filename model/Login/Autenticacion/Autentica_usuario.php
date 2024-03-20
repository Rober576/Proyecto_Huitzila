

<?php
include_once '../../config/Crud_bd.php';

class Login_Model {
    private $crud_bd;

    public function __construct() {
        $this->crud_bd = new Crud_bd();
        $this->crud_bd->conexion_bd();
    }

    public function buscar_usuario($email, $password) {
        // Método para encripar la contraseña para que coincida con la almacenada
        $pass_hashed = password_hash($password, PASSWORD_BCRYPT);
        //echo $pass_hashed;

        $consulta = "SELECT * FROM usuarios WHERE Correo = :email AND Password = :password";
        $parametros = array(':email' => $email, ':password' => $pass_hashed);
        
        $usuarios = $this->crud_bd->mostrar($consulta, $parametros);

        if (!empty($usuarios)) {
            echo "<script>Console.log('El usuario fue encontrado')</script>";
            return $usuarios[0];
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
