const numeros = [1, 2, 3, 4];
const quadrados = numeros.map((n) => n ** 2);
console.log(numeros);
console.log(quadrados);

// exemplo de extrair propriedades
const usuarios = [
  { nome: "Ana", idade: 25 },
  { nome: "Bia", idade: 30 },
];
const nomes = usuarios.map((usuario) => usuario.nome);
