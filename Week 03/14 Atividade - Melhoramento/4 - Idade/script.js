var dividendo = 0
var divisor = 0
var ano_nascimento = 0
var year = 2021
var tolerance = 130
function calcula_idade(birth_year) {
    return year - birth_year
}




ano_nascimento = Number(prompt("Digite o ano de nascimento:"))

if (isNaN(ano_nascimento) || ano_nascimento > 2021 || ano_nascimento < (year - tolerance)) {
    alert(`Ano inválido! \n Recarregue a página e tente novamente.`)
} else {
    if (calcula_idade(ano_nascimento) >= 18)
        alert(`A idade é ${calcula_idade(ano_nascimento)}.\nMaior de idade`)
    else {
        alert(`A idade é ${calcula_idade(ano_nascimento)}. \nMenor de idade`)
    }
}