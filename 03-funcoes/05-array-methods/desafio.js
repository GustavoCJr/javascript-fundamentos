/*
[1, 2, 3, 4, 5, 6]
pegar só os pares
triplicar
somar tudo
*/
const numeros = [1, 2, 3, 4, 5, 6];
const pares = numeros.filter((num) => num % 2 === 0);
const triplos = pares.map((num) => num * 3);
const soma = triplos.reduce((somatorio, num) => somatorio + num, 0);
console.log(soma);

//versão encadeada
const soma2 = [1, 2, 3, 4, 5, 6]
  .filter((n) => n % 2 === 0)
  .map((n) => n * 3)
  .reduce((total, n) => total + n, 0);

console.log(soma);
