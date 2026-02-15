function criarAgenda(dono) {
  return {
    nomeDono: dono,
    contatos: [],
    _seq: 1,

    criarContato(dados) {
      const result = validarDados(dados);
      if (!result.errosValidados) {
        result.mensagens.forEach((msg) => console.log(msg));
        return;
      }

      const tagsValidas = dados.tags.map((t) => t.toLowerCase());
      const contato = {
        id: "c" + this._seq++,
        ...dados,
        tags: tagsValidas,
        favorito: false,
        criadoEm: pegarData(),
        atualizadoEm: pegarData(),
      };
      this.contatos.push(contato);
      return contato;
    },

    editarContato(id, patch) {
      const index = this.procurarIndex(id);
      if (index !== -1) {
        this.contatos[index] = {
          ...this.contatos[index],
          ...patch,
          atualizadoEm: pegarData(),
        };
        return this.contatos[index];
      }
      return "Contato não encontrado";
    },

    toggleFavorito(id) {
      const index = this.procurarIndex(id);
      if (index !== -1) {
        this.contatos[index].favorito = !this.contatos[index].favorito;
        return this.contatos[index].favorito;
      }
      return "Contato não encontrado";
    },

    removerContato(id) {
      const index = this.procurarIndex(id);
      if (index !== -1) {
        this.contatos.splice(index, 1);
        return true;
      }
      return false;
    },

    listar() {
      return structuredClone(this.contatos);
    },

    buscar(texto) {
      const termo = texto.toLowerCase();
      return this.contatos.filter(
        (c) =>
          c.nome.toLowerCase().includes(termo) ||
          c.email.toLowerCase().includes(termo),
      );
    },

    filtrar(filtros) {
      return this.contatos.filter((c) => {
        if (filtros.favorito !== undefined && c.favorito !== filtros.favorito)
          return false;
        if (filtros.tag && !c.tags.includes(filtros.tag.toLowerCase()))
          return false;
        return true;
      });
    },

    estatisticas() {
      return this.contatos.reduce(
        (contador, c) => {
          contador.total++;
          if (c.favorito) contador.favoritos++;
          return contador;
        },
        { total: 0, favoritos: 0 },
      );
    },

    exportar() {
      return JSON.stringify({
        dono: this.nomeDono,
        contatos: this.contatos,
        proximoId: this._seq,
      });
    },

    importar(json) {
      const dados = JSON.parse(json);
      this.contatos = dados.contatos;
      this._seq = dados.proximoId;
    },

    procurarIndex(id) {
      return this.contatos.findIndex((c) => c.id === id);
    },
  };
}

function validarDados(dados) {
  const erros = [];
  if (!dados.nome) erros.push("Nome obrigatório");
  if (!dados.telefone) erros.push("Telefone obrigatório");

  if (
    dados.tags &&
    new Set(dados.tags.map((t) => t.toLowerCase())).size !== dados.tags.length
  ) {
    erros.push("Há tags duplicadas");
  }

  return {
    errosValidados: erros.length === 0,
    mensagens: erros,
  };
}

function pegarData() {
  return new Date().toISOString().slice(0, 10);
}

const agenda = criarAgenda("Gustavo");

agenda.criarContato({
  nome: "Ana",
  telefone: "119999",
  email: "ana@email.com",
  tags: ["Trabalho", "Frontend", "trabalho"],
});

agenda.criarContato({
  nome: "Bruno",
  telefone: "118888",
  email: "bruno@email.com",
  tags: ["Amigos"],
});

agenda.toggleFavorito("c1");

console.log(agenda.buscar("ana").length);
console.log(agenda.filtrar({ favorito: true }).length);
console.log(agenda.filtrar({ tag: "trabalho" }).length);

console.log(agenda.estatisticas().total);
console.log(agenda.estatisticas().favoritos);

const dump = agenda.exportar();

const agenda2 = criarAgenda("Clone");
agenda2.importar(dump);

console.log(agenda2.estatisticas().total);
