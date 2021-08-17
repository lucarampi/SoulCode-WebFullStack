function validaNome() {
    var nome = nome1; 
    if (nome.value == '' || !isNaN(nome.value)) {
        nome.style.backgroundColor = 'rgb(246, 195, 195)';
        nome.style.borderColor = 'red';
        nome.placeholder = 'Informe um nome válido'
    } else {

        nome.style.backgroundColor = 'rgb(206, 243, 194)';
        nome.style.borderColor = 'green';
    }
}

function validacaoEmail(field) {
    usuario = field.value.substring(0, field.value.indexOf("@"));
    dominio = field.value.substring(field.value.indexOf("@")+ 1, field.value.length);

    if ((usuario.length >=1) &&
        (dominio.length >=3) &&
        (usuario.search("@")==-1) &&
        (dominio.search("@")==-1) &&
        (usuario.search(" ")==-1) &&
        (dominio.search(" ")==-1) &&
        (dominio.search(".")!=-1) &&
        (dominio.indexOf(".") >=1)&&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {
        document.getElementById('email').style.borderColor = 'green';
    } else {
        document.getElementById('email').style.borderColor = 'red';
        document.getElementById('email').style.backgroundColor = 'rgb(246, 195, 195)';
        document.getElementById('email').placeholder = 'Informe um email válido';
        alert("E-mail inválido");
    }
}

function isValidCPF(cpf) {
    // Validar se é String
    if (typeof cpf !== 'string') return false
    
    // Tirar formatação
    cpf = cpf.replace(/[^\d]+/g, '')
    
    // Validar se tem tamanho 11 ou se é uma sequência de digitos repetidos
    if (cpf.length !== 11 || !!cpf.match(/(\d)\1{10}/)) return false
    
    // String para Array
    cpf = cpf.split('')
    
    const validator = cpf
        // Pegar os últimos 2 digitos de validação
        .filter((digit, index, array) => index >= array.length - 2 && digit)
        // Transformar digitos em números
        .map( el => +el )
        
    const toValidate = pop => cpf
        // Pegar Array de items para validar
        .filter((digit, index, array) => index < array.length - pop && digit)
        // Transformar digitos em números
        .map(el => +el)
    
    const rest = (count, pop) => (toValidate(pop)
        // Calcular Soma dos digitos e multiplicar por 10
        .reduce((soma, el, i) => soma + el * (count - i), 0) * 10) 
        // Pegar o resto por 11
        % 11 
        // transformar de 10 para 0
        % 10
        
    return !(rest(10,2) !== validator[0] || rest(11,1) !== validator[1])
}
//função para aparecer a dive de boasvindas
  function mostra(e){
    if(document.getElementById("bem-vindo").style.display === 'none'){
        document.getElementById('bem-vindo').style.display = 'block';
    }else{
    document.getElementById('bem-vindo').style.display = 'none';
    }
}
