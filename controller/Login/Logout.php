<?php
    session_start();
    session_destroy();
    setcookie("token","",time()-1,"/");

    header("Location: ../../view/Login.html");


?>