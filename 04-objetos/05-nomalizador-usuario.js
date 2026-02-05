//Exercício 5 — Normalizador de usuário (objetos aninhados)
const usuario = {
  nome: "GUSTAVO",
  endereco: {
    cidade: "São Paulo",
    uf: "SP",
  },
  skills: ["JavaScript", "Python", "Java", "C"],
};

function normalizarUsuario(usuario) {
  return {
    nome: usuario.nome.toUpperCase(),
    cidade:
      usuario.endereco.cidade[0].toUpperCase() +
      usuario.endereco.cidade.slice(1),
    uf: usuario.endereco.uf.toUpperCase(),
    totalSkills: usuario.skills.length,
  };
}

const resultado = normalizarUsuario(usuario);
console.log(resultado);
