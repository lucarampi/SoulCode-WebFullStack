var numero = 0

function verifica_par() {
    numero = Number(prompt("Digite um numero:"))
    if (isNaN(numero) || numero == 0 || !Number.isInteger(numero)) {
        alert(`Numero inválido! \n Recarregue a página e tente novamente.`)
    } else {
        if (numero % 2 == 0) alert(`O numero ${numero} é PAR`)

        else alert(`O numero ${numero} é IMPAR`)
    }
}

verifica_par()

