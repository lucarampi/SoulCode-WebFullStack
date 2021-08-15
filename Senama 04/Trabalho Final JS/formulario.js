var get = (x) => document.querySelector(x)
var set = (x) => document.querySelector(x)
var flag_name = false
var flag_cpf = false
var flag_day = false
var flag_month = false
var flag_year = false
var flag_email = false
var flag_gender = false

function validaNome(name) {
    if (name.value == '' || !isNaN(name.value)) {
        name.style.backgroundColor = 'rgb(246, 195, 195)';
        flag_name = false;

        return flag_name
    }
    name.style.backgroundColor = 'white';
    flag_name = true;

    return flag_name
}

function validacaoEmail(element) {
    if (element.checkValidity() && element.value != "") {
        element.style.backgroundColor = "white"
        flag_email = true

        return flag_email
    }
    element.style.backgroundColor = "rgb(246, 195, 195)"
    flag_email = false

    return flag_email
}

function validaCPF(element) { //funcao validar cpf
    var cpfNumeros = element.value.replace(".", "").replace(".", "").replace("-", ""); //remove ponto, espacos e traco do cpf

    var noveDig = cpfNumeros.substr(0, 9); // variavel para receber os 9 digitos
    var dezDig = cpfNumeros.substr(0, 10); //variavel para receber 10 digitos
    var somaNove = 0; //soma dos 9 digitos
    var somaDez = 0; // soma dos 10 digitos
    var multiplicador = 10; // multiplicador dos 9 digitos

    //VALIDAR PRIMERO DIGITO →111←.222.333-44
    // PASSO1: fazer a multiplicacao e soma dos 9 digitos


    for (i = 0; i < 9; i++) {
        var numero = noveDig.substr(i, 1)
        somaNove += numero * multiplicador
        multiplicador--
    }

    // PASSO2: pegar o resto da divisão por 11 de somaNove*10
    var resultadoMod1 = (x = ((somaNove * 10) % 11)) => (x == 10) ? 0 : x
    console.log(resultadoMod1())

    //VALIDAR SEGUNDO DIGITO 111.→222←.333-44
    // PASSO1: fazer a multiplicacao e soma dos 10 (9 NUMEROS + PRIMEIRO VERIFICADOR(111.222.333-→4←4)) digitos
    multiplicador = 11 // multiplicado dos 10 digitos
    for (i = 0; i < 10; i++) {
        var numero = dezDig.substr(i, 1)
        somaDez += numero * multiplicador
        multiplicador--
    }

    // PASSO2: pegar o resto da divisão por 11 de somaDez*10
    var resultadoMod2 = (x = ((((((somaDez * 10) % 11)))))) => (x == 10) ? 0 : x
    console.log(resultadoMod2())

    //PASSO3: verificar se o resto é igual ao ultimo digito verificador(111.222.333-4→4←4)
    var first = cpfNumeros.slice(0, 3)
    var second = cpfNumeros.slice(3, 6)
    var third = cpfNumeros.slice(6, 9)
    var verifyExeption = () => (first == second && second == third) ? true : false
    console.log(verifyExeption())
    if ((resultadoMod1().toString() + resultadoMod2().toString()) === cpfNumeros.substr(9, 2) && !verifyExeption()) { // verificacao dos 2 ultimos digitos
        element.style.backgroundColor = "white";
        flag_cpf = true
        return flag_cpf
    }
    element.style.backgroundColor = "rgb(246, 195, 195)";
    flag_cpf = false
    return flag_cpf

}

function valida(element) {
    if (element.value == "") {
        element.style.backgroundColor = "rgb(246, 195, 195)";
        return false;
    }
    element.style.backgroundColor = "white";
    return true;
}

function validaDia(element) {
    if (valida(element)) {
        flag_day = true;

        return flag_day;
    }
    flag_day = false;
    return flag_day;
}

function validaMes(element) {
    if (valida(element)) {
        flag_month = true;

        return flag_month;
    }
    flag_month = false;
    return flag_month;
}

function validaGenero(element) {
    if (valida(element)) {
        flag_gender = true;

        return flag_gender;
    }
    flag_gender = false;
    return flag_gender;
}

function validaAno() {
    var ref_var = new Date();
    if (year.value >= ref_var.getFullYear() || year.value < ref_var.getFullYear() - 130) {
        year.style.backgroundColor = "rgb(246, 195, 195)";
        alert("Ano invalido")
        flag_year = false;
        return flag_year;
    }
    year.style.backgroundColor = "white";
    flag_year = true;

    return flag_year;
}

function calculateAge() {
    var ref_var = new Date(2021, 3, 16)
    var day = get("#day").value
    var month = get("#month").value
    var year = get("#year").value
    var birth = new Date(year, month, day);

    var age = ref_var.getFullYear() - birth.getFullYear();
    var m = ref_var.getMonth() - birth.getMonth();
    if (m < 0 || (m == 0 && ref_var.getDate() < birth.getDate())) {
        age--;
    }
    return age
}

//função para aparecer a dive de boasvindas


function mostra(event) {
    event.preventDefault()
    if (flag_name && flag_cpf && flag_day && flag_month && flag_email && flag_gender) {
        set("#bem-vindo").innerHTML = `
        <p>
        Olá ${get("#name").value.toUpperCase()}!<br>
        Seu login é: ${get("#email").value}.<br>
        Voce tem ${calculateAge()} e se indentifica como uma pessoa do genero ${get("#gender").value} e pode usar seu CPF (${get("#cpf").value}) como senha.
        </p>
        `
        return true
    }
    console.log("NOP")
    return false
}

function resetFlags(){
    console.log("resetou")
    flag_name = false
    flag_cpf = false
    flag_day = false
    flag_month = false
    flag_year = false
    flag_email = false
    flag_gender = false
    set("#bem-vindo").innerHTML = "<p></p>"


}