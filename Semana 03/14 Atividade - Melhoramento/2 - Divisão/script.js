var dividendo = 0
var divisor = 0

function divisao(num1, num2) {
    if(dividendo < divisor){
        num1 = divisor
        num2 = dividendo
    }else{
        num1 = dividendo
        num2 = divisor
    }
    return num1/num2
}




dividendo = Number(prompt("Digite o dividendo:"))
divisor = Number(prompt("Digite o divisor:"))

if (isNaN(dividendo) || isNaN(divisor) || divisor == 0) {
    alert(`Numero inválido! \n Recarregue a página e tente novamente.`)
} else { alert(`O numero é ${parseInt(divisao(dividendo,divisor))}`) }