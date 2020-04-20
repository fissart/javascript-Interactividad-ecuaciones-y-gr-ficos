function limpiar() {
  document.getElementById("formulario");
}

function s1() {
  var x = parseInt(document.getElementById("x").value);
  var y = parseInt(document.getElementById("y").value);
  document.getElementById("result").innerHTML = x + y;
}

function s2() {
  var x = parseInt(document.getElementById("x").value);
  var y = parseInt(document.getElementById("y").value);
  document.getElementById("result").innerHTML = x * y;
}

function s3() {
  var x = parseInt(document.getElementById("x").value);
  var y = parseInt(document.getElementById("y").value);
  document.getElementById("result").innerHTML = x / y;
}

function s4() {
  var x = parseInt(document.getElementById("x").value);
  document.getElementById("result").innerHTML = Math.sqrt(x);
}

function s5() {
  var x = parseInt(document.getElementById("x").value);
  document.getElementById("result").innerHTML = Math.log(x);
}
