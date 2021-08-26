var numero = 0

function verifica_multiplo_5() {
    numero = Number(prompt("Digite um numero:"))
    if (isNaN(numero) || numero == 0 || !Number.isInteger(numero)) {
        alert(`Numero inválido! \n Recarregue a página e tente novamente.`)
    } else {
        if (numero % 5 == 0) alert(`O numero ${numero} é multiplo de 5`)

        else alert(`O numero ${numero} não é multiplo de 5`)
    }
}

verifica_multiplo_5()

