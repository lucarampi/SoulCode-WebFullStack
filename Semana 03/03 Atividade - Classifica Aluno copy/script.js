

var peso = 0
var altura = 0

altura = parseInt(prompt("Digite sua altura"))
peso = parseInt(prompt("Digite seu peso"))


var imc = peso / (altura ** 2)


if (!peso || !altura) {
    alert("Valor de peso/altura incorreto(s).\n Verifique e tente novamente.")
} else {
    if (imc >= 40) {
        resposta = "OBESIDADE GRAU III"
    } else if (imc >= 35) {
        resposta = "OBESIDADE GRAU II"
    } else if (imc >= 30) {
        resposta = "OBESIDADE GRAU I"
    } else if (imc >= 25) {
        resposta = "PRÉ-OBESO"
    } else if (imc >= 18.5) {
        resposta = "ADEQUADO"
    } else if (imc >= 17) {
        resposta = "MAGREZA GRAU I"
    } else if (imc >= 16) {
        resposta = "MAGREZA GRAU II"
    } else {
        resposta = "MAGREZA GRAU III"
    }

    alert(`IMC: ${imc} \n ${resposta}`);

    document.write(`IMC: ${imc}`, "<br>")
    document.write(resposta, "<br>")
}








