var verify_input = function (number) {
    if (isNaN(number)) {
        // alert(`Numero inválido! \n Recarregue a página e tente novamente.`)
        return false
    } else {
        return true
    }
}

var input1 = Number(prompt("Digite um angulo em graus:"))

if (verify_input(input1)) {
    alert(`
    Seno: ${Math.sin(input1 * (Math.PI) / 180)}
    Cosseno: ${Math.cos(input1 * (Math.PI) / 180)}
    Tangente: ${Math.tan(input1 * (Math.PI) / 180)}
    `)
} else alert(`Valor inserido esta incorreto.
Recarregue a página e tente novamente`)

