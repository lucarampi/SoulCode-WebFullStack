
var plano = parseInt(prompt("Digite o código do produto: \n 100) Cachorro quente  \n 101) Bauru simples \n 102) Bauru com ovo \n 103) Hambúrger \n 104) Cheeseburguer \n 105) Refrigerante"))
var qtd = parseInt(prompt("Digite a quantidade: "))
var preco = 0

if (isNaN(qtd)) {
    alert("A quantidade foi inserida incorretamente! \n Verifique e tente novamente.")
} else {
    switch (plano) {
        case 100:
            preco = 1.2
            alert(`Valor do pedido: R$${qtd * preco}`)
            break;
        case 101:
            preco = 1.3
            alert(`Valor do pedido: R$${qtd * preco}`)
            break;
        case 102:
            preco = 1.5
            alert(`Valor do pedido: R$${qtd * preco}`)
            break;
        case 103:
            preco = 1.2
            alert(`Valor do pedido: R$${qtd * preco}`)
            break;
        case 104:
            preco = 1.3
            alert(`Valor do pedido: R$${qtd * preco}`)
            break;
        case 105:
            preco = 1.0
            alert(`Valor do pedido: R$${qtd * preco}`)
            break;

        default:
            alert("Produto inválido! \n Recarregue a página e tente novamente.")
            break;
    }
}