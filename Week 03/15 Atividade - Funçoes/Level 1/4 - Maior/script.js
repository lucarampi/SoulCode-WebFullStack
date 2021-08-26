var greater = (number1, number2) => {
    if (number1 > number2) return `${number1} é maior que ${number2}`
    else if (number1 == number2) return `${number2} é igual a ${number1}`
    else return `${number2} é maior que ${number1} `
}

var verify_input = function (number) {
    if (isNaN(number) || number == 0 || !Number.isInteger(number)) {
        // alert(`Numero inválido! \n Recarregue a página e tente novamente.`)
        return false
    } else {
        return true
    }
}

input1 = Number(prompt(`Insira o primeiro numero:`))
input2 = Number(prompt(`Insira o segundo numero:`))

if (verify_input(input1) && verify_input(input2)) alert(greater(input1,input2))
else alert(`Numero inválido! \n Recarregue a página e tente novamente.`)





