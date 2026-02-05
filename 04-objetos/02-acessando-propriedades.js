// Exercício 2 — Acessando propriedades dinamicamente
const produto = {
  nome: "banana",
  preco: 2.4,
  estoque: true,
};
function getProp(obj, prop) {
  if (prop in obj) {
    return obj[prop];
  }
  return "Propriedade não existente";
}
console.log(getProp(produto, "peso"));
console.log(getProp(produto, "nome"));
