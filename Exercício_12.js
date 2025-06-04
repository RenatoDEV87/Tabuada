// Este programa exibe a tabuada de 1 a 10 de um número informado pelo usuário

// Importamos o prompt-sync para receber entrada do usuário
const prompt = require('prompt-sync')();

// Solicitamos o número ao usuário
let numero = parseInt(prompt("Digite um número para ver a tabuada: "));

// Exibimos a tabuada do número usando o loop for
console.log(`\nTabuada do ${numero}:`);
for (let i = 1; i <= 10; i++) {
  console.log(`${numero} x ${i} = ${numero * i}`);
}
