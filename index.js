const readline = require("node:readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const options = ["🪨 Pedra", "📜 Papel", "✂️ Tesoura"]

function home() {
    console.log("\n[1] Começar jogo")
    console.log("[0] Sair")

    rl.question("Escolha uma opção: ", answer => {
        const res = Number(answer)

        if (isNaN(res)) {
            console.log("Por favor, digite um número válido.")
            return home()
        }

        if (res === 1) {
            game()
        } else if (res === 0) {
            console.log("Encerrando...")
            rl.close()
        } else {
            console.log("Opção inválida.")
            home()
        }
    })
}

function game() {
    console.log("\n[1] 🪨  Pedra")
    console.log("[2] 📜 Papel")
    console.log("[3] ✂️  Tesoura")

    rl.question("Escolha sua jogada: ", answer => {
        const res = Number(answer)

        if (isNaN(res) || res < 1 || res > 3) {
            console.log("Escolha inválida. Tente novamente.")
            return game()
        }

        const userMove = res - 1
        const pcOption = Math.floor(Math.random() * options.length)

        console.log(`\nVocê escolheu: ${options[userMove]}`)
        console.log(`Bot escolheu: ${options[pcOption]}`)

        if (userMove === pcOption) {
            console.log("Resultado: Empate!")
        } else if (
            (userMove === 0 && pcOption === 2) ||
            (userMove === 1 && pcOption === 0) ||
            (userMove === 2 && pcOption === 1)
        ) {
            console.log("Resultado: Você venceu!")
        } else {
            console.log("Resultado: O bot venceu!")
        }

        home()
    })
}

home()