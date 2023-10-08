const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularTriangulo(base, altura) {
  const area = (base * altura) / 2;
  return area;
}

rl.question('Digite a base do triângulo: ', (base) => {
  base = parseFloat(base);

  rl.question('Digite a altura do triângulo: ', (altura) => {

    altura = parseFloat(altura);

    if (!isNaN(altura) && altura > 0 && !isNaN(base) && base > 0) {
      const area = calcularTriangulo(base, altura);
      console.log(`A área do Triângulo é: ${area.toFixed(2)}`);
    } else {
      console.log('Por favor, insira um valor válido maior do que zero.');
    }

    rl.close();
  });
});