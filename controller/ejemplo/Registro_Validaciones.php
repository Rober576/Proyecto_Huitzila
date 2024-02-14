<?php
class RegistroValidaciones{

    function revision($cadena){
        for($i = 0; $i < strlen($cadena); $i++){
            $bandera = true;

            //revisa si hay caracteres no válidos
            if((ord($cadena[$i]) <= 47 or ord($cadena[$i]) >= 58) and (ord($cadena[$i]) <= 64 or ord($cadena[$i]) >= 91) and (ord($cadena[$i]) <= 96 or ord($cadena[$i]) >= 123)){
                $bandera = false;
            }
        }

        return $bandera;
    }

    function registro(){
        $cadena = $_POST['campo1'];

        if($this->revision($cadena) == true){
            echo json_encode("exito");
        }

        else{
            echo json_encode("errores");
        }
    }
}

$obj = new RegistroValidaciones();
$obj->registro();

?>