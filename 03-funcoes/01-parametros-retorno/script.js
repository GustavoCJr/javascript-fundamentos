/*
Crie a função soma(a, b) que retorna a soma. 
*/
function validarNum(num) {
  return typeof num === "number";
}

function soma(a, b) {
  if (validarNum(a) && validarNum(b)) {
    return a + b;
  }
  return "ERRO";
}

function media3(n1, n2, n3) {
  if (!validarNum(n1) || !validarNum(n2) || !validarNum(n3)) {
    return "ERRO";
  }

  const media = (n1 + n2 + n3) / 3;
  return media >= 7 ? "APROVADO" : "REPROVADO";
}

function maior(a, b) {
  if (a > b) {
    return a;
  } else if (b > a) {
    return b;
  }
  return "Iguais";
}
function calculaDesconto(preco, percentual) {
  if (preco > 0 && percentual > 0 && percentual < 100) {
    return preco - preco * (percentual / 100);
  }
  return "ERRO";
}

console.log("soma:", soma(2, 3));
console.log("soma erro:", soma("2", 3));
console.log("media3:", media3(7, 7, 7));
console.log("media3:", media3(5, 6, 7));
console.log("maior:", maior(10, 5));
console.log("maior:", maior(5, 10));
console.log("maior:", maior(5, 5));
console.log("desconto:", calculaDesconto(100, 10));
console.log("desconto erro:", calculaDesconto(-100, 10));
console.log("desconto erro:", calculaDesconto(100, 120));
