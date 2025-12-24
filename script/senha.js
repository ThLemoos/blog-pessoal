
const senhaCorreta = "95343381Th@";

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
