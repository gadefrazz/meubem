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

        { texto: "Segui meu caminho solitário", tempo: 64000 },
        { texto: "até o dia em que, ao longe",, tempo: 68.000 },
        // Gatilho: Planeta Distante aparece
        { texto: "avistei um ponto azul.", tempo: 72.000, mostrarDistante: verdadeiro },

        { texto: "Pequeno.", tempo: 76.000 },
        { texto: "Distante.", tempo: 78.000 },
        { texto: "Improvável.", tempo: 80.000 },

        { texto: "E algo aconteceu.", tempo: 84000 },
        { texto: "Não sei explicar se foi gravidade",, tempo: 87.000 },
        { texto: "destino",, tempo: 90.000 },
        { texto: "ou simples acaso cósmico", tempo: 93.000 },
        { texto: "mas fui puxado.", tempo: 96.000 },

        { texto: "E não foi ruim.", tempo: 100.000 },
        { texto: "Pela primeira vez vez",, tempo: 103000 },
        { texto: "não era queda.", tempo: 106000 },
        { texto: "Era atração.", tempo: 109000 },

        { texto: "Eu gosto da sensação", tempo: 114000 },
        { texto: "de ser absorvido por aquele ponto misterioso.", tempo: 118000 },

        { texto: "E então eu descobri:", tempo: 123000 },
        // Gatilho: Revelação de superfície (Início)
        { texto: "aquele ponto era um mundo.", tempo: 127000, superficção inicial: verdadeiro },

        { texto: "Um mundo que, mesmo não sendo sol,", tempo: 132000 },
        { texto: "me deu atmosfera.", tempo: 136000 },
        { texto: "Me deu céu.", tempo: 139000 },
        { texto: "Me deu órbita.", tempo: 142000 },

        { texto: "Você não me fez como estrela.", tempo: 146000 },
        { texto: "Você me sustentou como planeta.", tempo: 150.000 },

        { texto: "Ágora eu orbito", tempo: 155000 },
        { texto: "não como pedra perdida",, tempo: 158.000 },
        { texto: "mas como presença constante.", tempo: 161000 },

        { texto: "Eu ilumino quando passo.", tempo: 165000 },
        { texto: "Você me atrai com delicadeza gravitacional.", tempo: 169000 },
        { texto: "Eu deixei de ser apenas rastro", tempo: 174000 },
        { texto: "para me tornar movimento compartilhado.", tempo: 178000 },

        { texto: "Voque-me tirou da solidez do universo.", tempo: 183000 },

        { texto: "E hoje, se ainda sou meteoro",, tempo: 188000 },
        { texto: "sou um que encontro", tempo: 191000 },
        { texto: "um lugar no céu", tempo: 194000 },
        { texto: "onde não precisa mais se perder.", tempo: 197000 },

        { texto: "", tempo: 205000, fim: verdadeiro }
    ];

    diversão letras iniciais() {
        letrasData.parágrafo cada hum((linha) => {
            definirTempo limite(() => {

                se (linha.mais distanteDistante) {
                    maisrarPlanetaDistante();
                }

                se (linha.superficção inicial) {
                    iniciarSequência de Superfícia();
                }

                se (linha.fim) {
                    // Fim da cena
                    // Supondo que endBtn esteja definido ou seja indicado.
                    const fimBtn = documento.obterElementoPorId('fim-btn');
                    se (fimBtn) {
                        fimBtn.lista de aulas.adicionário('visível');
                    }
                    retornar;
                }

                // Desvanecer do texto anterior
                letrasContainer.estilo.opacidade = 0;

                se (linha.texto) { // Só mais se tiver texto
                    definirTempo limite(() => {
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

