document.getElementById("selePlaga").addEventListener("change", function() {
    var seleccion = this.value;
    
    if (seleccion === "agregar") {
      var confirmar = confirm("¿Estás seguro de agregar un nuevo tipo de plaga?");
      
      if (confirmar) {
        window.location.href = "../Plagas_y_herbicidas/Registro_Plagas.html"; 
      } else {
        this.selectedIndex = 0; 
      }
    }
  });