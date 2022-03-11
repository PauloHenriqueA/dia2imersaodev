function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);
  var valorEmReal = (valorEmDolarNumerico * 5);
  console.log(valorEmReal + " reais");
  
  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em real é R$ " + valorEmReal
  elementoValorConvertido.innerHTML = valorConvertido;
  var valorEmBitCoin = valorEmReal / 194.978;
  console.log(valorEmBitCoin);
}

function ConverterIene() {
  var valorElemento2 = document.getElementById("valor2");
  var valor2 = valorElemento2.value;
  var valorEmIeneNumerico = parseFloat(valor2);
  var valorEmReal2 = (valorEmIeneNumerico * 22);
  console.log(valorEmReal2 + " reais");
  
  var elementoValorConvertido2 = document.getElementById("valorConvertidoIene");
  var valorConvertido2 = "O resultado em real é R$ " + valorEmReal2
  elementoValorConvertido2.innerHTML = valorConvertido2;
}
