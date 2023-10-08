const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Informe o número de lados da base: ', (numLados) => {
    const baseLados = parseInt(numLados);

    rl.question('Informe o comprimento do lado da base: ', (comprimentoLado) => {
        const baseComprimento = parseFloat(comprimentoLado);

        rl.question('Informe a altura da base: ', (alturaBase) => {
            const baseAltura = parseFloat(alturaBase);

            rl.question('Informe a altura do prisma: ', (alturaPrisma) => {
                const prismaAltura = parseFloat(alturaPrisma);

                const areaBase = (baseLados * Math.pow(baseComprimento, 2)) / (4 * Math.tan(Math.PI / baseLados));
                const areaLateral = (baseLados * baseComprimento * prismaAltura);
                const areaTotal = areaBase + areaLateral;

                if (!isNaN(numLados) && numLados > 0 && !isNaN(comprimentoLado) && comprimentoLado > 0 && !isNaN(alturaBase) && alturaBase > 0 && !isNaN(alturaPrisma) && alturaPrisma > 0) {
                    console.log('A área total do prisma é:', areaTotal);
                } else {
                    console.log('Por favor, insira um valor válido maior do que zero.');
                }
                rl.close();
            });
        });
    });
});
