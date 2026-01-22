let a = 10;
let b = 5;
let c = 8;

let maior;
let menor;

if (a > b && a > c) {
  maior = a;
} else if (b > a && b > c) {
  maior = b;
} else {
  maior = c;
}

if (a < b && a < c) {
  menor = a;
} else if (b < a && b < c) {
  menor = b;
} else {
  menor = c;
}

console.log("Maior:", maior);
console.log("Menor:", menor);
