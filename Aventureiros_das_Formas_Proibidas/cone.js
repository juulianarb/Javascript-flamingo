const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularAreaSuperficie(raio, altura) {
    const lado = Math.sqrt(raio * raio + altura * altura);
    const area = Math.PI * raio * (raio + lado);
    return area;
}

rl.question('Insira o raio da base do cone: ', (raio) => {
    raio = parseFloat(raio);

    rl.question('Insira a altura do cone: ', (altura) => {
        altura = parseFloat(altura);

        if (isNaN(raio) || isNaN(altura) || raio <= 0 || altura <= 0) {
            console.log('Entradas inválidas. Certifique-se de inserir valores numéricos positivos para o raio e a altura.');
        } else {
            // Calcular a área da superfície do cone
            const areaSuperficie = calcularAreaSuperficie(raio, altura);
            console.log(`A área da superfície do cone é: ${areaSuperficie.toFixed(2)}`);
        }

        rl.close();
    });
});