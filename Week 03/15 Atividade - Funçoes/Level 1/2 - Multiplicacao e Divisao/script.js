var num1 = 0, num2 = 0

var calculo = (number1, number2) => number1*number2

var verify_input = function (number) {
    if (isNaN(number) || number == 0 || !Number.isInteger(number)) {
        // alert(`Numero inválido! \n Recarregue a página e tente novamente.`)
       return false
    } else {
        return true 
    }
}


num1 =Number(prompt("Insira o primeiro numero:"))
num2 =Number(prompt("Insira o segundo numero:"))

if (verify_input(num1) && verify_input(num2)) alert (calculo(num1,num2)/2)
else alert(`Numero inválido! \n Recarregue a página e tente novamente.`)





