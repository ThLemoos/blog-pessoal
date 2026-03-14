function iniciarExperiencia() {

    document.getElementById("musica").play()

    iniciarCoracoes()

    iniciarPetalas()

    const envelopes = document.querySelectorAll(".envelope")

    envelopes[0].classList.add("tremendo")

    setTimeout(() => {

        envelopes[0].classList.remove("tremendo")

        envelopes[0].classList.add("aberto")

        digitarTexto(envelopes[0].querySelector("p"))

        const segundo = envelopes[1].querySelector(".btn-abrir")

        setTimeout(() => {
            segundo.classList.add("mostrar")
        }, 1500)

    }, 600)

}

function iniciarCoracoes() {

    setInterval(() => {

        const heart = document.createElement("div");

        heart.className = "heart";

        heart.innerHTML = "❤️";

        heart.style.left = Math.random() * 100 + "vw";

        document.body.appendChild(heart);

        setTimeout(() => {

            heart.remove();

        }, 6000);

    }, 700);

}

function iniciarPetalas() {

    setInterval(() => {

        const petala = document.createElement("div");

        petala.className = "petala";

        petala.innerHTML = "🌹";

        petala.style.left = Math.random() * 100 + "vw";

        document.body.appendChild(petala);

        setTimeout(() => {

            petala.remove();

        }, 8000);

    }, 1200);

}

function abrirCartas() {

    const primeiroBotao = document.querySelector(".btn-abrir")

    primeiroBotao.classList.add("mostrar")

}

function abrirEsteEnvelope(botao) {

    const envelope = botao.parentElement

    envelope.classList.add("tremendo")

    setTimeout(() => {

        envelope.classList.remove("tremendo")
        envelope.classList.add("aberto")

        const texto = envelope.querySelector("p")
        digitarTexto(texto)

        botao.classList.remove("mostrar")

        const envelopes = document.querySelectorAll(".envelope")
        const index = Array.from(envelopes).indexOf(envelope)

        const proximo = envelope.nextElementSibling

        if (proximo) {

            const botaoProximo = proximo.querySelector(".btn-abrir")

            setTimeout(() => {
                botaoProximo.classList.add("mostrar")
            }, 1500)

        }

        if (index === envelopes.length - 1) {

            setTimeout(() => {

                explosaoFinal()

                const frase = document.getElementById("fraseFinal")
                if (frase) {
                    frase.classList.add("mostrar")
                }

                const foto = document.getElementById("fotoFinal")
                if (foto) {
                    foto.classList.add("mostrar")
                }

            }, 7000)

        }

    }, 600)

}

function digitarTexto(elemento) {

    const texto = elemento.getAttribute("data-text");

    let i = 0;

    function digitar() {

        if (i < texto.length) {

            elemento.innerHTML += texto.charAt(i);

            i++;

            setTimeout(digitar, 35);

        }

    }

    digitar();

}

function atualizarContador() {

    const dataAniversario = new Date("Mar 21, 2026 00:00:00").getTime();

    const agora = new Date().getTime();

    const diferenca = dataAniversario - agora;

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));

    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));

    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    document.getElementById("contador").innerHTML =
        dias + " dias • " +
        horas + " horas • " +
        minutos + " min • " +
        segundos + " seg";

}

setInterval(atualizarContador, 1000);

atualizarContador();

function explosaoFinal() {

    for (let i = 0; i < 40; i++) {

        setTimeout(() => {

            const heart = document.createElement("div")

            heart.className = "heart"

            heart.innerHTML = "❤️"

            heart.style.left = Math.random() * 100 + "vw"

            heart.style.fontSize = (20 + Math.random() * 30) + "px"

            document.body.appendChild(heart)

            setTimeout(() => {
                heart.remove()
            }, 4000)

        }, i * 120)

    }

}

function mostrarFraseFinal() {

    const frase = document.getElementById("fraseFinal")

    frase.classList.add("mostrar")

}

function mostrarFotoFinal() {

    const foto = document.getElementById("fotoFinal")

    foto.classList.add("mostrar")

}