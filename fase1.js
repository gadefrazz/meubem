const envelope = document.querySelector(".envelope-wrapper");
const letterText = document.getElementById("letter-text");
const nextBtn = document.getElementById("next-btn");

const cartas = [
  "Para o meu bem,\n\nHoje completamos mais um mês.\nE eu quis transformar esse sentimento em algo que você pudesse explorar, clicar, descobrir… como nós.",
  "Você tem sido abrigo nos dias turbulentos,\nriso nos dias leves,\ne calma quando o mundo insiste em correr rápido demais.",
  "Por meio desta página, eu só queria deixar registrado, como uma estrela no céu, o quanto você me faz feliz.\nO quanto você me faz bem.",
  "Que essa pequena constelação seja só uma forma diferente de dizer aquilo que eu repito sempre, mas nunca canso:\n\nEu te amo.",
  "Tenha uma linda experiência."
];

let indice = 0;
let aberto = false;

const scissors = document.querySelector(".scissors");

envelope.addEventListener("click", () => {
  if (!aberto) {
    // Inicia animação da tesoura
    scissors.classList.add("cutting");

    // Espera a animação terminar (1s) para abrir o envelope
    setTimeout(() => {
      envelope.classList.add("open");
      letterText.innerText = cartas[indice];
      aberto = true;
      scissors.style.display = 'none'; // Esconde a tesoura depois
    }, 1000);
  }
});

nextBtn.addEventListener("click", (e) => {
  e.stopPropagation();

  indice++;

  if (indice < cartas.length) {
    letterText.style.opacity = 0;

    // Change button text on the last card
    if (indice === cartas.length - 1) {
      nextBtn.innerText = "Explorar";
    }

    setTimeout(() => {
      letterText.innerText = cartas[indice];
      letterText.style.opacity = 1;
    }, 300);
  } else {
    // Redirect when clicking "Explorar" (after the last card)
    window.location.href = "constelacao.html";
  }
});
const voltarBtn = document.querySelector(".voltar-btn");

voltarBtn.addEventListener("click", () => {
  window.location.href = "constelacao.html"; // coloque o nome real do seu mapa aqui
});
