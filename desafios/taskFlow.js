/**
 * Desafio — TaskFlow (Gerenciador de Tarefas em JavaScript)
 * ---------------------------------------------------------
 * Objetivo:
 * Consolidar os fundamentos de JavaScript antes do DOM,
 * aplicando conceitos como objetos, factory functions,
 * métodos, this, validações, array methods, cópia vs referência
 * e organização de estado.
 *
 * Funcionalidades:
 * - Criação, edição e remoção de tarefas
 * - Filtros e buscas
 * - Estatísticas e relatórios
 * - Importação e exportação de dados (JSON)
 *
 * Tecnologias:
 * - JavaScript puro (sem DOM)
 *
 * Autor: Gustavo Cassettari Junior
 * Contexto:
 * Projeto de estudo para fortalecimento da base lógica
 * e preparação para manipulação de DOM e desenvolvimento frontend.
 */
function criarTaskFlow(dono) {
  return {
    dono,
    tarefas: [],
    _seq: 1,

    criarTarefa(dados) {
      const tagsFormatadas = dados.tags.map((t) => t.toLowerCase());
      const result = validarDados(dados);
      if (!result.errosValidados) {
        result.erros.forEach((erro) => {
          console.log(erro);
        });
        return;
      }
      const novaTarefa = {
        id: "t" + this._seq++,
        ...dados,
        tags: tagsFormatadas,
        concluida: false,
        criadaEm: pegarData(),
        atualizadaEm: pegarData(),
      };
      this.tarefas.push(novaTarefa);
      return novaTarefa;
    },

    editarTarefa(id, patch) {
      const index = buscarTarefa(id);
      if (index !== -1) {
        this.tarefas[index] = {
          ...this.tarefas[index],
          ...patch,
          atualizadaEm: pegarData(),
        };
        return this.tarefas[index];
      }
      return "Tarefa não encontrada";
    },

    toggleConcluida(id) {
      const index = buscarTarefa(id);
      if (index !== -1) {
        this.tarefas[index] = {
          ...this.tarefas[index],
          concluida: true,
          atualizadaEm: pegarData(),
        };
        return this.tarefas[index];
      }
      return "Tarefa não encontrada";
    },

    removerTarefa(id) {
      const index = buscarTarefa(id);
      if (index !== -1) {
        this.tarefas.splice(index, 1);
        return true;
      }
      return false;
    },

    listar() {
      return structuredClone(this.tarefas);
    },

    buscar(texto) {
      const termo = texto.toLowerCase();
      return this.tarefas.find(
        (t) =>
          t.titulo.toLowerCase().includes(termo) ||
          t.descricao.toLowerCase().includes(termo),
      );
    },

    filtrar(filtros) {
      const filtrados = this.tarefas.filter((t) => {
        return Object.keys(filtros).every((chave) => {
          if (!filtros[chave]) return true;
          return t[chave] === filtros[chave];
        });
      });
      return filtrados;
    },

    estatisticas() {
      const estatisticas = this.tarefas.reduce(
        (contatador, t) => {
          t.concluida ? contatador.concluidas++ : contatador.pendentes++;
          contatador.porPrioridade[t.prioridade] =
            (contatador.porPrioridade[t.prioridade] || 0) + 1;
          t.tags.forEach((tag) => {
            contatador._tempTags[tag] = (contatador._tempTags[tag] || 0) + 1;
          });
          return contatador;
        },
        {
          total: this.tarefas.length,
          concluidas: 0,
          pendentes: 0,
          porPrioridade: { baixa: 0, media: 0, alta: 0 },
          _tempTags: {},
        },
      );
      estatisticas.topTags = Object.entries(estatisticas._tempTags)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 3);

      delete estatisticas._tempTags;
      return estatisticas;
    },

    exportar() {
      return JSON.stringify(this.tarefas);
    },

    importar(jsonString) {
      try {
        const dadosImportados = JSON.parse(jsonString);

        if (!Array.isArray(dadosImportados)) {
          throw new Error("Formato de importação inválido. Esperado um array.");
        }
        this.tarefas = dadosImportados;

        if (this.tarefas.length > 0) {
          const maiorId = this.tarefas.reduce((max, t) => {
            const numId = parseInt(t.id.replace("t", ""));
            return numId > max ? numId : max;
          }, 0);
          this._seq = maiorId + 1;
        } else {
          this._seq = 1;
        }

        return this.tarefas.length;
      } catch (erro) {
        console.error("Erro na importação:", erro.message);
        return 0;
      }
    },
    buscarTarefa(id) {
      return this.tarefas.findIndex((t) => t.id === id);
    },
  };
}
function validarDados(dado) {
  const erros = [];
  if (!dado.titulo) {
    erros.push("Titulo Vazio");
  }
  if (
    dado.prioridade !== "baixa" &&
    dado.prioridade !== "media" &&
    dado.prioridade !== "alta"
  ) {
    erros.push("Prioridade inválida");
  }
  if (new Set(dado.tags).size !== dado.length) {
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

const app = criarTaskFlow("Gustavo");

app.criarTarefa({
  titulo: "Estudar objetos",
  descricao: "this, prototype, factory",
  prioridade: "alta",
  tags: ["JS", "Estudos", "js"],
});

app.criarTarefa({
  titulo: "Faculdade",
  descricao: "fazer atividade de BD",
  prioridade: "media",
  tags: ["faculdade", "bd"],
});

app.toggleConcluida("t1");

console.log(app.buscar("proto").length); // 1
console.log(app.filtrar({ concluida: true }).length); // 1
console.log(app.filtrar({ prioridade: "media" }).length); // 1
console.log(app.filtrar({ tag: "js" }).length); // 1

const stats = app.estatisticas();
console.log(stats.total, stats.concluidas, stats.pendentes); // 2 1 1
console.log(stats.porPrioridade); // { baixa: 0, media: 1, alta: 1 }
console.log(stats.topTags[0][0]); // "js"

const dump = app.exportar();
const app2 = criarTaskFlow("Clone");
console.log(app2.importar(dump)); // 2
console.log(app2.estatisticas().total); // 2
