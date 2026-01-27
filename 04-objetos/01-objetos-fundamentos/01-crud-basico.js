// Exercício 1 — CRUD de objeto
const perfil = {
  nome: "Gustavo",
  idade: 20,
  tecnologias: ["JavaScript", "Python", "HTML", "CSS"],
  disponivel: true,
};
console.log(perfil);
console.log(perfil.nome); //dote notation
console.log(perfil["tecnologias"]); // bracket notation
perfil.github = "https://github.com/GustavoCJr";
perfil.disponivel = false;
delete perfil.idade;
console.log(perfil);
