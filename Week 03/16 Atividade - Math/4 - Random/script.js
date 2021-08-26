var verify_input = function (number) {
    if (isNaN(number) || number <= 0) {
        // alert(`Numero inválido! \n Recarregue a página e tente novamente.`)
        return false
    } else {
        return true
    }
}

var input1 = Number(prompt("Digite um numero :"))
var nrandom = Math.floor(Math.random() * 1000)



if (verify_input(input1)) {
    alert(`
    Seu numero: ${input1}
    Numero aleatório: ${nrandom}
    Resultado: ${Math.abs(nrandom - input1)}
    `)
} else alert(`Valor inserido esta incorreto.
Recarregue a página e tente novamente`)

