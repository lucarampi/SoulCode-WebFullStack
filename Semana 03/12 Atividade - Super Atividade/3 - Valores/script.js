
var cont = 1
var qtd = 10
var intervalo_4 = 0
var intervalo_3 = 0
var intervalo_2 = 0
var intervalo_1 = 0



while (cont <= qtd) {
    atual = Number(prompt(`Insira o ${cont} numero: \n Não digitar uma valor significa 0.`))
    if (atual < 0) {
        alert(`Numero Negativo!`)
        cont++
    }
    if (isNaN(atual)) {
        alert(`Numero inválido! \n Tente novamente.`)
    } else if (100 >= atual && atual >= 76) {
        alert(atual)
        intervalo_4++
        cont++
    } else if (75 >= atual && atual >= 51) {
        intervalo_3++
        cont++
    } else if (50 >= atual && atual >= 26) {
        intervalo_2++
        cont++
    } else if (25 >= atual && atual >= 0) {
        intervalo_1++
        cont++
    }
}

alert(`
[0-25] : ${intervalo_1}  \n
[26-50] :${intervalo_2}  \n
[51-75] :${intervalo_3}  \n
[76-100] :${intervalo_4} \n
`)

