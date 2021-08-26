a = 0

a = parseInt(prompt("Digite um numero:"))

if (isNaN(a)) {
    alert("Um valor foi inserido incorretamente! \n Verifique e tente novamente.")
}else{
if (a % 2 == 0) alert(`O numero ${a} é PAR`)
if (a % 2 != 0) alert(`O numero ${a} é IMPAR`)
}
