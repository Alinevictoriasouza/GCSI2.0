converterDolar = () => {
  const dolar = document.getElementById('dolar').value;
  const resultado = dolar*5.09;
  document.getElementById('resultado').innerHTML =resultado
}

converterEuro = () => {
  const euro = document.getElementById('euro').value;
  const resultados = euro*5.19;
  document.getElementById('resultados').innerHTML =resultados
}