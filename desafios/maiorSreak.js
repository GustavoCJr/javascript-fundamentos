function calcularMaiorStreak(datas) {
  if (datas.length === 0) return 0;
  const timestamps = datas
    .map((d) => new Date(d).getTime())
    .sort((a, b) => a - b);

  let maiorStreak = 1;
  let streakAtual = 1;

  for (let i = 0; i < timestamps.length - 1; i++) {
    const umDiaEmMs = 86400000;
    const diferenca = timestamps[i + 1] - timestamps[i];

    if (diferenca === umDiaEmMs) {
      streakAtual++;
    } else if (diferenca > 0) {
      streakAtual = 1;
    }

    if (streakAtual > maiorStreak) {
      maiorStreak = streakAtual;
    }
  }

  return maiorStreak;
}

const atividades = [
  "2026-02-01",
  "2026-02-02",
  "2026-02-03",
  "2026-02-05",
  "2026-02-06",
  "2026-02-07",
  "2026-02-08",
  "2026-02-09",
];
const maiorSequencia = calcularMaiorStreak(atividades);
console.log(maiorSequencia);
