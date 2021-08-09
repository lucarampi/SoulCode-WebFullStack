var verify_input = function (number) {
    if (isNaN(number) || number <= 0) {
        // alert(`Numero inválido! \n Recarregue a página e tente novamente.`)
        return false
    } else {
        return true
    }
}

var soma
function eleva(num1) {
    soma = 0
    for (i = 2; i < 5; i++) {
        document.write(`<br> Elevado a ${i}: ${Math.pow(num1,i)}`)
        soma += num1 ** i
    }
    return "<br> Soma: " + soma
}

var input1 = Number(prompt("Digite um numero :"))
var input2 = Number(prompt("Digite outro numero:"))
var input3 = Number(prompt("Digite mais um numero:"))

if (verify_input(input1) && verify_input(input2) && verify_input(input3)) {
    document.write(`<br> Primeiro:`, input1)
    document.write(eleva(input1), "<br>")
    document.write(`<br> Segundo:`, input2)
    document.write(eleva(input2), "<br>")
    document.write(`<br> Terceiro:`, input3)
    document.write(eleva(input3), "<br>")
} else alert(`Valor inserido esta incorreto.
Recarregue a página e tente novamente`)

