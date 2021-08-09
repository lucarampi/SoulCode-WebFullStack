
idade = parseInt(prompt("Insira sua idade:"))

if (isNaN(idade)) {
    alert("Um dos valores foi inserido incorretamente! \n Verifique e tente novamente.")
}else{
if ( idade >= 70) alert(`Maiores de 70 anos - Não obrigatório`)
else if(idade >= 18) alert(`Maiores de 18 anos - Obrigatório`)
else if (idade >=16 ) alert(`16 e 17 anos - Voto opcional`)
else alert(`Menor de 16 anos - Não pode votar`)
}
