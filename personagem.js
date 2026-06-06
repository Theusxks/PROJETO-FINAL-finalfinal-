// 1. Capturar o anime enviado pelo primeiro quiz através da URL
const urlParams = new URLSearchParams(window.location.search);
const animeSelecionado = urlParams.get('anime'); // Ex: "Naruto" ou "One Piece"

// 2. Banco de dados de perguntas separadas por ANIME
const bancoDeDadosPorAnime = {
    "Naruto": [
        {
            pergunta: "Qual é o seu jeito ninja?",
            opcoes: [
                { texto: "Nunca desistir dos meus sonhos e proteger meus amigos.", personagem: "Naruto Uzumaki" },
                { texto: "Buscar poder e agir focado nos meus próprios objetivos.", personagem: "Sasuke Uchiha" },
                { texto: "Manter a calma, ler e liderar estrategicamente.", personagem: "Kakashi Hatake" },
                { texto: "Carregar fardos em silêncio e me sacrificar pelo bem maior e pela paz.", personagem: "Itachi Uchiha" },
                { texto: "Evitar problemas desnecessários, mas usar minha mente para proteger meus companheiros.", personagem: "Shikamaru Nara" },
                { texto: "Superar minhas fraquezas do passado com esforço e curar quem precisa de ajuda.", personagem: "Sakura Haruno" }
            ]
        },
        {
            pergunta: "Qual jutsu você prefere?",
            opcoes: [
                { texto: "Rasengans ou Clones das Sombras.", personagem: "Naruto Uzumaki" },
                { texto: "Chidori ou jutsus de fogo.", personagem: "Sasuke Uchiha" },
                { texto: "Copiar o jutsu do adversário.", personagem: "Kakashi Hatake" },
                { texto: "Genjutsus de ilusão ou chamas negras do Amaterasu.", personagem: "Itachi Uchiha" },
                { texto: "Possessão das Sombras para imobilizar o oponente.", personagem: "Shikamaru Nara" },
                { texto: "Ninjutsu médico de cura ou socos com impacto devastador.", personagem: "Sakura Haruno" }

            ]

        },
        {
  pergunta: "Como você reage sob extrema pressão ou em uma crise?",
  opcoes: [
    { texto: "Não penso duas vezes e ajo por puro instinto para proteger quem importa.", personagem: "Naruto Uzumaki" },
    { texto: "Analiso friamente a situação e uso meu poder para esmagar o problema sozinho.", personagem: "Sasuke Uchiha" },
    { texto: "Mantenho o foco e confio na experiência acumulada para achar uma saída.", personagem: "Kakashi Hatake" },
    { texto: "Sacrifico minhas próprias emoções e tomo a decisão mais lógica, por mais dolorosa que seja.", personagem: "Itachi Uchiha" },
    { texto: "Formulo uma estratégia brilhante pensando em 20 jogadas à frente enquanto finjo calmaria.", personagem: "Shikamaru Nara" },
    { texto: "Mantenho a resiliência mental e uso meu controle e força para dar suporte ao grupo.", personagem: "Sakura Haruno" },
  ]
},
{
  pergunta: "Qual dessas qualidades você mais valoriza em uma pessoa?",
  opcoes: [
    { texto: "A lealdade inabalável e a capacidade de perdoar.", personagem: "Naruto Uzumaki" },
    { texto: "A determinação implacável de alcançar a própria ambição.", personagem: "Sasuke Uchiha" },
    { texto: "O companheirismo e o respeito pelas lições do passado.", personagem: "Kakashi Hatake" },
    { texto: "A sabedoria profunda e a disposição de carregar fardos em silêncio.", personagem: "Itachi Uchiha" },
    { texto: "A inteligência prática e a simplicidade de evitar dramas desnecessários.", personagem: "Shikamaru Nara" },
    { texto: "A dedicação para evoluir constantemente e a empatia de curar os outros.", personagem: "Sakura Haruno" }
  ]
},
{
  pergunta: "Se você pudesse escolher uma habilidade ou especialidade ninja avançada, qual seria?",
  opcoes: [
    { texto: "Uma reserva massiva de chakra e transformações devastadoras.", personagem: "Naruto Uzumaki" },
    { texto: "Um Dojutsu poderoso capaz de prever movimentos e controlar chamas negras.", personagem: "Sasuke Uchiha" },
    { texto: "Versatilidade total para dominar múltiplos elementos e táticas de combate.", personagem: "Kakashi Hatake" },
    { texto: "Genjutsus ilusórios perfeitos que derrotam o inimigo sem esforço físico.", personagem: "Itachi Uchiha" },
    { texto: "Manipulação de sombras para imobilizar e controlar estrategicamente o oponente.", personagem: "Shikamaru Nara" },
    { texto: "Força física brutal combinada com Ninjutsu médico de alto nível.", personagem: "Sakura Haruno" }
  ]
}
    ],
    "One Piece": [
        {
            pergunta: "Qual cargo você gostaria de ter em um navio pirata?",
            opcoes: [
                { texto: "Capitão, obviamente! Eu comando a diversão.", personagem: "Luffy" },
                { texto: "Imediato e o espadachim mais forte.", personagem: "Zoro" },
                { texto: "Navegadora/Navegador focado em mapas e tesouros.", personagem: "Nami" },
                { texto: "Cozinheiro do navio, garantindo a melhor comida para os aliados.", personagem: "Sanji" },
                { texto: "Arqueólogo ou historiador, focado em desvendar mistérios do mundo.", personagem: "Robin" },
                { texto: "Médico de bordo, cuidando da saúde e bem-estar de todos.", personagem: "Chopper" }
            ]
        },
        {
            pergunta: "O que mais te atrai em uma aventura?",
            opcoes: [
                { texto: "A comida e a liberdade absoluta.", personagem: "Luffy" },
                { texto: "Um bon desafio de combate para testar minha força.", personagem: "Zoro" },
                { texto: "Garantir que a tripulação esteja segura e rica.", personagem: "Nami" },
                { texto: "Conhecer novos ingredientes e defender quem precisa com honra.", personagem: "Sanji" },
                { texto: "Desvendar mistérios históricos e locais antigos esquecidos.", personagem: "Robin" },
                { texto: "Explorar novos lugares enquanto cuido da saúde de todos.", personagem: "Chopper" }
            ]
        },
        {
            pergunta: "O que você faria se encontrasse um tesouro lendário?",
            opcoes: [
                { texto: "Daria uma festa gigante com muita carne para comemorar com os amigos.", personagem: "Luffy" },
                { texto: "Não me importaria muito, desde que eu pudesse continuar testando minha força.", personagem: "Zoro" },
                { texto: "Guardaria e calcularia imediatamente o valor de cada moeda de ouro.", personagem: "Nami" },
                { texto: "Usaria parte dele para comprar os ingredientes mais raros e exóticos do mar.", personagem: "Sanji" },
                { texto: "Procuraria por alguma inscrição antiga ou Poneglyph escondido junto ao tesouro.", personagem: "Robin" },
                { texto: "Compraria suprimentos médicos avançados e muitos doces (especialmente algodão-doce).", personagem: "Chopper" }
            ]
        },
        {
            pergunta: "Como você age quando um companheiro de equipe é insultado ou ferido?",
            opcoes: [
                { texto: "Fico furioso e parto para o ataque com tudo, sem me importar com as consequências.", personagem: "Luffy" },
                { texto: "Saco minhas espadas com um olhar frio, pronto para cortar quem causou isso.", personagem: "Zoro" },
                { texto: "Fico chocada e brava, mas tento pensar rápido em uma forma de contra-atacar ou recuar.", personagem: "Nami" },
                { texto: "Não perdoo quem mexe com meus amigos e defendo a honra deles usando meus chutes.", personagem: "Sanji" },
                { texto: "Mantenho a postura calma, mas uso meus poderes de forma implacável para neutralizar a ameaça.", personagem: "Robin" },
                { texto: "Fico assustado de início, mas supero o medo para curar o ferido ou lutar se for preciso.", personagem: "Chopper" }
            ]
        }
    ],
    // Você pode adicionar "Dragon Ball Z", "Attack on Titan", etc., seguindo esta mesma estrutura.
    "Dragon Ball Z": [
        {
            pergunta: "Qual é a sua postura diante de um oponente muito mais forte?",
            opcoes: [
                { texto: "Fico empolgado com o desafio e luto até o fim.", personagem: "Goku" },
                { texto: "Sinto meu orgulho ferido e luto para provar que sou o melhor.", personagem: "Vegeta" },
                { texto: "Prefiro evitar o combate, mas luto se for para proteger quem amo.", personagem: "Gohan" },
                { texto: "Tento acabar com a ameaça o mais rápido possível para evitar uma catástrofe.", personagem: "Trunks" },
                { texto: "Analiso friamente as habilidades do inimigo e procuro uma brecha tática.", personagem: "Piccolo" },
                { texto: "Sinto medo, mas permaneço no campo de batalha para ajudar meus amigos como puder.", personagem: "Kuririn" }
            ]
        },
        {
            pergunta: "Se você pudesse fazer um desejo para as Esferas do Dragão, qual seria?",
            opcoes: [
                { texto: "Que apareçam novos guerreiros fortes para eu enfrentar.", personagem: "Goku" },
                { texto: "Superar todos os meus rivais de uma vez por todas.", personagem: "Vegeta" },
                { texto: "Paz no mundo para que todos possam viver tranquilos.", personagem: "Gohan" },
                { texto: "Restaurar uma linha do tempo devastada e proteger o futuro.", personagem: "Trunks" },
                { texto: "Aumentar minha sabedoria ou garantir a segurança do planeta.", personagem: "Piccolo" },
                { texto: "Uma vida confortável, próspera e segura ao lado da minha família.", personagem: "Kuririn" }
            ]
        },
        {
            pergunta: "Qual é o seu método ideal para ficar mais forte?",
            opcoes: [
      { texto: "Viajar pelo mundo ou pelo universo atrás de novos mestres e oponentes.", personagem: "Goku" },
      { texto: "Treinar sozinho sob condições extremas, como gravidade aumentada.", personagem: "Vegeta" },
      { texto: "Focar nos estudos e deveres cotidianos, liberando meu poder oculto em momentos críticos.", personagem: "Gohan" },
      { texto: "Aprender com os erros do passado e treinar duro para que o futuro seja seguro.", personagem: "Trunks" },
      { texto: "Meditar em isolamento total na natureza para aperfeiçoar minha mente e minhas técnicas.", personagem: "Piccolo" },
      { texto: "Superar as limitações humanas com esforço constante ao lado do meu melhor amigo.", personagem: "Kuririn" }
    ]
  },
  {
    pergunta: "O que você faria se encontrasse as sete Esferas do Dragão?",
    opcoes: [
      { texto: "Guardaria o desejo para ressuscitar alguém ou para quando uma grande ameaça surgir.", personagem: "Goku" },
      { texto: "Pediria algo que aumentasse permanentemente minha soberania ou poder de luta.", personagem: "Vegeta" },
      { texto: "Provavelmente deixaria que meus amigos decidissem o melhor uso para elas.", personagem: "Gohan" },
      { texto: "Pediria para reconstruir ou salvar uma linha do tempo inteira que foi devastada.", personagem: "Trunks" },
      { texto: "Não tenho interesse em desejos egoístas, usaria apenas para o bem-estar do planeta.", personagem: "Piccolo" },
      { texto: "Pediria uma vida confortável e segura para desfrutar em paz com a minha família.", personagem: "Kuririn" }
    ]
  }
    ],
    "Attack on Titan": [
  {
    pergunta: "O que você faria se descobrisse uma verdade terrível sobre o mundo?",
    opcoes: [
      { texto: "Avançaria contra qualquer inimigo para conquistar a liberdade.", personagem: "Eren Jaeger" },
      { texto: "Manteria a frieza técnica para bolar a melhor estratégia de sobrevivência.", personagem: "Mikasa Ackerman" },
      { texto: "Usaria meu intelecto para desvendar os mistérios e guiar as pessoas.", personagem: "Armin Arlert" },
      { texto: "Focaria em cumprir meu dever imediato e eliminar as ameaças mais perigosas.", personagem: "Levi Ackerman" },
      { texto: "Aproveitaria a informação para traçar um plano de longo prazo, custe o que custar.", personagem: "Erwin Smith" },
      { texto: "Ficaria fascinado em estudar cada detalhe dessa nova realidade para entender a ciência por trás dela.", personagem: "Hange Zoë" }
    ]
  },
  {
    pergunta: "Qual é o seu maior medo na vida?",
    opcoes: [
      { texto: "Viver enjaulado e perder o direito de escolha.", personagem: "Eren Jaeger" },
      { texto: "Perder as poucas pessoas que considero minha família.", personagem: "Mikasa Ackerman" },
      { texto: "Não ser forte ou inteligente o suficiente quando as pessoas precisarem.", personagem: "Armin Arlert" },
      { texto: "Deixar que as mortes e sacrifícios dos meus companheiros tenham sido em vão.", personagem: "Levi Ackerman" },
      { texto: "Falhar antes de conseguir alcançar e contemplar a verdade final do mundo.", personagem: "Erwin Smith" },
      { texto: "Permitir que a ignorância e o medo impeçam a humanidade de evoluir.", personagem: "Hange Zoë" }
    ]
  },
  {
    pergunta: "Qual dessas qualidades define melhor a sua postura de liderança ou atuação em grupo?",
    opcoes: [
      { texto: "Determinação obstinada que inspira os outros a irem até o limite.", personagem: "Eren Jaeger" },
      { texto: "Proteção inabalável da retaguarda e foco total na segurança dos aliados mais próximos.", personagem: "Mikasa Ackerman" },
      { texto: "Pensamento diplomático e busca por soluções racionais que evitem conflitos desnecessários.", personagem: "Armin Arlert" },
      { texto: "Liderança pelo exemplo prático, agindo com precisão implacável nos momentos mais críticos.", personagem: "Levi Ackerman" },
      { texto: "Presença de comando magnética, capaz de tomar decisões difíceis e sacrificar peças pelo bem maior.", personagem: "Erwin Smith" },
      { texto: "Entusiasmo contagiante e curiosidade intelectual para motivar a equipe a pensar fora da caixa.", personagem: "Hange Zoë" }
    ]
  },
  {
    pergunta: "Como você lida com a dor de uma perda marcante?",
    opcoes: [
      { texto: "Transformo a tristeza em pura indignação e sigo em frente focado no meu objetivo.", personagem: "Eren Jaeger" },
      { texto: "Guardo a dor para mim e me agarro firmemente aos que ainda estão ao meu lado.", personagem: "Mikasa Ackerman" },
      { texto: "Reflito profundamente sobre o ocorrido para garantir que o sacrifício traga algum aprendizado.", personagem: "Armin Arlert" },
      { texto: "Aceito a dura realidade sem demonstrar fraqueza e continuo cumprindo minha missão diária.", personagem: "Levi Ackerman" },
      { texto: "Utilizo o peso da responsabilidade para impulsionar meus planos adiante sem hesitar.", personagem: "Erwin Smith" },
      { texto: "Canalizo meus sentimentos na busca por respostas e no desenvolvimento de novas soluções.", personagem: "Hange Zoë" }
    ]
  }
]
,
    "Jujutsu Kaisen": [
  {
    pergunta: "Qual é o seu critério para arriscar a própria vida por alguém?",
    opcoes: [
      { texto: "Ajudo qualquer pessoa que precise, sem hesitar.", personagem: "Yuji Itadori" },
      { texto: "Salvo apenas quem eu considero uma pessoa boa.", personagem: "Megumi Fushiguro" },
      { texto: "Não me importo muito com os outros, confio totalmente no meu próprio poder.", personagem: "Satoru Gojo" },
      { texto: "Arrisco-me por aqueles que conquistaram meu respeito e são verdadeiros comigo.", personagem: "Nobara Kugisaki" },
      { texto: "Faço isso estritamente por dever profissional e para proteger os mais jovens.", personagem: "Kento Nanami" },
      { texto: "Apenas por aqueles que compartilham da mesma visão de mundo e ideais que eu.", personagem: "Suguru Geto" }
    ]
  },
  {
    pergunta: "Como você reage quando as coisas saem totalmente do controle?",
    opcoes: [
      { texto: "Vou para a linha de frente e resolvo na base da força física.", personagem: "Yuji Itadori" },
      { texto: "Analiso a situação taticamente e invoco ajuda.", personagem: "Megumi Fushiguro" },
      { texto: "Relaxo, pois sei que sou forte o suficiente para consertar tudo sozinho.", personagem: "Satoru Gojo" },
      { texto: "Fico brava com os obstáculos, mas enfrento o perigo de frente com muita marra.", personagem: "Nobara Kugisaki" },
      { texto: "Mantenho o pragmatismo, olho o relógio e busco resolver tudo com máxima eficiência.", personagem: "Kento Nanami" },
      { texto: "Aproveito o caos para manipular o cenário a favor dos meus planos de longo prazo.", personagem: "Suguru Geto" }
    ]
  },
  {
    pergunta: "O que define a sua maior motivação no dia a dia?",
    opcoes: [
      { texto: "Garantir que as pessoas tenham uma morte digna e deixar uma marca positiva no mundo.", personagem: "Yuji Itadori" },
      { texto: "Cumprir minhas obrigações morais e proteger o potencial das pessoas que valem a pena.", personagem: "Megumi Fushiguro" },
      { texto: "Cultivar uma nova geração de aliados fortes para não precisar carregar o mundo sozinho.", personagem: "Satoru Gojo" },
      { texto: "Viver a vida intensamente sob os meus próprios termos, sem perder minha essência.", personagem: "Nobara Kugisaki" },
      { texto: "Garantir minha estabilidade financeira e realizar um trabalho bem-feito para poder descansar.", personagem: "Kento Nanami" },
      { texto: "Criar uma nova era onde aqueles que considero especiais possam ditar as regras.", personagem: "Suguru Geto" }
    ]
  },
  {
    pergunta: "Se você pudesse escolher um estilo de combate ou habilidade Jujutsu, qual seria?",
    opcoes: [
      { texto: "Aprimoramento físico bruto combinado com golpes carregados de energia concentrada.", personagem: "Yuji Itadori" },
      { texto: "Invocação de criaturas e táticas baseadas em sombras e versatilidade.", personagem: "Megumi Fushiguro" },
      { texto: "Controle absoluto sobre o espaço e uma defesa perfeita que ninguém consegue tocar.", personagem: "Satoru Gojo" },
      { texto: "Uso de ferramentas técnicas amaldiçoadas à distância para desestabilizar o alvo.", personagem: "Nobara Kugisaki" },
      { texto: "Ataques de precisão cirúrgica focados em expor e atingir pontos fracos específicos.", personagem: "Kento Nanami" },
      { texto: "Capacidade de absorver, controlar e comandar uma legião de espíritos aliados.", personagem: "Suguru Geto" }
    ]
    
  }
     ],

    "Demon Slayer": [
  {
    pergunta: "O que define a sua maior força de vontade?",
    opcoes: [
      { texto: "A minha empatia e o desejo de proteger minha família.", personagem: "Tanjiro Kamado" },
      { texto: "Superar meus medos e focar no que sei fazer de melhor.", personagem: "Zenitsu Agatsuma" },
      { texto: "Minha fúria indomável e instinto de combate.", personagem: "Inosuke Hashibira" },
      { texto: "O forte laço de sangue e a determinação de nunca perder minha humanidade.", personagem: "Nezuko Kamado" },
      { texto: "O senso de dever silencioso e a promessa de não deixar ninguém sofrer o mesmo que eu.", personagem: "Giyu Tomioka" },
      { texto: "Manter o coração aquecido e cumprir a obrigação de proteger os mais fracos.", personagem: "Kyojuro Rengoku" }
    ]
  },
  {
    pergunta: "Como você lida com situações de extrema pressão?",
    opcoes: [
      { texto: "Respiro fundo, analiso o cenário e sigo em frente.", personagem: "Tanjiro Kamado" },
      { texto: "Entro em pânico no início, mas resolvo quando a situação fica crítica.", personagem: "Zenitsu Agatsuma" },
      { texto: "Ataco o problema de frente sem pensar duas vezes.", personagem: "Inosuke Hashibira" },
      { texto: "Ajo de forma protetora e uso toda a minha força para conter a ameaça.", personagem: "Nezuko Kamado" },
      { texto: "Mantenho uma postura fria, contendo minhas emoções para golpear com precisão.", personagem: "Giyu Tomioka" },
      { texto: "Enfrento o momento com um sorriso no rosto e um otimismo inabalável.", personagem: "Kyojuro Rengoku" }
    ]
  },
  {
    pergunta: "Qual dessas qualidades você considera seu traço mais marcante?",
    opcoes: [
      { texto: "A gentileza pura, mesmo diante daqueles que erraram.", personagem: "Tanjiro Kamado" },
      { texto: "A sensibilidade aguçada para perceber o sentimento dos outros.", personagem: "Zenitsu Agatsuma" },
      { texto: "A coragem destemida de desafiar qualquer um que se julgue superior.", personagem: "Inosuke Hashibira" },
      { texto: "A resiliência silenciosa para resistir às maiores tentações.", personagem: "Nezuko Kamado" },
      { texto: "A quietude e a seriedade de quem prefere agir em vez de falar.", personagem: "Giyu Tomioka" },
      { texto: "O entusiasmo contagiante e a paixão que coloco em tudo o que faço.", personagem: "Kyojuro Rengoku" }
    ]
  },
  {
    pergunta: "Se você pudesse dominar uma técnica ou estilo de combate, qual seria?",
    opcoes: [
      { texto: "Uma combinação equilibrada de movimentos fluidos e precisos baseados na respiração.", personagem: "Tanjiro Kamado" },
      { texto: "Um único ataque executado na velocidade do relâmpago, imperceptível a olho nu.", personagem: "Zenitsu Agatsuma" },
      { texto: "Um estilo selvagem e imprevisível que usa o ambiente a meu favor.", personagem: "Inosuke Hashibira" },
      { texto: "Poderes regenerativos impressionantes e habilidades de combate corpo a corpo.", personagem: "Nezuko Kamado" },
      { texto: "Uma defesa absoluta que consegue anular qualquer ataque inimigo calmamente.", personagem: "Giyu Tomioka" },
      { texto: "Ataques devastadores e imponentes que envolvem o campo de batalha em pura energia.", personagem: "Kyojuro Rengoku" }
    ]
  }
    ],
    "Death Note": [
     
  {
    pergunta: "O que você faria se tivesse o poder de mudar a justiça do mundo?",
    opcoes: [
      { texto: "Eliminaria os criminosos por conta própria para criar um mundo perfeito.", personagem: "Light Yagami" },
      { texto: "Usaria a lei, a lógica e a investigação para capturar quem abusa do poder.", personagem: "L" },
      { texto: "Apoiaria quem está tentando fazer justiça, custe o que custar.", personagem: "Misa Amane" },
      { texto: "Não interferiria diretamente, apenas observaria o caos para me entreter.", personagem: "Ryuk" },
      { texto: "Analisaria friamente os fatos de longe, montando um quebra-cabeça perfeito para vencer.", personagem: "Near" },
      { texto: "Tentaria seguir meu senso moral, mesmo dividido entre o que é legal e o que parece certo.", personagem: "Matsuda" },
    ]
  },
  {
    pergunta: "Qual traço de personalidade melhor descreve você?",
    opcoes: [
      { texto: "Calculista, ambicioso e muito autoconfiante.", personagem: "Light Yagami" },
      { texto: "Excêntrico, altamente observador e focado em mistérios.", personagem: "L" },
      { texto: "Devoto, impulsivo e guiado pelas emoções.", personagem: "Misa Amane" },
      { texto: "Desapegado, curioso e fã de uma boa distração.", personagem: "Ryuk" },
      { texto: "Calmo, metódico e extremamente focado em resultados lógicos.", personagem: "Near" },
      { texto: "Ingênuo, leal e determinado a fazer o melhor pelo grupo.", personagem: "Matsuda" }
    ]
  },
  {
    pergunta: "Em um jogo de estratégia mental, qual é a sua principal arma?",
    opcoes: [
      { texto: "Manipular as expectativas do adversário e usar uma identidade falsa perfeita.", personagem: "Light Yagami" },
      { texto: "Isolar as variáveis e testar as reações do oponente de forma psicológica.", personagem: "L" },
      { texto: "Agir como uma distração imprevisível enquanto outros executam o plano principal.", personagem: "Misa Amane" },
      { texto: "Ficar de fora rindo da situação, já que sei de coisas que ninguém mais sabe.", personagem: "Ryuk" },
      { texto: "Montar estratégias baseadas em dados puros, sem deixar o ego atrapalhar.", personagem: "Near" },
      { texto: "Seguir as instruções dos líderes e dar o meu máximo para não atrapalhar.", personagem: "Matsuda" }
    ]
  },
  {
    pergunta: "Como você lida com o tédio ou com a rotina do dia a dia?",
    opcoes: [
      { texto: "Procuro grandes desafios intelectuais que testem minha capacidade de mudar a sociedade.", personagem: "Light Yagami" },
      { texto: "Fico imerso em enigmas complexos enquanto consumo meus doces favoritos.", personagem: "L" },
      { texto: "Busco a companhia de quem amo e me dedico a atividades criativas ou sociais.", personagem: "Misa Amane" },
      { texto: "Procuro algo completamente novo e divertido para passar o tempo (como maçãs suculentas).", personagem: "Ryuk" },
      { texto: "Ocupo minha mente com jogos de montar, dados ou quebra-cabeças complexos.", personagem: "Near" },
      { texto: "Gosto de conversar com colegas de trabalho e tentar manter o clima leve.", personagem: "Matsuda" }
    ]
  }
    ],
    "Fullmetal Alchemist": [
        
  {
    pergunta: "Qual princípio guia as suas ações cotidianas?",
    opcoes: [
      { texto: "A lei da troca equivalente: nada vem sem sacrifício.", personagem: "Edward Elric" },
      { texto: "A busca por gentileza, equilíbrio e paz para todos.", personagem: "Alphonse Elric" },
      { texto: "A ambição de subir na carreira para mudar o sistema por dentro.", personagem: "Roy Mustang" },
      { texto: "O desejo de apoiar quem amo usando minhas habilidades técnicas e dedicação.", personagem: "Winry Rockbell" },
      { texto: "A aplicação de uma justiça severa contra aqueles que quebraram as leis naturais.", personagem: "Scar" },
      { texto: "A lealdade inabalável e o cumprimento rigoroso do meu dever para proteger os aliados.", personagem: "Riza Hawkeye" }
    ]
  },
  {
    pergunta: "Como você reage quando comete um erro grave no passado?",
    opcoes: [
      { texto: "Fico obcecado em encontrar uma solução científica ou prática para consertá-lo.", personagem: "Edward Elric" },
      { texto: "Mantenho o otimismo e tento aprender com o erro sem guardar rancor.", personagem: "Alphonse Elric" },
      { texto: "Aceito a culpa e uso essa dor como combustível para meus planos futuros.", personagem: "Roy Mustang" },
      { texto: "Choro o que preciso, mas logo pego minhas ferramentas para consertar o estrago.", personagem: "Winry Rockbell" },
      { texto: "Deixo que o remorso se transforme em uma busca implacável por retribuição.", personagem: "Scar" },
      { texto: "Carrego o fardo silenciosamente e garanto que o erro nunca mais se repita.", personagem: "Riza Hawkeye" }
    ]
  },
  {
    pergunta: "Qual dessas áreas de conhecimento ou atuação mais chama a sua atenção?",
    opcoes: [
      { texto: "Pesquisa teórica aprofundada combinada com aplicações práticas e ágeis.", personagem: "Edward Elric" },
      { texto: "Estudos holísticos sobre a alma, conexões humanas e diplomacia.", personagem: "Alphonse Elric" },
      { texto: "Estratégia militar, política e grandes jogadas de influência de bastidores.", personagem: "Roy Mustang" },
      { texto: "Engenharia mecânica, criação de próteses e desenvolvimento de novas tecnologias.", personagem: "Winry Rockbell" },
      { texto: "Tradições antigas, combate corpo a corpo e desconstrução de sistemas corrompidos.", personagem: "Scar" },
      { texto: "Táticas de precisão à distância, vigilância e suporte estratégico imediato.", personagem: "Riza Hawkeye" }
    ]
  },
  {
    pergunta: "Diante de um conflito inevitável, qual é a sua postura principal?",
    opcoes: [
      { texto: "Parto para o confronto direto usando minha agilidade e improviso intelectual.", personagem: "Edward Elric" },
      { texto: "Tento dialogar primeiro, mas uso técnicas defensivas robustas se não houver escolha.", personagem: "Alphonse Elric" },
      { texto: "Assumo o controle da situação com ataques avassaladores de médio alcance.", personagem: "Roy Mustang" },
      { texto: "Fico na retaguarda garantindo que todo o equipamento e suporte estejam impecáveis.", personagem: "Winry Rockbell" },
      { texto: "Avanço com força destrutiva focado unicamente em desmantelar a origem do problema.", personagem: "Scar" },
      { texto: "Mantenho a compostura fria e dou cobertura precisa para neutralizar os alvos mais perigosos.", personagem: "Riza Hawkeye" }
    ]
  }
  ],
    "Hunter x Hunter": [

  {
    pergunta: "O que você mais valoriza em uma longa jornada?",
    opcoes: [
      { texto: "A emoção de descobrir coisas novas e fazer amigos.", personagem: "Gon Freecss" },
      { texto: "A lealdade e a proteção de quem caminha ao meu lado.", personagem: "Killua Zoldyck" },
      { texto: "Alcançar a estabilidade financeira ou o sucesso profissional.", personagem: "Leorio" },
      { texto: "A oportunidade de obter justiça e honrar a memória do meu povo.", personagem: "Kurapika" },
      { texto: "Encontrar oponentes formidáveis que façam meu sangue ferver de verdade.", personagem: "Hisoka" },
      { texto: "O autoaperfeiçoamento constante e a sabedoria adquirida com a experiência.", personagem: "Netero" }
    ]
  },
  {
    pergunta: "Qual é a sua reação ao se deparar com uma injustiça?",
    opcoes: [
      { texto: "Fico extremamente furioso e ajo por puro instinto.", personagem: "Gon Freecss" },
      { texto: "Analiso o perigo primeiro e ajo de forma cirúrgica e fria.", personagem: "Killua Zoldyck" },
      { texto: "Reclamo alto e bato de frente usando argumentos inflamados.", personagem: "Leorio" },
      { texto: "Deixo meu sangue ferver e traço um plano implacável de retribuição.", personagem: "Kurapika" },
      { texto: "Acho a situação divertida e observo para ver quem vai quebrar primeiro.", personagem: "Hisoka" },
      { texto: "Observo com tranquilidade, intervindo apenas se achar que vale a pena testar os envolvidos.", personagem: "Netero" }
    ]
  },
  {
    pergunta: "Qual traço melhor define a sua postura estratégica em um confronto?",
    opcoes: [
      { texto: "Persistência inabalável, encontrando soluções simples onde outros veem barreiras.", personagem: "Gon Freecss" },
      { texto: "Cálculo rápido de riscos, explorando aberturas com velocidade e precisão.", personagem: "Killua Zoldyck" },
      { texto: "Postura protetora, colocando a integridade dos meus aliados acima da vaidade.", personagem: "Leorio" },
      { texto: "Preparação meticulosa e uso de restrições rígidas para garantir a vitória absoluta.", personagem: "Kurapika" },
      { texto: "Uso de blefes, truques psicológicos e ilusões para desestabilizar a mente do oponente.", personagem: "Hisoka" },
      { texto: "Calma absoluta e meditação profunda, desferindo golpes impossíveis de serem previstos.", personagem: "Netero" }
    ]
  },
  {
    pergunta: "Como você lida com as suas próprias fraquezas ou limitações?",
    opcoes: [
      { texto: "Enfrento-as de peito aberto, treinando até conseguir quebrar a barreira.", personagem: "Gon Freecss" },
      { texto: "Penso racionalmente para contorná-las e evitar expor meu lado vulnerável.", personagem: "Killua Zoldyck" },
      { texto: "Reconheço que preciso de ajuda e me apoio nos meus amigos mais fortes.", personagem: "Leorio" },
      { texto: "Aceito qualquer sacrifício pessoal ou risco para obter o poder necessário.", personagem: "Kurapika" },
      { texto: "Não me importo com limitações, pois confio plenamente na minha capacidade de improvisar.", personagem: "Hisoka" },
      { texto: "Dedico décadas da minha vida ao isolamento e à gratidão para transcender meus limites humanos.", personagem: "Netero" }
    ]
  }
]
,
    "Neon Genesis Evangelion": [
      
  {
    pergunta: "Como você se comporta em um ambiente de aprendizado ou treinamento?",
    opcoes: [
      { texto: "Sigo as instruções à risca para não errar ou desagradar ninguém.", personagem: "Shinji Ikari" },
      { texto: "Quero ser a melhor de todas e encaro os meus colegas como inferiores ou rivais.", personagem: "Asuka Langley" },
      { texto: "Fico na minha, focada apenas em cumprir as ordens e a missão designada.", personagem: "Rei Ayanami" },
      { texto: "Tento equilibrar a seriedade profissional com um clima descontraído para motivar o grupo.", personagem: "Misato Katsuragi" },
      { texto: "Mostro uma facilidade natural e encaro tudo com leveza, sem precisar competir.", personagem: "Kaworu Nagisa" },
      { texto: "Observo tudo de longe e avalio friamente quem possui real utilidade para os meus planos.", personagem: "Gendo Ikari" }
    ]
  },
  {
    pergunta: "O que te inspira a ser alguém melhor?",
    opcoes: [
      { texto: "A busca por aprovação e o medo de decepcionar as pessoas importantes para mim.", personagem: "Shinji Ikari" },
      { texto: "O orgulho de provar o meu próprio valor ao mundo e ser a número um.", personagem: "Asuka Langley" },
      { texto: "Os meus vínculos e o dever de proteger as pessoas com quem me importo.", personagem: "Rei Ayanami" },
      { texto: "O desejo de superar traumas do passado e criar um futuro seguro para os mais jovens.", personagem: "Misato Katsuragi" },
      { texto: "A beleza intrínseca das conexões humanas e a esperança de trazer felicidade a alguém.", personagem: "Kaworu Nagisa" },
      { texto: "A determinação cega de alcançar um objetivo final absoluto, custe o que custar.", personagem: "Gendo Ikari" }
    ]
  },
  {
    pergunta: "Diante de um dilema emocional complexo, como você costuma reagir?",
    opcoes: [
      { texto: "Me isolo e fujo do problema até não ter mais escolha a não ser enfrentá-lo.", personagem: "Shinji Ikari" },
      { texto: "Fico agressivo e desconto minha frustração nos outros para esconder minha vulnerabilidade.", personagem: "Asuka Langley" },
      { texto: "Aceito a situação passivamente, questionando meu próprio propósito e existência.", personagem: "Rei Ayanami" },
      { texto: "Busco afogar minhas mágoas temporariamente, mas assumo a liderança quando a crise aperta.", personagem: "Misato Katsuragi" },
      { texto: "Mantenho a serenidade e ofereço palavras de conforto e empatia incondicional.", personagem: "Kaworu Nagisa" },
      { texto: "Suprimo completamente qualquer empatia e tomo a decisão mais fria e calculista.", personagem: "Gendo Ikari" }
    ]
  },
  {
    pergunta: "Como você define o seu conceito ideal de conexões humanas?",
    opcoes: [
      { texto: "Algo assustador que pode me magoar, mas que eu desejo profundamente no fundo.", personagem: "Shinji Ikari" },
      { texto: "Uma disputa onde preciso manter minha independência para nunca ser dominada.", personagem: "Asuka Langley" },
      { texto: "Algo novo e misterioso que estou aprendendo a compreender aos poucos.", personagem: "Rei Ayanami" },
      { texto: "Uma responsabilidade de acolher e proteger aqueles que foram deixados de lado.", personagem: "Misato Katsuragi" },
      { texto: "Uma dádiva valiosa onde o sacrifício pessoal pela paz do outro faz sentido.", personagem: "Kaworu Nagisa" },
      { texto: "Apenas ferramentas ou degraus para alcançar o reencontro com o que realmente perdi.", personagem: "Gendo Ikari" }
    ]
  }
]
,   
    "Nanatsu no Taizai": [

    
  {
    pergunta: "Como você se comporta em um ambiente de aprendizado ou treinamento?",
    opcoes: [
      { texto: "Lido com tudo de forma leve e descontraída, mas mostro meu verdadeiro poder se mexerem com quem eu amo.", personagem: "Meliodas" },
      { texto: "Me esforço ao máximo para provar meu valor, misturando determinação com um toque de drama.", personagem: "Diane" },
      { texto: "Não ligo muito para as regras e prefiro testar meus limites na prática, no meu próprio ritmo.", personagem: "Ban" },
      { texto: "Prefiro evitar a fadiga, mas protejo meu espaço com unhas e dentes quando a situação exige seriedade.", personagem: "King" },
      { texto: "Observo tudo de forma puramente analítica para tentar compreender os sentimentos e reações alheias.", personagem: "Gowther" },
      { texto: "Busco testar novas teorias e adquirir o máximo de conhecimento possível através de experimentos.", personagem: "Merlin" },
      { texto: "Fico na minha enquanto há sol, mas minha presença impõe respeito absoluto quando o dever chama.", personagem: "Escanor" }
    ]
  },
  {
    pergunta: "O que te inspira a ser alguém melhor?",
    opcoes: [
      { texto: "A promessa inabalável de proteger quem eu amo e pôr fim a um ciclo eterno de sofrimento.", personagem: "Meliodas" },
      { texto: "O desejo de proteger meu clã, meus amigos e o lugar ao qual eu realmente pertenço.", personagem: "Diane" },
      { texto: "A determinação de reconquistar o que me foi tirado e manter vivas as minhas conexões mais profundas.", personagem: "Ban" },
      { texto: "A responsabilidade de cuidar do meu reino e a vontade de ser alguém confiável para quem amo.", personagem: "King" },
      { texto: "A busca incessante por respostas para desvendar os mistérios do coração e das emoções humanas.", personagem: "Gowther" },
      { texto: "A curiosidade sem limites de dominar toda a magia e os segredos ocultos do universo.", personagem: "Merlin" },
      { texto: "O orgulho de usar minha força avassaladora para defender meus companheiros necessitados.", personagem: "Escanor" }
    ]
  },
  {
    pergunta: "Qual é a sua reação imediata ao entrar em um combate contra um oponente poderoso?",
    opcoes: [
      { texto: "Mantenho o sorriso no rosto e o controle total, devolvendo o ataque do inimigo com o dobro de força.", personagem: "Meliodas" },
      { texto: "Uso o próprio solo e o ambiente ao meu redor para esmagar a ameaça com força bruta.", personagem: "Diane" },
      { texto: "Fico empolgado com o perigo e tento roubar a força ou a agilidade do adversário para mim.", personagem: "Ban" },
      { texto: "Ataco à distância com precisão cirúrgica, alternando as formas da minha arma mágica conforme a necessidade.", personagem: "King" },
      { texto: "Tento invadir a mente do inimigo para reescrever suas memórias ou quebrar seu psicológico.", personagem: "Gowther" },
      { texto: "Anulo os feitiços do oponente e crio uma estratégia mágica perfeita que ele jamais conseguiria prever.", personagem: "Merlin" },
      { texto: "Sinto pena do adversário por ousar ficar no meu caminho, liberando um calor que derrete tudo ao redor.", personagem: "Escanor" }
    ]
  },
  {
    pergunta: "Como você lida com os seus próprios arrependimentos ou falhas do passado?",
    opcoes: [
      { texto: "Carrego o fardo silenciosamente por séculos, focando apenas em manter viva a minha promessa.", personagem: "Meliodas" },
      { texto: "Tento focar no presente e no carinho das pessoas que estão comigo agora para superar a dor.", personagem: "Diane" },
      { texto: "Aceito as marcas que o passado me deixou e faço o que for preciso para dar a volta por cima.", personagem: "Ban" },
      { texto: "Uso o peso dos meus erros como um lembrete constante para me tornar um líder mais maduro.", personagem: "King" },
      { texto: "Tento isolar essas memórias de forma lógica para entender racionalmente o impacto delas em mim.", personagem: "Gowther" },
      { texto: "Paro o meu próprio tempo ou dedico minha vida eterna à pesquisa para contornar qualquer erro.", personagem: "Merlin" },
      { texto: "Escondo minhas inseguranças atrás de uma postura imponente e orgulhosa para nunca vacilar.", personagem: "Escanor" }
    ]
  }
]
    
};
// 3. Mapeamento de Elementos
const welcomeText = document.getElementById('welcome-text');
const startCharBtn = document.getElementById('start-char-btn');
const charHomeScreen = document.getElementById('char-home-screen');
const charQuizScreen = document.getElementById('char-quiz-screen');
const charResultScreen = document.getElementById('char-result-screen');
const charQuestionText = document.getElementById('char-question-text');
const charOptionsContainer = document.getElementById('char-options-container');
const charResultText = document.getElementById('char-result-text');

