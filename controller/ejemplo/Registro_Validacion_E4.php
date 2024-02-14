<?php
class RegistroValidaciones{

    function revision1($cadena1){
        $bandera = false;
        if (ctype_digit($cadena1)) {
            $bandera = true;

            if(strlen($cadena1) == 10) 
            {
                $bandera = true;  
            }    
            else {
                $bandera = false;
            }
        }
        return $bandera;

    }

    function revision2($cadena1){
        $bandera = false;
        if (ctype_digit($cadena1)) {
            $bandera = true;

            if(strlen($cadena1) == 5) 
            {
                $bandera = true;  
            }    
            else {
                $bandera = false;
            }
        }
        return $bandera;
    }
    function revision3($cadena){
        $bandera = false;
        if (!empty($cadena) && preg_match('/^[a-zA-Z0-9.\s#]*$/', $cadena)) {
            $bandera = true;  
            }  
        else {
            $bandera = false;
        }
        return $bandera;
    }
    function revision4($cadena){
        $bandera = false;
        if (!empty($cadena) && preg_match('/^[a-zA-Z ]{1,20}$/', $cadena)) {
            $bandera = true;  
            }  
        else {
            $bandera = false;
        }

        return $bandera;
    }
    function revision5($cadena){
        $bandera = false;
        if ($cadena === "" || !preg_match('/[@~;]/', $cadena)) {
            $bandera = true;  
            }  
        else {
            $bandera = false;
        }
        return $bandera;
    }

    function registro(){
        $cadena1 = $_POST['campo1'];
        $cadena2 = $_POST['campo2'];
        $cadena3 = $_POST['campo3'];
        $cadena4 = $_POST['campo4'];
        $cadena5 = $_POST['campo5'];

        if (!empty($cadena1) && !empty($cadena2) && !empty($cadena3) && !empty($cadena4) && !empty($cadena5)) {
        if($this->revision1($cadena1) == true){
            if($this->revision2($cadena2) == true){
                if($this->revision3($cadena3) == true){
                    if($this->revision4($cadena4) == true){
                        if($this->revision5($cadena5) == true){
                            echo json_encode("exito");
                        }
                        else{
                            echo json_encode("errores");
                        }
                    }
                    else{
                        echo json_encode("errores");
                    }
                }
                else{
                    echo json_encode("errores");
                }

            }
            else{
                echo json_encode("errores");
            }
        }
        
        else{
            echo json_encode("errores");
        }
    }
    else{
        echo json_encode("errores");
    }



}
}

$obj = new RegistroValidaciones();
$obj->registro();
?>