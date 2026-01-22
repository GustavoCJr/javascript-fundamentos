/* Exercício 3 — Soma Condicional

Objetivo: Lógica com acumulador.

Some todos os números de 1 a 100 que:

Sejam pares

E divisíveis por 5

No final, mostre apenas o valor da soma.
*/
let soma = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 2 == 0 && i % 5 == 0) {
    soma += i;
  }
}
console.log(soma);
