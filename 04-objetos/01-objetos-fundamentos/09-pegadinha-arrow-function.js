//Exercício 9 — Arrow function e this (pegadinha)
const conta = {
  saldo: 0,
  depositar(valor) {
    return (this.saldo += valor);
  },
  sacar(valor) {
    if (valor > this.saldo) {
      return "Saldo insuficiente";
    }
    return (this.saldo -= valor);
  },
  verSaldo: () => this.saldo,
};
conta.depositar(100);
conta.sacar(30);
console.log(conta.verSaldo());
console.log(conta.sacar(1000));

//Arrow function não possuem seu próprio this
