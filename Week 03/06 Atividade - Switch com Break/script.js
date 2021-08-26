a = parseInt(prompt("Digite o numero do mês desejado: \n 1) Janeiro \n 2) Fevereiro \n 3) Março \n 4) Abril \n 5) Maio \n 6) Junho \n 7) Julho \n 8) Agosto \n 9) Setembro \n 10) Outubro \n 11) Novembro \n 12) Dezembro"))
switch (a) {
    case 1:
        alert("Janeiro: 31 dias")
        break;
    case 2:
        alert("Fevereiro: 28 dias (29 dias nos anos bissextos)")
        break;
    case 3:
        alert("Março: 31 dias")
        break;
    case 4:
        alert("Abril: 30 dias")
        break;
    case 5:
        alert("Maio: 31 dias")
        break;
    case 6:
        alert("Junho: 30 dias")
        break;
    case 7:
        alert("Julho: 31 dias")
        break;
    case 8:
        alert("Agosto: 31 dias")
        break;
    case 9:
        alert("Setembro: 30 dias")
        break;
    case 10:
        alert("Outubro: 31 dias")
        break;
    case 11:
        alert("Novembro: 30 dias")
        break;
    case 12:
        alert("Dezembro: 31 dias")
        break;


    default:
        alert("Numero inválido! \n Recarregue a página e tente novamente.")
        break;
}