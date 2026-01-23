/* 
   Sintaxe: function vs arrow
*/

// função tradicional
function somaFn(a, b) {
  return a + b;
}

// arrow function
const somaArrow = (a, b) => a + b;

// return implícito
const dobro = (n) => n * 2;

// múltiplos parâmetros
const somaArrowCurta = (a, b) => a + b;

/* 
   Hoisting
*/

// function sofre hoisting
function hoistingOk() {
  return "function ok";
}

// arrow em const não sofre hoisting
// naoRolaHoisting();
// const naoRolaHoisting = () => {};

/* 
   Exercícios de reescrita
*/

// function original
function maiorFn(a, b) {
  if (a > b) return a;
  if (b > a) return b;
  return "IGUAIS";
}

// versão arrow
const maiorArrow = (a, b) => (a > b ? a : a < b ? b : "IGUAIS");

// exercício: triplo
const triplo = (n) => n * 3;

/* 
   Arrow com callback
*/

function executar(fn) {
  return fn(10);
}

executar((valor) => valor);
executar((valor) => valor * 2);

/*
   this: function vs arrow
*/

// this em métodos
const pessoa = {
  nome: "Ana",

  // this dinâmico
  falarFn: function () {
    return this.nome;
  },

  // this léxico
  falarArrow: () => {
    return this && this.nome;
  },
};

/*
   this em callbacks
*/

const timerDemo = {
  segundos: 0,

  // perde o this
  iniciarComFunction: function () {
    setTimeout(function () {
      console.log(this);
    }, 0);
  },

  // mantém o this
  iniciarComArrow: function () {
    setTimeout(() => {
      this.segundos += 1;
    }, 0);
  },
};
