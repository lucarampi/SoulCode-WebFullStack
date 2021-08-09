var numero = 0
var verify_input = function (number) {
    if (isNaN(number) || number < 0) {
        // alert(`Numero inválido! \n Recarregue a página e tente novamente.`)
        return false
    } else {
        return true
    }
}

function raiz_quadrada(number) {
    return Math.round(Math.sqrt(number))
}

var input1 = Number(prompt("Insira o primeiro numero: "))
var input2 = Number(prompt("Insira o segundo numero: "))
if (verify_input(input1) && verify_input(input2)) {
    alert(`
    Primeiro: ${input1}
        Quadrado: ${raiz_quadrada(input1)} 
    
    Segundo: ${input2}
        Quadrado: ${raiz_quadrada(input2)}
    `)
}
else alert(`Numero inválido! \n Recarregue a página e tente novamente.`)