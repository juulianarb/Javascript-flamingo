const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularAreaQuadrado(lado) {
  const area = Math.pow(lado, 2);
  return area;
}

rl.question('Insira o lado do quadrado: ', (lado) => {
  
  lado = parseFloat(lado);

if (!isNaN(lado) && lado > 0) {
            const area = calcularAreaQuadrado(lado);
            console.log(`A área do quadrado é: ${area.toFixed(2)}`);
        } else {
            console.log('Por favor, insira um valor válido maior do que zero.');
        }
  rl.close();
});