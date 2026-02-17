onload = () => {
    // A classe .container no body pausa as animações (definido no CSS).
    // NÃO removemos ela aqui. Vamos remover apenas quando chegar no momento certo do texto.

    // --- Configuração da Música e Legendas ---
    const musica = document.getElementById('musica');
    const lyricsContainer = document.getElementById('lyrics');

    // Tenta iniciar a música automaticamente
    musica.volume = 0.5;
    musica.play().catch(error => {
        console.log("Autoplay bloqueado. Interação necessária.");
    });

    // Lista de Legendas e Tempos
    // triggerAnimation: true indica que a animação das flores deve começar nesta frase
    // chaos: true indica que é um pensamento intrusivo (aparece aleatório e não limpa o anterior)
    const lyricsData = [
        { text: "Antes", time: 1000 },
        { text: "minha vida era parecida com essa tela,", time: 4000 },
        { text: "vazia, cheia de pensamentos.", time: 8000 },

        // Fase do CAOS (Pensamentos intrusivos)
        // Adicionei mais frases e tempos próximos para criar o efeito de "tempestade"
        { text: "“de novo?”", time: 12000, chaos: true },
        { text: "“não consigo”", time: 12500, chaos: true },
        { text: "“desista.”", time: 13200, chaos: true },
        { text: "“você é erro.”", time: 14000, chaos: true },
        { text: "“fracasso”", time: 14500, chaos: true },
        { text: "“não adianta mais.”", time: 15500, chaos: true },
        { text: "“sozinho”", time: 16200, chaos: true },
        { text: "“de novo?”", time: 17000, chaos: true },
        { text: "“acabou”", time: 17500, chaos: true },
        { text: "“você é erro.”", time: 18200, chaos: true },
        { text: "“desista.”", time: 18800, chaos: true },

        { text: "Mas após a sua chegada, muitas coisas mudaram,", time: 22000 },

        // [a flor cresce] - AQUI a flor nasce e limpa os pensamentos ruins
        { text: "algo, dentro de mim floresceu.", time: 27000, triggerAnimation: true, clearChaos: true },

        { text: "não foram dúvidas,", time: 31000 },
        { text: "não foram medos,", time: 34000 },
        { text: "era bom.", time: 37000 },
        { text: "era calmo.", time: 40000 },
        { text: "era quente.", time: 43000 },
        { text: "era como se pela primeira vez", time: 46000 },
        { text: "o silêncio não doesse.", time: 50000 },
        { text: "isso me acalmava,", time: 54000 },
        { text: "me tranquilizava,", time: 57000 },
        { text: "me fazia querer ficar.", time: 60000 },
        { text: "hoje eu sei o que é isso.", time: 64000 },
        { text: "era o início do que hoje eu chamo de amor.", time: 68000 },
        { text: "hoje já não sou vazio.", time: 73000 },
        { text: "há algo vivo em mim.", time: 77000 },
        { text: "e esse amor floresce", time: 81000 },
        { text: "cada dia mais", time: 84000 },
        { text: "dentro do meu peito.", time: 87000 },
        { text: "obrigado.", time: 91000 },
        { text: "obrigado por ter chegado", time: 94000 },
        { text: "na minha vida.", time: 97000 },
        { text: "", time: 102000 }
    ];

    // Função para controlar as legendas
    function startLyrics() {
        const chaosElements = []; // Armazena os elementos do caos para remover depois

        lyricsData.forEach((line) => {
            setTimeout(() => {
                // 1. Limpeza do CAOS (quando a flor nasce)
                if (line.clearChaos) {
                    chaosElements.forEach(el => {
                        el.style.transition = "opacity 2s ease-out"; // Fade mais lento e suave
                        el.style.opacity = 0;
                        setTimeout(() => el.remove(), 2000);
                    });
                    chaosElements.length = 0; // Limpa o array
                }

                // 2. Animação da Flor
                if (line.triggerAnimation) {
                    document.body.classList.remove("container");
                }

                // 3. Lógica do Texto
                if (line.chaos) {
                    // --- Texto Caótico ---
                    const el = document.createElement('div');
                    el.innerText = line.text;
                    el.className = 'chaos-text';

                    // Posição Aleatória (evitando bordas extremas)
                    const randomTop = Math.random() * 80 + 10; // 10% a 90%
                    const randomLeft = Math.random() * 80 + 10;
                    // Tamanho aleatório para variar
                    const randomSize = Math.random() * 1.5 + 1; // 1rem a 2.5rem

                    el.style.top = randomTop + '%';
                    el.style.left = randomLeft + '%';
                    el.style.fontSize = randomSize + 'rem';

                    document.body.appendChild(el);
                    chaosElements.push(el);

                    // Fade in rápido
                    requestAnimationFrame(() => {
                        el.style.opacity = 1;
                    });

                } else {
                    // --- Texto Normal (Centralizado) ---
                    // Fade out do texto anterior
                    lyricsContainer.style.opacity = 0;

                    setTimeout(() => {
                        // Troca o texto e Fade in
                        lyricsContainer.innerText = line.text;
                        lyricsContainer.style.opacity = 1;
                    }, 500); // Transição um pouco mais rápida para fluidez
                }

            }, line.time);
        });
    }

    startLyrics();
};
