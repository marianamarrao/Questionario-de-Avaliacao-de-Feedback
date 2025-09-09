document.addEventListener("DOMContentLoaded", () => {

    // Aqui dentro vamos escrever o código do gráfico
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