let perguntasAtuais = [];
let perguntaIndex = 0;
let pontuacaoPersonagens = {};

// 4. Inicialização baseada no Anime da URL
if (animeSelecionado && bancoDeDadosPorAnime[animeSelecionado]) {
    welcomeText.innerText = `Você veio do universo de ${animeSelecionado}! Vamos descobrir quem você seria lá dentro.`;
    perguntasAtuais = bancoDeDadosPorAnime[animeSelecionado];
} else {
    // Caso o usuário tente acessar a página direto sem jogar o primeiro quiz
    welcomeText.innerText = "Universo desconhecido! Volte e jogue o quiz de universos primeiro.";
    startCharBtn.style.display = "none";
}

// 5. Fluxo do Jogo
function iniciarQuizPersonagem() {
  document.body.style.backgroundImage = "url('fundo.jpg')";
document.body.style.backgroundSize = "cover";
document.body.style.backgroundPosition = "center";

    charHomeScreen.classList.add('hidden');
    charQuizScreen.classList.remove('hidden');
    perguntaIndex = 0;
    pontuacaoPersonagens = {};

    mostrarPerguntaPersonagem();
}

function mostrarPerguntaPersonagem() {
    charOptionsContainer.innerHTML = '';
    const dadosPergunta = perguntasAtuais[perguntaIndex];
    charQuestionText.innerText = dadosPergunta.pergunta;

    dadosPergunta.opcoes.forEach(opcao => {
        const botao = document.createElement('button');
        botao.innerText = opcao.texto;
        botao.addEventListener('click', () => computarVotoPersonagem(opcao.personagem));
        charOptionsContainer.appendChild(botao);
    });
}

