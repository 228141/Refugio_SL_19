const temas = {
  ansiedade: [
    {
      versiculo: "Filipenses 4:6",
      reflexao: "Entregue suas preocupações a Deus e receba Sua paz."
    },
    {
      versiculo: "1 Pedro 5:7",
      reflexao: "Lance sobre Ele toda a sua ansiedade, porque Ele cuida de você."
    }
  ],
  esperanca: [
    {
      versiculo: "Jeremias 29:11",
      reflexao: "Deus tem planos de paz e esperança para seu futuro."
    },
    {
      versiculo: "Romanos 15:13",
      reflexao: "O Deus da esperança te encha de alegria e paz na fé."
    }
  ]
};

const mensagensAleatorias = [
  {
    versiculo: "Salmo 91:1",
    reflexao: "Aquele que habita no esconderijo do Altíssimo pode descansar à sombra do Todo-Poderoso."
  },
  {
    versiculo: "Mateus 11:28",
    reflexao: "Venham a mim, todos os que estão cansados e sobrecarregados, e eu lhes darei descanso."
  }
];

function gerarConteudoPorTema() {
  const select = document.getElementById("tema");
  const temaSelecionado = select.value;

  let listaMensagens;

  if (temaSelecionado && temas[temaSelecionado]) {
    listaMensagens = temas[temaSelecionado];
  } else {
    listaMensagens = mensagensAleatorias;
  }

  const item = listaMensagens[Math.floor(Math.random() * listaMensagens.length)];

  document.getElementById("versiculo").textContent = item.versiculo;
  document.getElementById("reflexao").textContent = item.reflexao;
}

window.onload = gerarConteudoPorTema;
