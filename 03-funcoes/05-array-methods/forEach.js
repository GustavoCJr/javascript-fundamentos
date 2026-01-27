/* 
Use forEach para:
imprimir cada número
calcular a soma total
imprimir a soma no final
*/
const numeros = [1, 2, 3];
let soma = 0;
numeros.forEach((num) => {
  soma += num;
  console.log(num);
});
console.log(`Soma total: ${soma}`);