function computarVotoPersonagem(personagem) {
    pontuacaoPersonagens[personagem] = (pontuacaoPersonagens[personagem] || 0) + 1;
    perguntaIndex++;

    if (perguntaIndex < perguntasAtuais.length) {
        mostrarPerguntaPersonagem();
    } else {
        exibirResultadoPersonagem();
    }
}

const fundosPersonagens = {
    "Naruto Uzumaki": "imagens/char_naruto.jpg",
    "Sasuke Uchiha": "imagens/char_sasuke.jpg",
    "Kakashi Hatake": "imagens/char_kakashi.jpg",
    "Luffy": "imagens/char_luffy.jpg",
    "Zoro": "imagens/char_zoro.jpg",
    "Nami": "imagens/char_nami.jpg"

    // Adicione os outros personagens do seu top 10 aqui...
}

function exibirResultadoPersonagem() {
    charQuizScreen.classList.add('hidden');
    charResultScreen.classList.remove('hidden');

    const personagemVencedor = Object.keys(pontuacaoPersonagens).reduce((a, b) => pontuacaoPersonagens[a] > pontuacaoPersonagens[b] ? a : b);

    charResultText.innerHTML = `No universo de ${animeSelecionado}, você seria:<br><br><span style="color: #2ed573; font-size: 28px; font-weight: bold;">⚔️ ${personagemVencedor} ⚔️</span>`;

    // CÓDIGO PARA MUDAR O FUNDO DA PÁGINA PARA O PERSONAGEM:
    if (fundosPersonagens[personagemVencedor]) {
        document.body.style.backgroundImage = `url('${fundosPersonagens[personagemVencedor]}')`;
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
    }
}


startCharBtn.addEventListener('click', iniciarQuizPersonagem);