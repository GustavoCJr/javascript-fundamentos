//Em JavaScript, funções podem ser passadas como argumento e executadas dentro de outra função, caracterizando um callback.

let valor = 10;
function processar(valor, sucesso, erro) {
  if (typeof valor == "number") {
    return sucesso();
  }
  return erro();
}
function sucesso() {
  return "SUCESSO";
}
function erro() {
  return "ERRO";
}
console.log(processar(valor, sucesso, erro));
