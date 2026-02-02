//Exercício 12 — Função construtora com o uso de prototype
//Melhor desempenho

function Conta(nome) {
  this.nome = nome;
  this.saldo = 0;
}
Conta.prototype.depositar = function (valor) {
  this.saldo += valor;
};

Conta.prototype.sacar = function (valor) {
  if (valor > this.saldo) return "Saldo insuficiente";
  this.saldo -= valor;
};

Conta.prototype.verSaldo = function () {
  return this.saldo;
};
const contaA = new Conta("Gustavo");
const contaB = new Conta("Ana");

contaA.depositar(100);
contaB.depositar(50);

console.log(contaA.verSaldo()); // 100
console.log(contaB.verSaldo()); // 50
