    // Agrega un listener a cada enlace de registrar para cambiar el src del iframe
    for (let i = 1; i <= 5; i++) {
        document.getElementById(`registrar${i}`).addEventListener('click', function() {
          document.getElementById('frame').src = `view/ejemplo/formulario${i}.html`;
        })
        document.getElementById(`mostrar${i}`).addEventListener('click', function() {
          document.getElementById('frame').src = `view/ejemplo/tabla${i}.html`;
        });
      }