

var peso = 0
var altura = 0

altura = parseFloat(prompt("Digite sua altura"))
peso = parseInt(prompt("Digite seu peso"))


imc = (peso / (Math.pow(altura, 2)))


if (!peso || !altura) {
    alert("Valor de peso/altura incorreto(s).\n Verifique e tente novamente.")
} else {
    imc = (peso / (Math.pow(altura, 2)))
    if (imc >= 30) {
        resposta = "OBESO"
    } else if (imc >= 25) {
        resposta = "ACIMA DO PESO"
    } else if (imc >= 18.5) {
        resposta = "PESO NORMAL"
    } else resposta = "ABAIXO DO PESO"

    document.write(`IMC: ${imc}`, "<br>")
    document.write(resposta, "<br>")
}








