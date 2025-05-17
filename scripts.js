const mensagens = [
  {
    versiculo: "Salmo 91:1",
    reflexao: "Aquele que habita no esconderijo do Altíssimo pode descansar à sombra do Todo-Poderoso. Deus é refúgio constante para quem confia nEle."
  },
  {
    versiculo: "Mateus 11:28",
    reflexao: "Venham a mim, todos os que estão cansados e sobrecarregados, e eu lhes darei descanso. Jesus conhece sua dor e te acolhe com amor."
  },
  {
    versiculo: "Isaías 41:10",
    reflexao: "Não temas, pois eu estou contigo. Não te assombres, pois eu sou o teu Deus. Deus é presença constante mesmo na dor."
  },
  {
    versiculo: "Filipenses 4:6-7",
    reflexao: "Não andem ansiosos por coisa alguma... A paz de Deus guardará seu coração. Entregar-se a Ele traz equilíbrio e consolo."
  }
];

function gerarConteudo() {
  const item = mensagens[Math.floor(Math.random() * mensagens.length)];
  document.getElementById("versiculo").textContent = item.versiculo;
  document.getElementById("reflexao").textContent = item.reflexao;
}

window.onload = gerarConteudo;
