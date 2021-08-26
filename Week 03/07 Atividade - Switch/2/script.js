var salario = parseInt(prompt("Digite o seu salário: "))
var plano = prompt("Digite a letra do seu plano: \n Planos Aumento: \n A) 10% \n B) 15% \n C) 20%").toUpperCase()

if (isNaN(salario)) {
    alert("Valor do salário foi inserido incorretamente! \n Verifique e tente novamente.")
}else{
switch (plano) {
    case "A":
        alert(`Seu novo salário é R$${salario* (1 + .1)}.`)
        break;
    case "B":
        alert(`Seu novo salário é R$${salario* (1 + .15)}.`)
        break;
    case "C":
        alert(`Seu novo salário é R$${salario* (1 + .2)}.`)
        break;

    default:
        alert("Plano inválido! \n Recarregue a página e tente novamente.")
        break;
}
}