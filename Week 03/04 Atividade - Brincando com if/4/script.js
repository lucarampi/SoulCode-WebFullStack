
n1 = parseInt(prompt("Digite o primeiro numero"))
n2 = parseInt(prompt("Digite o segundo numero"))

if (isNaN(n1) || isNaN(n2)) {
    alert("Um dos valores foi inserido incorretamente! \n Verifique e tente novamente.")
}else{
    if(n1 > n2) alert(`O numero ${n1} é MAIOR que ${n2}`)
    if(n1 == n2) alert(`O numero ${n1} é IGUAL que ${n2}`)
    if(n1 < n2) alert(`O numero ${n1} é MENOR que ${n2}`)
}