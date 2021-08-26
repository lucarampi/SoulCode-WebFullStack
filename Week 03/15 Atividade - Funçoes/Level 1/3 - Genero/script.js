var print_gender = (gender) => {
    if(gender == "F") alert(`É feminino`)
    else alert(`É masculino`)
}

var verify_input = function (a) {
    if (a != "F" && a != "M" ) {
        // alert(`Numero inválido! \n Recarregue a página e tente novamente.`)
        return false
    } else {
        return true
    }
}

input = prompt(`Insira o código do seu sexo: 
F: Feminino
M: Masculino
`).toUpperCase()

if (verify_input(input)) print_gender(input)
else alert(`Genero inválido! \n Recarregue a página e tente novamente.`)





