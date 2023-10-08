// Importe o módulo 'readline' para lidar com a entrada do usuário
const readline = require('readline');

// Crie uma interface de leitura e escrita
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para calcular a área do círculo
function calcularAreaEsfera(raio) {
    const area = Math.PI * Math.pow(raio, 2);
    return area;
}

// Pergunte ao usuário pelo raio do círculo
rl.question('Informe o raio da esfera: ', (raio) => {
    // Converter a entrada do usuário para um número
    raio = parseFloat(raio);

    // Verificar se a entrada é válida 
    if (!isNaN(raio) && raio > 0) {
        const area = calcularAreaEsfera(raio);
        console.log(`A área da esfera com raio ${raio} é: ${area.toFixed(2)}`);
    } else {
        console.log('Por favor, insira um raio válido maior do que zero.');
    }

    // Fechar a interface de leitura
    rl.close();
});

