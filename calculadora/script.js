// Função para mudar as cores da página de acordo com a opção selecionada no select "sexo"
function alternarTema() {
  const sexo = document.getElementById('sexo').value;
  const body = document.body;

  if (sexo === 'feminino') {
    body.className = 'tema-feminino';
  } else {
    body.className = 'tema-masculino';
  }
}

// Função para fazer o cálculo do IMC
function calcularIMC() {
  const sexo = document.getElementById('sexo').value;
  const pesoInput = document.getElementById('peso').value;
  const alturaInput = document.getElementById('altura').value;
  const resultadoDiv = document.getElementById('resultado');

  // Substitui vírgula por ponto
  const pesoFormatado = pesoInput.replace(',', '.').trim();
  const alturaFormatada = alturaInput.replace(',', '.').trim();

  const peso = parseFloat(pesoFormatado);
  const altura = parseFloat(alturaFormatada);

  // Validação dos dados digitados
  if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
    resultadoDiv.className = 'erro';
    resultadoDiv.style.display = 'block';
    resultadoDiv.innerHTML = 'Por favor, digite valores válidos para peso e altura.';
    return;
  }

  // Cálculo: IMC = peso ÷ (altura × altura)
  const imc = peso / (altura * altura);

  // Tabela de Classificação
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

  // Exibição do resultado
  resultadoDiv.className = 'sucesso';
  resultadoDiv.style.display = 'block';
  resultadoDiv.innerHTML = `
    <p><strong>Perfil:</strong> ${genero}</p>
    <p><strong>Seu IMC:</strong> ${imc.toFixed(2)}</p>
    <p><strong>Classificação:</strong> ${classificacao}</p>
  `;
}