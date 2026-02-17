onload = () => {
    // --- Configuração da Música e Legendas ---
    const musica = document.getElementById('musica');
    const lyricsContainer = document.getElementById('lyrics');
    const space = document.querySelector('.space');
    const meteorContainer = document.querySelector('.meteor-container');

    // --- Configuração Inicial (Tela Preta) ---
    // Estrelas e Meteoro começam invisíveis (controlado pelo CSS opacity ou JS)

    // --- Gerar Estrelas Aleatórias ---
    function createStars() {
        const starCount = 200;
        for (let i = 0; i < starCount; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            const size = Math.random() * 3 + 1 + 'px';
            star.style.width = size;
            star.style.height = size;
            star.style.top = Math.random() * 100 + '%';
            star.style.left = Math.random() * 100 + '%';
            star.style.opacity = '0'; // Começam invisíveis
            star.style.transition = 'opacity 3s ease-in-out'; // Fade in lento das estrelas

            // Animação de piscar individual
            star.style.animation = `twinkle ${(Math.random() * 3 + 2)}s infinite alternate`;

            space.appendChild(star);
        }
    }
    createStars();

    // --- Sequência de Entrada ---
    setTimeout(() => {
        // 1. Toca música
        musica.volume = 0.5;
        musica.play().catch(e => console.log("Audio block"));

        // 2. Aparecem as estrelas e o meteoro suavemente
        const stars = document.querySelectorAll('.star');
        stars.forEach(s => s.style.opacity = Math.random()); // Restaura opacidade aleatória
        meteorContainer.classList.add('visible'); // Fade in do meteoro

    }, 1000); // 1 segundo de tela totalmente preta antes de começar

    // --- Funcionalidade: Planeta Distante (Ponto Azul) ---
    function showDistantPlanet() {
        const distantPlanet = document.querySelector('.planet-distant');
        distantPlanet.classList.add('visible');
    }

    // --- Funcionalidade: Transição para Superfície ---
    function startSurfaceSequence() {
        const planetContainer = document.querySelector('.planet-container');
        const distantPlanet = document.querySelector('.planet-distant');

        // 1. Some o planeta distante
        distantPlanet.style.opacity = 0;

        // 2. Transição geral (Fade In da Superfície)
        // O Meteoro NÃO muda, ele continua flutuando no meio (meteorFloat)
        // Apenas o container do planeta sobe/aparece

        setTimeout(() => {
            planetContainer.classList.add('visible'); // Horizonte aparece
            meteorContainer.classList.add('surface-view'); // Ajuste fino de posição se definido no CSS
        }, 1000);
    }

    // Lista de Legendas e Tempos (Total ~2min)
    const lyricsData = [
        { text: "Uma vez, você disse que eu fui um meteoro que iluminou você.", time: 1000 },
        { text: "Você não estava errada.", time: 5000 },
        { text: "Mas se pensou que só você brilhou naquele instante,", time: 9000 },
        { text: "preciso confessar uma coisa:", time: 13000 },
        { text: "antes de você,", time: 17000 },
        { text: "eu era apenas um meteoro perdido", time: 20000 },
        { text: "na imensidão silenciosa do espaço.", time: 24000 },
        { text: "Vagava sem órbita,", time: 28000 },
        { text: "sem destino,", time: 31000 },
        { text: "atravessando constelações que não me pertenciam.", time: 34000 },
        { text: "Via planetas felizes com seus sóis,", time: 39000 },
        { text: "via sistemas inteiros dançando em harmonia,", time: 43000 },
        { text: "via luz constante, calor estável,", time: 47000 },
        { text: "e eu —", time: 51000 },
        { text: "eu era só passagem.", time: 53000 },
        { text: "Rastro.", time: 56000 },
        { text: "Clarão breve no vazio.", time: 59000 },

        { text: "Segui meu caminho solitário", time: 64000 },
        { text: "até o dia em que, ao longe,", time: 68000 },
        // Trigger: Distant Planet appears
        { text: "avistei um ponto azul.", time: 72000, showDistant: true },

        { text: "Pequeno.", time: 76000 },
        { text: "Distante.", time: 78000 },
        { text: "Improvável.", time: 80000 },

        { text: "E algo aconteceu.", time: 84000 },
        { text: "Não sei explicar se foi gravidade,", time: 87000 },
        { text: "destino,", time: 90000 },
        { text: "ou simples acaso cósmico —", time: 93000 },
        { text: "mas fui puxado.", time: 96000 },

        { text: "E não foi ruim.", time: 100000 },
        { text: "Pela primeira vez,", time: 103000 },
        { text: "não era queda.", time: 106000 },
        { text: "Era atração.", time: 109000 },

        { text: "Eu gostei da sensação", time: 114000 },
        { text: "de ser absorvido por aquele ponto misterioso.", time: 118000 },

        { text: "E então eu descobri:", time: 123000 },
        // Trigger: Surface Reveal (Home)
        { text: "aquele ponto era um mundo.", time: 127000, startSurface: true },

        { text: "Um mundo que, mesmo não sendo sol,", time: 132000 },
        { text: "me deu atmosfera.", time: 136000 },
        { text: "Me deu céu.", time: 139000 },
        { text: "Me deu órbita.", time: 142000 },

        { text: "Você não me queimou como estrela.", time: 146000 },
        { text: "Você me sustentou como planeta.", time: 150000 },

        { text: "Agora eu orbito —", time: 155000 },
        { text: "não como pedra perdida,", time: 158000 },
        { text: "mas como presença constante.", time: 161000 },

        { text: "Eu ilumino quando passo.", time: 165000 },
        { text: "Você me atrai com delicadeza gravitacional.", time: 169000 },
        { text: "Eu deixei de ser apenas rastro", time: 174000 },
        { text: "para me tornar movimento compartilhado.", time: 178000 },

        { text: "Você me tirou da solidão do universo.", time: 183000 },

        { text: "E hoje, se ainda sou meteoro,", time: 188000 },
        { text: "sou um que encontrou", time: 191000 },
        { text: "um lugar no céu", time: 194000 },
        { text: "onde não precisa mais se perder.", time: 197000 },

        { text: "", time: 205000, end: true }
    ];

    function startLyrics() {
        lyricsData.forEach((line) => {
            setTimeout(() => {

                if (line.showDistant) {
                    showDistantPlanet();
                }

                if (line.startSurface) {
                    startSurfaceSequence();
                }

                if (line.end) {
                    // Fim da cena
                    // Assuming endBtn is defined or will be added.
                    const endBtn = document.getElementById('end-btn');
                    if (endBtn) {
                        endBtn.classList.add('visible');
                    }
                    return;
                }

                // Fade out do texto anterior
                lyricsContainer.style.opacity = 0;

                if (line.text) { // Só mostra se tiver texto
                    setTimeout(() => {
                        // Troca o texto e Fade in
                        lyricsContainer.innerText = line.text;
                        lyricsContainer.style.opacity = 1;
                    }, 1000);
                }

            }, line.time);
        });
    }

    startLyrics();
};
