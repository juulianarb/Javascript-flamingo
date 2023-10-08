const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularRetangulo(altura, largura) {
    const area = altura * largura;
    return area;
}

rl.question('Informe a largura do retângulo: ', (largura) => {
    largura = parseFloat(largura);


    rl.question('Informe a altura do retângulo: ', (altura) => {

        altura = parseFloat(altura);

        if (!isNaN(altura) && altura > 0 && !isNaN(largura) && largura > 0) {
            const area = calcularRetangulo(altura, largura);
            console.log(`A área do Retângulo é: ${area.toFixed(2)}`);
        } else {
            console.log('Por favor, insira um valor válido maior do que zero.');
        }

        rl.close();
    });
});