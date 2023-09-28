function somar(){
  var valor1 = parseInet(document.gatElementById("num1").value, 10);
    var valor2 = parseInet(document.gatElementById("num2").value, 10);
  document.gatElementById("resultado").value = valor1 + valor2;
}
