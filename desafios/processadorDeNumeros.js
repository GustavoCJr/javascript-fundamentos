/**
 * MINI-PROJETO — Processador de Números
 * Objetivo: consolidar forEach, map, filter, reduce, callbacks e arrow functions.
 */
function somar(array) {
  return array.reduce((soma, num) => soma + num, 0);
}
function filtrarPares(array) {
  return array.filter((num) => num % 2 === 0);
}
function triplicar(array) {
  return array.map((num) => num * 3);
}
function processar(array, fn) {
  return fn(array);
}
const numeros = [1, 2, 3, 4, 5, 6];
const resultado = somar(triplicar(filtrarPares(numeros)));
console.log(resultado);

//callback

const resultadoNum2 = processar(numeros, filtrarPares);
console.log(resultadoNum2);
