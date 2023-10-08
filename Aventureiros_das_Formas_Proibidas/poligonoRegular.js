const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularAreaPoligono(n, lado) {
    const area = (lado * lado * n) / (4 * Math.tan(Math.PI / n));
    return area;
}

rl.question('Informe o número de lados do polígono regular: ', (n) => {
    const numero_de_lados = parseInt(n);

    rl.question('Informe o comprimento do lado do polígono regular: ', (lado) => {
        const comprimento_do_lado = parseFloat(lado);

        if (!isNaN(numero_de_lados) && numero_de_lados > 0 && !isNaN(comprimento_do_lado) && comprimento_do_lado > 0) {
            const area = calcularAreaPoligono(numero_de_lados, comprimento_do_lado);
            console.log(`A área do polígono regular é: ${area.toFixed(2)}`);
        } else {
            console.log('Por favor, insira um valor válido maior do que zero.');
        }

        rl.close();
    });
});
