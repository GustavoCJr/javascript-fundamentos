//Exercício 11 — Função construtora

function Conta(nome) {
  this.nome = nome;
  this.saldo = 0;
  this.depositar = (valor) => (this.saldo += valor);
  this.sacar = (valor) =>
    this.saldo < valor ? "Saldo insuficiente" : (this.saldo -= valor);
  this.verSaldo = () => this.saldo;
}

const contaA = new Conta("Gustavo");
const contaB = new Conta("Ana");

contaA.depositar(100);
contaB.depositar(50);

console.log(contaA.verSaldo());
console.log(contaB.verSaldo());
