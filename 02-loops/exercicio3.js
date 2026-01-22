/*
Exercício 3 — Contador Inteligente

Objetivo: Pensar em laço + condição.

Mostre no console:

Os números de 1 a 50

Para números múltiplos de 3, mostre "Fizz"

Para múltiplos de 5, mostre "Buzz"

Para múltiplos de 3 e 5, mostre "FizzBuzz" 
*/

for (let i = 1; i <= 50; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
  } else if (i % 3 == 0) {
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  }
}
