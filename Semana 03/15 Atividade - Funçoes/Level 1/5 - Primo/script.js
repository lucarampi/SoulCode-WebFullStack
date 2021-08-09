var primo = (number) => {
    for (i = 2; i < number; i++)
        if (number % i === 0 || number < 2) return `O numero ${number} não é primo`
    return number ** 3
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

if (verify_input(input1)) alert(primo(input1))
else alert(`Numero inválido! \n Recarregue a página e tente novamente.`)





