//Exercício 13 — Função construtora com o uso de class
//Melhor desempenho

class Conta {
  constructor(nome) {
    this.nome = nome;
    this.saldo = 0;
  }

  depositar(valor) {
    this.saldo += valor;
  }

  sacar(valor) {
    if (valor > this.saldo) return "Saldo insuficiente";
    this.saldo -= valor;
  }

  verSaldo() {
    return this.saldo;
  }
}
const contaA = new Conta("Gustavo");
const contaB = new Conta("Ana");

contaA.depositar(100);
contaB.depositar(50);

console.log(contaA.verSaldo()); // 100
console.log(contaB.verSaldo()); // 50
