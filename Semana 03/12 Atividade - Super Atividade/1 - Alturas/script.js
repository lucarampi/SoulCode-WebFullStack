atual = 0
maior = 0
menor = 10000
cont = 1
do {
    atual = Number(prompt(`${cont})Insira um altura`))
    if (isNaN(atual) || atual <= 0) {
        alert(`Altura inválida! \n Tente novamente.`)
    } else {
        if (atual > maior) {
            maior = atual
        }
        if (atual < menor) {
            menor = atual
        }
        cont++
    }
} while (cont <= 15);

alert(`Menor altura: ${menor} \n Maior altura: ${maior}`)