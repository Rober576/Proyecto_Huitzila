document.addEventListener('DOMContentLoaded', (event) => {
    event.preventDefault();
    console.log("Verificar_Permiso_Calidad.js");
    document.body.style.display = "none";
    let formulario_data = new FormData();
    formulario_data.append("acceso_a", "2");
    fetch("../../controller/login/Verificar_Sesion.php",
        {
            method: "POST",
            body: formulario_data
        })
        .then(response => response.json())
        .then(respuesta => {
        
            if (respuesta[0] == 0) {
                window.location.href = '../../controller/login/Logout.php';
            }else{
                document.body.style.display = "block";
            }

        }).catch((error) => {
            console.error('Error:', error);
        });
});
