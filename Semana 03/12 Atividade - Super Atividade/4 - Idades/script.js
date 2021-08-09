var atual = 0
var maior = 0
var menor = 0
var cont = 1
var qtd = 10


do {
    atual = Number(prompt(`Insira a idade da pessoa ${cont}:`))
    if (isNaN(atual) || atual <= 0) {
        alert(`Idade inválida! \n Tente novamente.`)
    } else if (atual >= 18) {
        maior++
        cont++
    }
    else {
        menor++
        cont++
    }

} while (cont <= qtd)

alert(`Quantidade de pessoas menores de idade: ${menor} \n Quantidade de pessoas maiores de idade: ${maior}`)