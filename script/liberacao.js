const dataLiberacao = new Date("Mar 21, 2026 00:00:00").getTime()

const contador = document.getElementById("contadorAniversario")
const box = document.getElementById("boxAniversario")
const cadeado = document.getElementById("cadeado")

function atualizar() {

    const agora = new Date().getTime()

    const diff = dataLiberacao - agora

    if (diff <= 0) {

        contador.innerHTML = "🎉 Surpresa liberada!"

        cadeado.innerHTML = "🔓"

        box.classList.remove("bloqueado")
        box.classList.add("aberto")

        return

    }

    const dias = Math.floor(diff / (1000 * 60 * 60 * 24))
    const horas = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutos = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))

    contador.innerHTML = `⏳ abre em ${dias}d ${horas}h ${minutos}m`

}

setInterval(atualizar, 1000)

atualizar()
