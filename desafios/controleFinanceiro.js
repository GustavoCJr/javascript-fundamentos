function criarCarteira(dono) {
  return {
    dono,
    saldo: 0,
    transacoes: [],
    _seq: 1,

    adicionarTransacao(dados) {
      const result = validarErros(dados, this.saldo);
      if (!result.errosValidos) {
        result.mensagens.forEach((msg) => {
          console.log(msg);
        });
        return;
      }
      const transacao = {
        id: "t" + this._seq++,
        ...dados,
        data: new Date().toISOString().slice(0, 10),
      };
      if (transacao.tipo === "entrada") {
        this.saldo += transacao.valor;
      } else {
        this.saldo -= transacao.valor;
      }
      this.transacoes.push(transacao);
      return transacao;
    },

    removerTransacao(id) {
      const index = this.transacoes.findIndex((t) => t.id === id);
      if (index === -1) return false;

      const transacao = this.transacoes[index];
      if (transacao.tipo === "entrada") {
        this.saldo -= transacao.valor;
      } else {
        this.saldo += transacao.valor;
      }
      this.transacoes.splice(index, 1);
      return true;
    },

    listarTransacoes() {
      return this.transacoes.map((t) => ({ ...t }));
    },

    resumo() {
      const entradas = this.filtrarPorTipo("entrada");
      const totalEntradas = entradas.reduce(
        (acumulador, transacao) => acumulador + transacao.valor,
        0,
      );

      const saidas = this.filtrarPorTipo("saida");
      const totalSaidas = saidas.reduce(
        (acumulador, transacao) => acumulador + transacao.valor,
        0,
      );

      const porCategoria = this.transacoes.reduce((acumulador, transacao) => {
        const categoria = transacao.categoria.toLowerCase();
        acumulador[categoria] = (acumulador[categoria] || 0) + transacao.valor;
        return acumulador;
      }, {});

      return {
        saldo: this.saldo,
        totalEntradas,
        totalSaidas,
        porCategoria,
      };
    },

    filtrarPorTipo(tipo) {
      return this.transacoes.filter((transacao) => transacao.tipo === tipo);
    },

    filtrarPorCategoria(categoria) {
      const alvo = categoria.toLowerCase();
      return this.transacoes.filter((t) => t.categoria.toLowerCase() === alvo);
    },

    buscarPorDescricao(texto) {
      return this.transacoes.filter((transacao) =>
        transacao.descricao.toLowerCase().includes(texto.toLowerCase()),
      );
    },

    relatorioMensal(ano, mes) {
      const mesFormatado = mes.toString().padStart(2, "0");
      const prefixo = `${ano}-${mesFormatado}`;

      const transacoesDoMes = this.transacoes.filter((transacao) =>
        transacao.data.startsWith(prefixo),
      );

      const entradas = transacoesDoMes.filter(
        (transacao) => transacao.tipo === "entrada",
      );
      const totalEntradas = entradas.reduce(
        (acumulador, transacao) => acumulador + transacao.valor,
        0,
      );

      const saidas = transacoesDoMes.filter(
        (transacao) => transacao.tipo === "saida",
      );
      const totalSaidas = saidas.reduce(
        (acumulador, transacao) => acumulador + transacao.valor,
        0,
      );

      return {
        totalEntradas,
        totalSaidas,
        saldoDoMes: totalEntradas - totalSaidas,
        transacoes: transacoesDoMes,
      };
    },
  };
}

function validarErros(dados, saldoAtual) {
  const erros = [];
  if (!dados.descricao) {
    erros.push("Descrição vazia");
  }
  if (dados.valor <= 0) {
    erros.push("Valor de transação nulo ou negativo");
  }
  if (dados.tipo !== "entrada" && dados.tipo !== "saida") {
    erros.push("Tipo de transação inválida");
  }
  if (dados.tipo === "saida" && saldoAtual < dados.valor) {
    erros.push("Saldo insuficiente");
  }
  if (!dados.categoria) {
    erros.push("categoria vazia");
  }
  return {
    errosValidos: erros.length === 0,
    mensagens: erros,
  };
}
