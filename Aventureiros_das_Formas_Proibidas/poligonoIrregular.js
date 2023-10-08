const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calculateTriangleArea(vertices) {
  const [x1, y1] = vertices[0];
  const [x2, y2] = vertices[1];
  const [x3, y3] = vertices[2];

  const area = Math.abs((x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2)) / 2);
  return area;
}

function getUserInput(prompt) {
  return new Promise(resolve => {
    rl.question(prompt, answer => {
      resolve(answer);
    });
  });
}

async function main() {
  const vertices = [];

  for (let i = 1; i <= 3; i++) {
    const x = await getUserInput(`Digite x-coordenada do vertice ${i}: `);
    const y = await getUserInput(`Digite y-coordenada do vertice ${i}: `);
    vertices.push([parseInt(x), parseInt(y)]);
  }

if (!isNaN(vertices) && vertices > 0) {
  const area = calculateTriangleArea(vertices);
  console.log(`A área do triângulo escaleno é ${area}`);
  rl.close();
} else {
    console.log('Por favor, insira um valor válido maior do que zero.');
}
}

main();
