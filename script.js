document.body.style.backgroundImage = "url('fundo.jpg')";
document.body.style.backgroundSize = "cover";
document.body.style.backgroundPosition = "center";
// 1. Banco de Dados com perguntas para o Top 10 Mundial
const perguntas = [
    {
        pergunta: "Qual seria seu ambiente ideal para viver?",
        opcoes: [
            { texto: "Uma vila tradicional japonesa.", animes: ["Naruto"] },
            { texto: "Navegando no mar aberto.", animes: ["One Piece"] },
            { texto: "Uma cidade-fortaleza futurista e subterrânea ", animes: ["Neon Genesis Evangelion"] },
            { texto: "Preso em uma cidade rodeada de muralhas ", animes: ["Attack on Titan"] },
            { texto: "O Japão antigo durante a Era Taishō ", animes: ["Demon Slayer"] },
            { texto: "Um reino medieval", animes: ["Nanatsu no Taizai"] },
        ]
    },
    {
        pergunta: "Como você lida com seus maiores desafios?",
        opcoes: [
            { texto: "Treinando exaustivamente para superar qualquer limite físico.", animes: ["Dragon Ball Z", "Hunter x Hunter"] },
            { texto: "Usando pura inteligência, estratégia e jogos mentais", animes: ["Death Note", "Fullmetal Alchemist"] },
            { texto: "Trabalhando em equipe", animes: ["Jujutsu Kaisen"] },
            { texto: "Seguindo meu coração e nunca quebrando minhas promessas", animes: ["Naruto", "One Piece"] },
            { texto: "Enfrentando meus medos internos e assumindo a responsabilidade, mesmo quando sinto vontade de fugir", animes: ["Neon Genesis Evangelion"] },
            { texto: "Despertando um poder avassalador para proteger aqueles que amo e quebrar maldições do passado", animes: ["Nanatsu no Taizai"] }
        ]
    },
    {
        pergunta: "Que tipo de poder ou habilidade você gostaria de manifestar?",
        opcoes: [
            { texto: "Manipulação de energia espiritual (Chakra, Ki, Energia Amaldiçoada).", animes: ["Naruto", "Dragon Ball Z", "Jujutsu Kaisen"] },
            { texto: "Habilidades físicas modificadas por mutação ou itens mágicos.", animes: ["One Piece"] },
            { texto: "Gênio estrategista capaz de controlar as leis da ciência ou da vida.", animes: ["Death Note", "Fullmetal Alchemist"] },
            { texto: "Habilidade extrema com espadas e técnicas de combate.", animes: ["Demon Slayer", "Attack on Titan"] },
            { texto: "Uma barreira de energia absoluta capaz de proteger minha individualidade e repelir qualquer ataque.", animes: ["Neon Genesis Evangelion"] },
            { texto: "Poderes herdados de clãs antigos ou a habilidade de rebater a magia dos inimigos com o dobro de força.", animes: ["Nanatsu no Taizai"] },
        ]
    },
    {
        pergunta: "Quem seria você em um grupo de combate?",
        opcoes: [
            { texto: "O líder determinado que inspira todos ao redor.", animes: ["Naruto", "One Piece"] },
            { texto: "O que age de forma independente.", animes: ["Dragon Ball Z", "Jujutsu Kaisen", "Death Note"] },
            { texto: "O estrategista que analisa as fraquezas do inimigo.", animes: ["Hunter x Hunter", "Fullmetal Alchemist"] },
            { texto: "O soldado focado que luta pela sobrevivência.", animes: ["Attack on Titan", "Demon Slayer"] },
            { texto: "O piloto designado que cumpre seu papel técnico sob comando rígido da base.", animes: ["Neon Genesis Evangelion"] },
            { texto: "Um membro de uma ordem lendária de cavaleiros poderosos e renegados que agem por conta própria.", animes: ["Nanatsu no Taizai"] },
        ]
    },
    {
  pergunta: "Qual é o seu principal objetivo de vida?",
  opcoes: [
    { texto: "Tornar-me o líder supremo ou alcançar o topo da minha área.", animes: ["Naruto", "One Piece"] },
    { texto: "Vingar uma injustiça do passado e fazer os culpados pagarem.", animes: ["Demon Slayer", "Attack on Titan"] },
    { texto: "Encontrar respostas sobre o universo ou desvendar grandes mistérios.", animes: ["Fullmetal Alchemist", ] },
    { texto: "Viver uma vida pacífica, mas proteger meus amigos quando necessário.", animes: [ "Jujutsu Kaisen"] },
    { texto: "Superar meus próprios limites e encontrar oponentes cada vez mais fortes.", animes: ["Dragon Ball Z", "Hunter x Hunter"] }
  ]
},
{
  pergunta: "Como você reage quando um plano dá completamente errado?",
  opcoes: [
    { texto: "Mantenho a calma e improviso uma nova estratégia .", animes: ["Death Note","Jujutsu Kaisen"] },
    { texto: "Fico frustrado, mas uso a raiva como combustível para tentar mais forte.", animes: ["Dragon Ball Z","Naruto"] },
    { texto: "Conto com o apoio incondicional dos meus aliados para virar o jogo.", animes: [ "One Piece", "Nanatsu no Taizai"] },
    { texto: "Entro em crise existencial e questiono minhas próprias habilidades.", animes: ["Neon Genesis Evangelion",] },
    { texto: "Aceito as consequências e procuro uma solução lógica e realista.", animes: ["Fullmetal Alchemist", ] },
  ]
},
{
  pergunta: "Que tipo de ambiente faz você se sentir mais motivado?",
  opcoes: [
    { texto: "Uma arena de combate lotada ou um campo de treinamento intenso.", animes: ["Dragon Ball ", ] },
    { texto: "Uma biblioteca silenciosa, um laboratório ou uma sala de xadrez.", animes: [ "Death Note"] },
    { texto: "Um mundo vasto, desconhecido e cheio de segredos para explorar.", animes: [, "One Piece"] },
    { texto: "Um lugar sombrio e perigoso onde as regras normais não se aplicam.", animes: ["Jujutsu Kaisen"] },
    { texto: "Um ambiente escolar comum onde posso viver aventuras com meus amigos.", animes: ["Naruto"] }
  ]
 }
];

