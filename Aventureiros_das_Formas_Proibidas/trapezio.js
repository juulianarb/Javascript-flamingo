const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularAreaTrapezio(baseMaior, baseMenor, altura) {
    const area = ((baseMaior + baseMenor) * altura) / 2;
    return area;
}

rl.question('Insira a base maior:', (baseMaior) => {
baseMaior = parseFloat(baseMaior);

rl.question('Insira a base menor:', (baseMenor) => {
baseMenor = parseFloat(baseMenor);

rl.question('Insira a altura:', (altura) => {
altura = parseFloat(altura);

if (!isNaN(altura) && altura > 0 && !isNaN(baseMaior) && baseMaior > 0 && !isNaN(baseMenor) && baseMenor > 0) {
    const area = calcularAreaTrapezio(baseMaior, baseMenor, altura);
    console.log(`A área do trapézio é: ${area.toFixed(2)}`);
} else {
    console.log('Por favor, insira um valor válido maior do que zero.');
}

rl.close();
});
});
});