var verify_input = function (number) {
    if (isNaN(number) || number < 2 || !Number.isInteger(number)) {
        // alert(`Numero inválido! \n Recarregue a página e tente novamente.`)
        return false
    } else {
        return true
    }
}

var primo = (atual) => {
    for (i = 2; i <= atual; i++) {
        if (!(i % 2 == 0 || i % 3 == 0 || i % 5 == 0 || i % 7 == 0) || (i == 2 || i == 3 || i == 5 || i == 7)) {
            document.write(`O numero ${i} é primo`, "<br>")
        }
        else document.write(`O numero ${i} não é primo`, "<br>")
    }
}


input1 = Number(prompt(`Insira o primeiro numero:`))

if (verify_input(input1)) primo(input1)
else alert(`Numero inválido! \n Recarregue a página e tente novamente.`)





