const a = { pontos: 10 };
const b = a;
b.pontos = 99;
console.log(a.pontos);

const a2 = { pontos: 10 };
const b2 = Object.assign({}, a2);
console.log(a2.pontos);
