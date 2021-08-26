var atual = 0
var maior = 0
var menor = 0
var cont = 1
var qtd = 0
var soma = 0
var media = 0



do {
    while (qtd == 0) {
        qtd = Number(prompt(`${cont})Insira a quantidade de numeros que deseja calcular a média:`))
        if (isNaN(qtd) || qtd <= 0) {
            alert(`Numero inválido! \n Tente novamente.`)
            qtd = 0
        }
    }

    atual = Number(prompt(`Insira o ${cont} numero:`))
    if (isNaN(atual)) {
        alert(`Numero inválido! \n Tente novamente.`)
    } else {
        if (atual > 0) {
            maior++
        }
        if (atual < 0) {
            menor++
        }
        cont++
        soma += atual
    }
} while (cont <= qtd);

alert(`Média dos numeros: ${media = soma / qtd} \n Quantidade de numero menores que zero: ${menor} \n Quantidade de numero maiores que zero: ${maior}`)