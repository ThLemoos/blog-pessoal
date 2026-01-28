
const senhaCorreta = "personalidade";

function verificarSenha() {
    const senha = document.getElementById("senhaDigitada").value;
    const erro = document.getElementById("erro");

    if (senha === senhaCorreta) {
        liberarAcesso();
    } else {
        erro.innerText = "Senha incorreta!";
        erro.style.opacity = "1";
    }
}

function liberarAcesso() {
    const tela = document.getElementById("telaSenha");

    tela.style.opacity = "0";

    setTimeout(() => {
        tela.style.display = "none";
    }, 300);
}

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("btnRevelar");
    const img = document.getElementById("imagemSurpresa");
    const texto = document.getElementById("textoSuspense");

    if (!btn || !img || !texto) return;

    btn.addEventListener("click", () => {
        texto.innerText = "Carregando sua surpresa… 💕";
        btn.style.display = "none";

        setTimeout(() => {
            texto.style.display = "none";
            img.style.opacity = "1";
            img.style.transform = "translateY(0)";
        }, 1200);
    });
});

