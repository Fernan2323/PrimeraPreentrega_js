do {
    var cal = prompt("Ingrese su calificacion");
  
    if (cal === null) {
      break;
    }
  
    cal = parseFloat(cal); 
  
    if (!isNaN(cal)){ 
      if (cal >= 0 && cal <= 10) {
        if (cal < 3) {
          alert("Recursar");
        } else if (cal < 5) {
          alert("Recupera");
        } else if (cal < 8) {
          alert("Suficiente, Aprueba");
        } else if (cal < 9) {
          alert("Sobresaliente, Aprueba");
        } else {
          alert("Excelente, Aprueba");
        }
      } else {
        alert("Error: Ingrese un calificacion dentro del rango 0-10");
      }
    } else {
      alert("Error: Ingrese un valor numerico válido");
    }
  } while (true);
  