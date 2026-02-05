// Exercício 3 — Contador de chaves e filtro

/**
 * Object.keys(obj): Retorna um array com os nomes das propriedades enumeráveis (chaves) do objeto.
 * Object.values(obj): Retorna um array com os valores das propriedades enumeráveis do objeto.
 * Object.entries(obj): Retorna um array de pares [chave, valor], permitindo fácil iteração e manipulação, como em Object.entries(obj).
 */
const dados = {
  id: 10,
  nome: "Teclado",
  marca: "X",
  preco: 120,
  ativo: true,
  categoria: "periféricos",
};
function resume(dados) {
  const numChaves = Object.keys(dados).length;
  const chaves = Object.entries(dados)
    .filter(([chave, valor]) => typeof valor === "string")
    .map(([chave, valor]) => chave);
  const somaValores = Object.entries(dados)
    .filter(([chave, valor]) => typeof valor === "number")
    .reduce((total, [chave, valor]) => total + valor, 0);
  return {
    totalChaves: numChaves,
    chavesString: chaves,
    somaNumbers: somaValores,
  };
}
novoObjeto = resume(dados);
console.log(novoObjeto);
