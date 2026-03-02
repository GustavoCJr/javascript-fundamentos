function contarFrequencia(texto) {
  const dicionarioFrequencia = {};

  for (let i of texto) {
    if (dicionarioFrequencia[i]) {
      dicionarioFrequencia[i]++;
    } else {
      dicionarioFrequencia[i] = 1;
    }
  }
  return dicionarioFrequencia;
}

resp = contarFrequencia("banana");
console.log(resp);
