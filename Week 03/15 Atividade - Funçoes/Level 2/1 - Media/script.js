var qtd = 3
var sum = (number1, number2, number3 ) => number1 + number2 + number3 
var average = () => sum(input1, input2, input3)/3

var verify_input = function (number) {
    if (isNaN(number) || number == 0) {
        // alert(`Numero inválido! \n Recarregue a página e tente novamente.`)
        return false
    } else {
        return true
    }
}

input1 = Number(prompt(`Insira o primeiro numero:`))
input2 = Number(prompt(`Insira o segundo numero:`))
input3 = Number(prompt(`Insira o terceiro numero:`))

if (verify_input(input1) && verify_input(input2) && verify_input(input3)) alert(average().toPrecision(3))
else alert(`Numero inválido! \n Recarregue a página e tente novamente.`)