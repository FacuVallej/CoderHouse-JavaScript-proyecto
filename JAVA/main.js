function limpiar() {
    document.getElementById('formulario').reset();
  }
  

  function dolar() {
  var x = parseInt(document.getElementById('valor1').value);
  var y = Number(325,74);
  var suma = (x*y);
  document.getElementById('el-resultado').innerHTML = suma;
  }

  function euro() {
    var x = parseInt(document.getElementById('valor1').value);
    var y = Number(349,09);
    var suma = (x*y);
    document.getElementById('el-resultado').innerHTML = suma;
    }

    function real() {
        var x = parseInt(document.getElementById('valor1').value);
        var y = Number(38);
        var suma = (x*y);
        document.getElementById('el-resultado').innerHTML = suma;
    }