// 2. Mapeamento de Elementos HTML
const homeScreen = document.getElementById('home-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const characterQuizBtn = document.getElementById('character-quiz-btn');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const resultText = document.getElementById('result-text');

let perguntaAtualIndex = 0;
let pontuacao = {};
let animeVencedor = "";

// 3. Funções do Sistema
function iniciarQuiz() {
document.body.style.backgroundImage = "url('fundo.jpg')";
document.body.style.backgroundSize = "cover";
document.body.style.backgroundPosition = "center";


    homeScreen.classList.add('hidden');
    resultScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    perguntaAtualIndex = 0;
    
    pontuacao = {
        "Naruto": 0, "One Piece": 0, "Dragon Ball Z": 0, 
        "Attack on Titan": 0, "Jujutsu Kaisen": 0, "Demon Slayer": 0, 
        "Death Note": 0, "Fullmetal Alchemist": 0, "Hunter x Hunter": 0, 
        "Neon Genesis Evangelion": 0,
        "Nanatsu no Taizai": 0,
    };
    
    mostrarPergunta();
}

function mostrarPergunta() {
    optionsContainer.innerHTML = ''; 
    const perguntaAtual = perguntas[perguntaAtualIndex];
    questionText.innerText = perguntaAtual.pergunta;

    perguntaAtual.opcoes.forEach(opcao => {
        const botao = document.createElement('button');
        botao.innerText = opcao.texto;
        botao.addEventListener('click', () => computarResposta(opcao.animes));
        optionsContainer.appendChild(botao);
    });
}

function computarResposta(animesSelecionados) {
    animesSelecionados.forEach(anime => {
        if (pontuacao[anime] !== undefined) {
            pontuacao[anime]++;
        }
    });

    perguntaAtualIndex++;

    if (perguntaAtualIndex < perguntas.length) {
        mostrarPergunta();
    } else {
        exibirResultado();
    }
}

const fundosAnimes = {
    "Naruto": "imagens/naruto.jpg",
    "One Piece": "imagens/onepiece.jpg",
    "Dragon Ball Z": "imagens/dragonball.jpg",
    "Attack on Titan": "imagens/attackontitan.jpg",
    "Jujutsu Kaisen": "imagens/jujutsu-kaisen.jpg",
    "Demon Slayer": "imagens/demonslayer.jpg",
    "Death Note": "imagens/deathnote.jpg",
    "Fullmetal Alchemist": "imagens/fullmetal.jpg",
    "Hunter x Hunter": "imagens/hunter.jpg",
    "Neon Genesis Evangelion": "imagens/evangelion.jpg",
    "Nanatsu no Taizai": "imagens/nanatsu.jpg"
    
};

function exibirResultado() {
    quizScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');

    // Encontra o anime mais votado
    animeVencedor = Object.keys(pontuacao).reduce((a, b) => pontuacao[a] > pontuacao[b] ? a : b);
    
    resultText.innerHTML = `O seu perfil combina perfeitamente com o universo de:<br><br><span style="color: #ff4757; font-size: 28px; font-weight: bold; text-transform: uppercase;">✨ ${animeVencedor} ✨</span>`;

    // CÓDIGO PARA MUDAR O FUNDO DA PÁGINA:
    if (fundosAnimes[animeVencedor]) {
        document.body.style.backgroundImage = `url('${fundosAnimes[animeVencedor]}')`;
        document.body.style.backgroundSize = "contain";
        document.body.style.backgroundPosition = "center";
    }
}


// 4. Redirecionamento Dinâmico
characterQuizBtn.addEventListener('click', () => {
    // Codifica o nome do anime para evitar problemas com espaços na URL
    const animeParam = encodeURIComponent(animeVencedor);
    
    // Redireciona para o próximo arquivo passando o parâmetro
    window.location.href = `personagem.html?anime=${animeParam}`;
});

// Eventos de início
startBtn.addEventListener('click', iniciarQuiz);
restartBtn.addEventListener('click', iniciarQuiz);

