var print_signal = (signal) => {
    if (signal > 0) alert(`P: Positivo`)
    else alert(`N: Negativo`)
}

var verify_input = function (number) {
    if (isNaN(number) || number == 0) {
        // alert(`Numero inválido! \n Recarregue a página e tente novamente.`)
        return false
    } else {
        return true
    }
}

input = prompt(`Insira um numero`)

if (verify_input(input)) print_signal(input)
else alert(`Genero inválido! \n Recarregue a página e tente novamente.`)
Math.floor




