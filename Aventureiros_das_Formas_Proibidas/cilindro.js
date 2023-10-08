const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularAreaSuperficie(raio, altura) {
    const areaSuperficie = 2 * Math.PI * raio * (raio + altura);
    return areaSuperficie;
}

rl.question('Digite o raio da base do cilindro:', (raio) => {
    raio = parseFloat(raio);

    rl.question('Digite a altura do cilindro:', (altura) => {
        altura = parseFloat(altura);

        if (!isNaN(altura) && altura > 0 && !isNaN(raio) && raio > 0) {
            const areaSuperficie = calcularAreaSuperficie(raio, altura);
            console.log(`A área da superfície do cilindro é ${areaSuperficie.toFixed(2)}`);
        } else {
            console.log('Por favor, insira um valor válido maior do que zero.');
        }
        rl.close();
    });
});