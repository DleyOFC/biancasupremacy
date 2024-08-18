document.addEventListener("DOMContentLoaded", function() {
    const cantadas = [
        "Você deve ser uma estrela, porque seu brilho ilumina o meu dia!",
        "Se beleza fosse tempo, você seria a eternidade.",
        "Você é como o sol: ilumina tudo ao seu redor e faz o dia melhor.",
        "Seu sorriso é a razão do meu dia ser mais feliz!",
        "Posso não ser um fotógrafo, mas posso nos imaginar juntos!",
    ];

    const generateCantadaButton = document.getElementById("generate-cantada");
    const cantadaText = document.getElementById("cantada-text");

    generateCantadaButton.addEventListener("click", function() {
        const randomIndex = Math.floor(Math.random() * cantadas.length);
        cantadaText.textContent = cantadas[randomIndex];
    });
});
