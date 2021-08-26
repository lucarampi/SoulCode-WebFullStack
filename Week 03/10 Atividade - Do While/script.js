var age = 0
var flag = false

do {
    age = Number((prompt("Digite sua idade:")), 10)
    if (isNaN(age) || age >= 150 || age <= 0 || !(Number.isInteger(age))) {
        alert("Um valor foi inserido incorretamente! \n Verifique e tente novamente.")
        flag = true
    } else {
        alert("Idade válida")
        flag = false
    }
} while (flag)
