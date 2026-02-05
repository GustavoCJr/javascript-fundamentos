// Exercício 4 — Transformação com Object.entries

const notas = { ana: 8, bruno: 6, carla: 9, diego: 5 };
const aprovados = Object.entries(notas)
  .filter(([chave, valor]) => valor >= 7)
  .map(([chave, valor]) => chave);
const curva = Object.fromEntries(
  Object.entries(notas).map(([chave, valor]) => {
    const novaNota = valor < 10 ? valor + 1 : valor;
    return [chave, novaNota];
  }),
);
console.log(curva);
