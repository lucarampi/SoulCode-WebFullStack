var qtd = 3
var sum = (number1, number2, number3) => number1 + number2 + number3
var greater = (n1, n2, n3) => {
         if (n1 < n2 && n2 < n3) return n3
    else if (n1 < n3 && n3 < n2) return n2
    else if (n2 < n1 && n1 < n3) return n3
    else if (n2 < n3 && n3 < n1) return n1
    else if (n3 < n1 && n1 < n2) return n2
    else if (n3 < n2 && n2 < n1) return n1
}
var lower = (n1, n2, n3) => {
         if (n1 < n2 && n2 < n3) return n1
    else if (n1 < n3 && n3 < n2) return n1
    else if (n2 < n1 && n1 < n3) return n2
    else if (n2 < n3 && n3 < n1) return n2
    else if (n3 < n1 && n1 < n2) return n3
    else if (n3 < n2 && n2 < n1) return n3
}

var verifn2_input = function (number) {
    if (isNaN(number) || number == 0) {
        // alert(`Numero inválido! \n Recarregue a página e tente novamente.`)
        return false
    } else {
        return true
    }
}

var input1 = Number(prompt(`Insira o primeiro numero:`))
var input2 = Number(prompt(`Insira o segundo numero:`))
var input3 = Number(prompt(`Insira o terceiro numero:`))

if (verifn2_input(input1) && verifn2_input(input2) && verifn2_input(input3)) alert(`Maior numero: ${greater(input1,input2,input3)}
Menor numero: ${lower(input1,input2,input3)}
`)
else alert(`Numero inválido! \n Recarregue a página e tente novamente.`)