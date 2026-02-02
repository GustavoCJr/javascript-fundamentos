//Exercício 10 — Conta bancária com Factory Function

function criarConta(nome) {
  return {
    nome,
    saldo: 0,

    depositar(valor) {
      this.saldo += valor;
    },

    sacar(valor) {
      if (valor > this.saldo) return "Saldo insuficiente";
      this.saldo -= valor;
    },

    verSaldo() {
      return this.saldo;
    },
  };
}

const contaA = criarConta("Gustavo");
const contaB = criarConta("Ana");

contaA.depositar(100);
contaB.depositar(50);

console.log(contaA.verSaldo());
console.log(contaB.verSaldo());
console.log(contaA);
