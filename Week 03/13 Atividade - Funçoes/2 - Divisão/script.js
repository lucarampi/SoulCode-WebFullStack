var dividendo = 0
var divisor = 0

function divisao(dividendo, divisor) {
    return dividendo/divisor
}




dividendo = Number(prompt("Digite o dividendo:"))
divisor = Number(prompt("Digite o divisor:"))

if (isNaN(dividendo) || isNaN(divisor) || divisor == 0) {
    alert(`Numero inválido! \n Recarregue a página e tente novamente.`)
} else { alert(`O numero é ${divisao(dividendo,divisor)}`) }