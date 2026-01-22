/*Exercício 5 — Sequência Controlada

Objetivo: Controle de fluxo + atenção.

Mostre os números de 1 a 30, mas:

Não mostre múltiplos de 4

Pare o loop quando chegar no número 23

Use for ou while, mas pense bem na ordem das condições.*/

for (let i = 1; i <= 30; i++) {
  if (i === 23) {
    break;
  }

  if (i % 4 === 0) {
    continue;
  }

  console.log(i);
}
