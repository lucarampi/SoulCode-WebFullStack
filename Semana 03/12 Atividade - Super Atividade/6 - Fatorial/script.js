var atual = 0
var cont = 1
var fatorial = 1

atual = Number(prompt(`${cont})Insira o numero que seja calcular o fatorial:`))
if (isNaN(atual) || atual < 0 || !(Number.isInteger(atual))) {
    alert(`Altura inválida! \n Tente novamente.`)
} else if (atual == 0) {
    document.write(` 0! = 0`)
}

else {
    cont = atual
    for (let i = 1; i <= cont; i++) {
        fatorial = fatorial * i
    }

    document.write(`${cont}! = `)
    for (cont; cont > 0; --cont) {
        document.write(`${cont}`)
        if (cont != 1) document.write(` x `)
        else document.write(` = ${fatorial}`)
    }
}
