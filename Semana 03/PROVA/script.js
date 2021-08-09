// Questão 1
function questao1() {
    document.write("<h2>Questão 1</h2>")

    document.write("a)", 10 * 5, "<br>")

    document.write("b)", 10 / 2, "<br>")

    document.write("c)", 18 % 9, "<br>")

    document.write("e) x+=y <br>")

    document.write("f) x*=y <br>")
} questao1()

// Questão 2
function questao2() {
    document.write("<h2>Questão 2</h2>")
    let a = 5, b = 7, c = 3, d = 9
    document.write(`
a. O resultado da expressão (a != 3 || b < 10 || c == 5) é falso. Resposta: ${(a != 3 || b < 10 || c == 5)}<br>
b. O resultado da expressão (d > 8 && c == 3 || a >= 10) é verdadeiro.  Resposta: ${(d > 8 && c == 3 || a >= 10)}<br>
c. O resultado da expressão !(d == 12 && a != 10) é falso. Resposta: ${(d == 12 && a != 10)}<br>
d. O resultado da expressão (c == 4 || d <=6) && (a >= 5 && b !=9) || ( ! (a < 5) ) é
falso. Resposta: ${(c == 4 || d <= 6) && (a >= 5 && b != 9) || (!(a < 5))}<br>
e. O resultado da expressão (a == 3 || b > 10 || d == 8 ) é verdadeiro. Resposta: ${(a == 3 || b > 10 || d == 8)}<br>
`)
}
questao2()

// Questão 3
function questao3() {
    document.write("<h2>Questão 3</h2>")
    let cont = 0

    document.write("<h3>Com WHILE</h3>")
    while (cont <= 1000) {
        document.write(cont, " ")
        cont++
    }
    cont = 0

    document.write("<h3>Com DO WHILE</h3>")
    do {
        document.write(cont, " ")
        cont++
    }
    while (cont <= 1000)
    cont = 0

    document.write("<h3>Com FOR</h3>")
    for (cont; cont <= 1000; cont++) document.write(cont, " ")
} questao3()

// Questão 4
var primo = (number) => {
    for (i = 2; i < number; i++)
        if (number % i === 0 || number < 2) return `c) O numero ${number} não é primo<br>`
    return `c) O numero ${number} é primo<br>`
}
function questao4() {
    document.write("<h2>Questão 4</h2>")
    let numero1 = 4
    let numero2 = 29
    document.write("Numero 1: ", numero1, "<br>")
    document.write("Numero 2: ", numero2, "<br>")

    if (numero1 % 2 == 0) document.write("a) O numero ", numero1, " é par<br>")
    else document.write("a) O numero ", numero1, " é impar<br>")

    if (numero1 % 3 == 0) document.write("b) O numero ", numero1, " é multiplo de 3<br>")
    else document.write("b) O numero ", numero1, " não é multiplo de 3<br>")

    document.write(primo(numero2))

    if (numero1 > numero2) document.write("d) Numero 1 é maior que o numero 2 <br>")
    else document.write("d) Numero 1 não é maior que o numero 2 <br>")
} questao4()

// Questão 5
var verify_input = function (number) {
    if (isNaN(number) || !Number.isInteger(number)) {
        alert(`Numero inválido! \n Recarregue a página e tente novamente.`)
        return false
    } else {
        return true
    }
}
function questao5() {
    document.write("<h2>Questão 5</h2>")
    let input1 = Number(prompt("Insira o primeiro numero:"))
    let input2 = Number(prompt("Insira o segundo numero:"))
    if (verify_input(input1) && verify_input(input2)) {
        document.write(`
        Antes: ${input1} e ${input2}<br>`)
        let temp = input1
        input1 = input2
        input2 = temp
        document.write(`Depois: ${input1} e ${input2}<br>`)
    }
} questao5()

// Questão 6
function myFunction() {
    alert("Questão 6) Olá, mundo!")
    document.write("Olá, mundo!")
}
function questao6() {
    document.write("<h2>Questão 6</h2>")
    myFunction()
} questao6()

// Questão 7
function multiplica(num1) {
    return num1 * 2
}
function questao7() {
    document.write("<h2>Questão 7</h2>")
    let numero1 = 2
    document.write("Resultado:", Math.pow(multiplica(numero1), 2))
} questao7()

// Questão 8
function questao8() {
    document.write("<h2>Questão 8</h2>")
    document.write(`
    a) Numero aleatório: ${Math.random()}<br>
    b) Maior numero de 10 e 20: ${Math.max(10, 20)}<br>
    c) Arredondando 1.84 para o inteiro mais proximo: ${Math.round(1.84)}<br>
    d) Raiz de 9: ${Math.sqrt(9)}<br>
    `)
} questao8()

// Questão 9
function questao9() {
    document.write("<h2>Questão 9</h2>")
    let x = 7
    let y = 4
    document.write(`
    x = ${x}<br>
    y = ${y}<br>
    `)
    if (x > y) {
        alert("Questão 9) Hellow World")
        document.write("Hellow World")
    } else {
        alert("Questão 9) Goodbye")
        document.write("Goodbye")
    }
} questao9()

// Questão 9
function questao10() {
    document.write("<h2>Questão 10</h2>")
    fruta = "MaÇã".toLowerCase()
    switch (fruta) {
        case "banana": alert(`Questão 10) Olá`)
            document.write(`Olá`)

            break;

        case "maçã": alert(`Questão 10) Bem-vindo`)
        document.write(`Bem-vindo`)

            break;

        default:
            alert("Opss... Parace não encontramos a sua fruta")
            break;
    }
} questao10()