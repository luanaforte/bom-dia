document.getElementById("bomDiaBtn").addEventListener("click", function() {
    const message = document.getElementById("message");
    message.classList.remove("hidden");
    message.style.opacity = 1;

    setTimeout(() => {
        message.style.opacity = 0;
        setTimeout(() => {
            message.classList.add("hidden");
        }, 1000); // tempo para a animação de desaparecimento
    }, 3000); // tempo que a mensagem ficará visível
});