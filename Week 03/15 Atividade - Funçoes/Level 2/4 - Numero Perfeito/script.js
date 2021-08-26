var verify_input = function (number) {
    if (isNaN(number) || number < 1 || !Number.isInteger(number)) {
        // alert(`Numero inválido! \n Recarregue a página e tente novamente.`)
        return false
    } else {
        return true
    }
}


var str_numeros = ""
var perfect
var perfect_number = function (number) {
    sum = 0
    document.write("<br>=============================")
    for (let divisor = 0; divisor < number; divisor++) {

        if (number % divisor == 0) {
            document.write(`<br>${divisor} || ${sum += divisor} `)
        }
    }
    if (sum == number) {
        return true
    }
    else {
        return false
    }
}

var show_them_all= function (number){

    for (i = 2; i <= number; i++)
    if (perfect_number(i)) document.write(` <br><pre>O numero ${i} é perfeito</pre>`)
    else document.write(`<br><pre>O numero ${i} não é perfeito</pre>`)

}

var input1 = Number(prompt(`Insira um numero:`))

if (verify_input(input1)) show_them_all(input1)
else alert(`Numero inválido! \n Recarregue a página e tente novamente.`)

