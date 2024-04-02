document.getElementById("tipPlanta").addEventListener("change", function() {
    var seleccion = this.value;
    
    if (seleccion === "agregar") {
      var confirmar = confirm("¿Estás seguro de agregar un nuevo tipo de planta?");
      
      if (confirmar) {
        window.location.href = "Registro_Plantas.html"; 
      } else {
        this.selectedIndex = 0; 
      }
    }
  });