let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) slide.classList.add("active");
  });
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide(slideIndex);
}

setInterval(nextSlide, 4000);
showSlide(slideIndex);

// Validação do formulário
const form = document.getElementById("cadastroForm");
form.addEventListener("submit", function(e) {
  if (!form.checkValidity()) {
    e.preventDefault();
    alert("Por favor, preencha todos os campos obrigatórios.");
  }
});

// Quiz
const perguntas = [
  { q: "O que pode causar enchentes urbanas?", a: "Acúmulo de lixo nas ruas", o: ["Plantio de árvores", "Acúmulo de lixo nas ruas", "Falta de chuva"] },
  { q: "Qual órgão natural ajuda a evitar enchentes?", a: "Vegetação", o: ["Concreto", "Asfalto", "Vegetação"] },
  { q: "O que é um sistema de drenagem?", a: "Canal para escoar água da chuva", o: ["Sistema de luz", "Canal para escoar água da chuva", "Rede de energia"] },
  { q: "As enchentes são comuns em áreas...", a: "Urbanizadas sem planejamento", o: ["Rurais isoladas", "Urbanizadas sem planejamento", "Montanhosas"] },
  { q: "A impermeabilização do solo é causada por...", a: "Asfalto e calçadas", o: ["Gramado", "Areia", "Asfalto e calçadas"] },
  { q: "Qual a consequência direta das enchentes?", a: "Alagamento de ruas", o: ["Desmatamento", "Alagamento de ruas", "Incêndios"] },
  { q: "Como ajudar a prevenir enchentes?", a: "Não jogar lixo nas ruas", o: ["Lavar calçadas", "Cortar árvores", "Não jogar lixo nas ruas"] },
  { q: "O que é captação de água da chuva?", a: "Coleta para reuso", o: ["Evaporação da água", "Coleta para reuso", "Desperdício"] },
  { q: "O lixo entupindo bueiros causa...", a: "Enchentes", o: ["Economia de água", "Enchentes", "Ventos fortes"] },
  { q: "Educação ambiental ajuda a...", a: "Evitar enchentes", o: ["Poluir rios", "Evitar enchentes", "Aumentar desmatamento"] },
];

const quizContainer = document.getElementById("quiz-container");
perguntas.forEach((pergunta, i) => {
  const div = document.createElement("div");
  div.innerHTML = `<p>${i + 1}. ${pergunta.q}</p>` +
    pergunta.o.map(op => `
      <label>
        <input type="radio" name="q${i}" value="${op}"> ${op}
      </label><br>`).join("");
  quizContainer.appendChild(div);
});

function verificarRespostas() {
  let acertos = 0;
  perguntas.forEach((pergunta, i) => {
    const selecionada = document.querySelector(`input[name=q${i}]:checked`);
    if (selecionada && selecionada.value === pergunta.a) {
      acertos++;
    }
  });
  document.getElementById("resultado").textContent = `Você acertou ${acertos} de ${perguntas.length} perguntas.`;
}

// Mudar fundo
function mudarFundo(cor) {
  document.body.style.backgroundColor = cor;
}
