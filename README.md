# Crie um programa que exibe a tabuada de um número fornecidopelousuário (de 1 a 10) utilizando um loop for.

Exercício 12: Tabuada de um Número (1 a 10)

---

## 📑 Índice

1. [📖 Descrição](#descrição)  
2. [💻 Código](#código)  
3. [🚀 Como Executar](#como-executar)   
4. [🛠️ Tecnologias Utilizadas](#tecnologias-utilizadas)  
5. [📜 Licença](#licença)  

---

## Descrição

Este projeto contém um programa em JavaScript que exibe a tabuada (de 1 a 10) de um número fornecido pelo usuário. Ele utiliza um laço `for` para realizar as multiplicações e mostrar os resultados no console.

---

## Código

Abaixo está o código-fonte do programa:

```JavaScript
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

```

---

## Como Executar

🛠️ Instruções para executar localmente

1. Instale o Node.js se ainda não tiver: https://nodejs.org

2. Abra o terminal e instale o prompt-sync (usado para entrada do usuário):

```
npm install prompt-sync
```

3. Salve o arquivo como `exercício_12.js` e execute com:

```
node exercício_12.js
```

---

## Tecnologias Utilizadas

- Linguagem: JavaScript
- Node.Js

---

## Licença

Este projeto está licenciado sob a MIT License.
