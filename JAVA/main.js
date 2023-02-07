function limpiar() {
    document.getElementById('formulario').reset();
  }

          //DOLAR - EURO - REAL//
let precios = [325.74,349.09,38];


  function dolar() {
  var x = parseInt(document.getElementById('valor1').value);
  var suma = (x*precios[0]);
  document.getElementById('el-resultado').innerHTML = suma;
  }

  function euro() {
    var x = parseInt(document.getElementById('valor1').value);
    var suma = (x*precios[1]);
    document.getElementById('el-resultado').innerHTML = suma;
    }

    function real() {
        var x = parseInt(document.getElementById('valor1').value);
        var suma = (x*precios[2]);
        document.getElementById('el-resultado').innerHTML = suma;
    }