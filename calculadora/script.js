
function alternarTema() {
  const sexo = document.getElementById('sexo').value;
  const body = document.body;

  if (sexo === 'feminino') {
    body.className = 'tema-feminino';
  } else {
    body.className = 'tema-masculino';
  }
}


function calcularIMC() {
  const sexo = document.getElementById('sexo').value;
  const pesoInput = document.getElementById('peso').value;
  const alturaInput = document.getElementById('altura').value;
  const resultadoDiv = document.getElementById('resultado');

  
  const pesoFormatado = pesoInput.replace(',', '.').trim();
  const alturaFormatada = alturaInput.replace(',', '.').trim();

  const peso = parseFloat(pesoFormatado);
  const altura = parseFloat(alturaFormatada);

  
  if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
    resultadoDiv.className = 'erro';
    resultadoDiv.style.display = 'block';
    resultadoDiv.innerHTML = 'Por favor, digite valores válidos para peso e altura.';
    return;
  }

 
  const imc = peso / (altura * altura);

  /
  let classificacao = '';

  if (imc < 18.5) {
    classificacao = 'Magreza';
  } else if (imc >= 18.5 && imc <= 24.9) {
    classificacao = 'Peso normal (adequado)';
  } else if (imc >= 25.0 && imc <= 29.9) {
    classificacao = 'Sobrepeso';
  } else if (imc >= 30.0 && imc <= 39.9) {
    classificacao = 'Obesidade';
  } else {
    classificacao = 'Obesidade grave';
  }

  const genero = sexo === 'masculino' ? 'Homem' : 'Mulher';

  
  resultadoDiv.className = 'sucesso';
  resultadoDiv.style.display = 'block';
  resultadoDiv.innerHTML = `
    <p><strong>Perfil:</strong> ${genero}</p>
    <p><strong>Seu IMC:</strong> ${imc.toFixed(2)}</p>
    <p><strong>Classificação:</strong> ${classificacao}</p>
  `;
}
