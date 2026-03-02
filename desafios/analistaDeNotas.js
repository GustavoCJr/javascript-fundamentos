function analisar(notas) {
  const soma = notas.reduce((soma, n) => soma + n, 0);
  const media = soma / notas.length;
  const maiorNota = Math.max(...notas);
  return {
    maiorNota,
    media,
    notasAprovadas: notas.filter((nota) => nota >= media),
  };
}
const notas = analisar([10, 7, 1, 5, 6]);
console.log(notas);
