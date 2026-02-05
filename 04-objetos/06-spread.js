//Exercício 6 — Merge de objetos (spread)

const defaults = { theme: "dark", language: "pt-br", debug: false };
const overrides = { debug: true, language: "en-US" };
function configFinal(original, nova) {
  return {
    ...original,
    ...nova,
  };
}
console.log(configFinal(defaults, overrides));
