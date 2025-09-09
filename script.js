document.addEventListener("DOMContentLoaded", () => {

    const botaoIniciar = document.querySelector("#botaoIniciar");
    const secaoIniciar = document.querySelector("#iniciar");
    const secaoLembrete = document.querySelector("#lembrete");
    const botaoAvancar = document.querySelector("#botaoAvancar");
    const secaoPergunta = document.querySelector("#pergunta");

    botaoIniciar.addEventListener("click", () => {
        secaoIniciar.style.display = "none";
        secaoLembrete.style.display = "flex";
    })
    botaoAvancar.addEventListener("click", () => {
        secaoLembrete.style.display = "none";
        secaoPergunta.style.display = "flex";

        
        const perguntas = [
            "Quando dou feedback, utilizo exemplos específicos como base para discussão.",
            "Tento não adivinhar por que a pessoa agiu de determinada maneira. Prefiro me concentrar no que realmente foi feito.",
            "Focalizo o que a pessoa fez, não sua personalidade ou atitude.",
            "Sempre que possível, dou feedback imediatamente após o evento.",
            "Digo às pessoas o que elas fizeram corretamente e também o que elas fizeram de errado.",
            "Faço de tudo para não perder a calma nem me exceder ao dar feedback corretivo.",
            "Quando dou feedback, vou direto ao ponto, sem rodeios.",
            "Não fico aguardando uma oportunidade para surpreender o funcionário fazendo algo errado.",
            "Quando dou feedback, descrevo como me sinto a respeito do que aconteceu.",
            "Quando estou corrigindo um comportamento, incentivo o outro a relatar seu próprio lado da história.",
            "Quando dou feedback corretivo, elaboro algumas soluções possíveis antes do encontro.",
            "Utilizo exemplos específicos ao dar feedback, para garantir que estou sendo muito claro.",
            "Ao dar feedback, baseio-me em comportamentos.",
            "Dou feedback em momentos mais tranqüilos, quando nenhuma das partes está pressionada pelo tempo.",
            "Acredito que a pessoa merece saber o que está fazendo corretamente, assim como o que precisa ser melhorado.",
            "Tento dar feedback corretivo quando posso manter a calma e agir de maneira objetiva.",
            "Ao dar feedback, não evito contato visual. Ao contrário, faço questão de olhar diretamente para a outra pessoa.",
            "Para mim, dar feedback é uma oportunidade de ajudar alguém, não uma chance de jogar em cima do outro algo que estava entalado na minha garganta.",
            "Fico atento para comunicar meus sentimentos, em vez de culpar a outra pessoa.",
            "Ao tentar corrigir um comportamento, uso perguntas abertas e explico o que estou pensando para garantir que estou compreendendo direito a situação.",
            "Tento elaborar cada mensagem de feedback de acordo com a necessidade da pessoa.",
            "Tento saber o que aconteceu, não fazer deduções.",
            "Ao dar feedback, tento evitar rótulos do tipo “irresponsável”, “bom” ou “ruim”.",
            "Evito dar feedback corretivo na frente dos outros.",
            "Tento ser justo, equilibrando o uso de feedback positivo e corretivo.",
            "Ao corrigir um comportamento específico, me apóio no “aqui e agora” e evito fazer referências ao passado.",
            "Quando dou feedback, me concentro em uma ou duas questões de alta prioridade.",
            "Ao oferecer feedback, não dou conselho a menos que a outra parte solicite.",
            "Quando dou feedback, descrevo como me sinto para que a pessoa possa entender o impacto do comportamento em discussão.",
            "Quando dou feedback corretivo, faço muitas perguntas para que eu possa analisar a situação do ponto de vista da outra pessoa."
        ];

        var i = 0;
        let textoPergunta = document.querySelector("#textoPergunta");
        textoPergunta.textContent = perguntas[i];

        let respostas = {};
          
        let selecionados = {};
    
        const proxima = document.querySelector("#proxima");
        const anterior = document.querySelector("#anterior");
        let opcaoSelecionada = null;

        function salvarOpcao() {
            document.querySelectorAll('input[name="opcao"]').forEach((opcao) => {
                if (opcao.checked) {
                    opcaoSelecionada = opcao.value;
                }
                opcao.checked = false;
            });
        
            respostas[i] = opcaoSelecionada;
        }
        function atualizarProgresso(){
            let barraProgresso = document.querySelector(".progress-bar");
            let textoProgresso = document.querySelector("#textoProgresso");

            textoProgresso.textContent = `${i + 1} de 30`;
            let porcentagem = (1 + i) * 100 / 30;
            barraProgresso.style.width = `${porcentagem}%`;
            console.log(textoProgresso.textContent)
        }

        atualizarProgresso();
        
        proxima.addEventListener("click", () => {
            
            if (i < 30){
                salvarOpcao();

                i++;
                textoPergunta.textContent = perguntas[i];
                console.log(respostas);
                
                let opcoes = document.querySelectorAll('input[name="opcao"]');
                let indiceOpcao = Math.abs(respostas[i] - 3);
                
                if (!isNaN(indiceOpcao)){
                    opcoes[indiceOpcao].checked = true;
                }

                atualizarProgresso();
            }
        });
        anterior.addEventListener("click", () => {
            if (i > 0) {
                salvarOpcao();
                console.log(respostas);
                i--;
                console.log(respostas[i])
                let opcoes = document.querySelectorAll('input[name="opcao"]');
                let indiceOpcao = Math.abs(respostas[i] - 3);
                opcoes[indiceOpcao].checked = true;

                textoPergunta.textContent = perguntas[i];
                atualizarProgresso();
            }
        })

        
        
    })

    
    
    // Fazendo o gráfico
    const ctx = document.getElementById('grafico').getContext('2d');
    
    const dados = {
        labels: [
            "Elaboração de um plano",
            "Abordagem específica",
            "Foco em comportamento",
            "Escolha de hora e local",
            "Feedback equilibrado",
            "Feedback relevante",
            "Técnicas eficientes",
            "Estilo eficaz",
            "Descrição de sentimentos",
            "Capacidade de ouvir"
        ],
        datasets: [{
            label: "Pontuação",
            data: [7, 3.5, 9, 5, 2, 4, 6.5, 7.3, 8.8, 8.7],
            backgroundColor: "rgba(30, 64, 175, 1)" // cor das barras
        }]
    };
    
    const config = {
        type: 'bar', // tipo: gráfico de barras
        data: dados,
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    beginAtZero: true, // eixo x começa no 0
                    max: 10 // limite máximo 10, igual no seu gráfico
                }
            }
        }
    };
    
    new Chart(ctx, config);
})