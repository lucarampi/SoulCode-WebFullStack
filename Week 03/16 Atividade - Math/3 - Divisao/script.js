var verify_input = function (number) {
    if (isNaN(number) || number <= 0) {
        // alert(`Numero inválido! \n Recarregue a página e tente novamente.`)
        return false
    } else {
        return true
    }
}
function divisao(num1, num2) {
    if (input1 < input2) {
        num1 = input2
        num2 = input1
    } else {
        num1 = input1
        num2 = input2
    }
    return Math.floor(num1 / num2)
}

input1 = Number(prompt("Digite um numero :"))
input2 = Number(prompt("Digite outro numero:"))

if (verify_input(input1) && verify_input(input2)) {
    alert(`
        Primeiro: ${input1}
        Segundo: ${input2}
            Resultado da divisão: ${divisao(input1,input2)}
        `)
} else alert(`Valor inserido esta incorreto.
Recarregue a página e tente novamente`)

