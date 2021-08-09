var valor = 0

function calcula_desconto_5_por_cento() {
    valor = Number(prompt("Digite o valor total do produto/pedido:"))
    if (isNaN(valor) || valor < 0) {
        alert(`Ano inválido! \n Recarregue a página e tente novamente.`)
    } else {
        alert(`Desconto de R$${(valor * 0.05).toPrecision(2)}`)
    }
}

calcula_desconto_5_por_cento()






