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

function enviarPedidoOracao(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();

  if (mensagem === "") return;

  const pedido = {
    nome: nome || "Anônimo",
    mensagem: mensagem,
    data: new Date().toLocaleDateString("pt-BR")
  };

  // Pega os pedidos antigos do localStorage
  const pedidosSalvos = JSON.parse(localStorage.getItem("pedidosOracao")) || [];
  pedidosSalvos.unshift(pedido); // adiciona o novo no início
  localStorage.setItem("pedidosOracao", JSON.stringify(pedidosSalvos));

  // Limpa o formulário
  document.getElementById("form-oracao").reset();

  // Atualiza a exibição
  exibirPedidosOracao();
}

function exibirPedidosOracao() {
  const listaUl = document.getElementById("pedidos-ul");
  listaUl.innerHTML = "";

  const pedidos = JSON.parse(localStorage.getItem("pedidosOracao")) || [];

  pedidos.slice(0, 5).forEach(pedido => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${pedido.nome}</strong> (${pedido.data}):<br>${pedido.mensagem}`;
    listaUl.appendChild(li);
  });
}

window.onload = () => {
  gerarConteudoPorTema();
  exibirPedidosOracao();
};
