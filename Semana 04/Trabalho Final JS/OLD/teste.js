const USDtoUSD = 1
const BRLtoUSD = 0.18
const CADtoUSD = 0.8
const ARStoUSD = 0.011
const GBPtoUSD = 1.39
const EURtoUSD = 1.19

function toUSD(input_values = new Number(), input_type = new String()) {
    switch (input_type.toUpperCase()) {
        case "USD":
            alert("dale us 1" )
            return (input_values * Number(USDtoUSD)).toFixed(2)
            break;

        case "BRL":
            return (input_values * Number(BRLtoUSD)).toFixed(2)
            break;

        case "CAD":
            return (input_values * Number(CADtoUSD)).toFixed(2)
            break;

        case "ARS":
            return (input_values * Number(ARStoUSD)).toFixed(2)
            break;

        case "GBP":
            return (input_values * Number(GBPtoUSD)).toFixed(2)
            break;

        case "EUR":
            return (input_values * Number(EURtoUSD)).toFixed(2)
            break;

        default:
            alert("ERRO INTERNO. POR NÃO SABER QUE ERA IMPOSSÍVEL, FOI LÁ E SOUBE")
            break;
    }

}

function toOutput(usd_value = new Number(), output_type = new String()) {
    switch (output_type.toUpperCase()) {
        case "USD":
            alert("dale br 2" )
            return (usd_value / USDtoUSD).toFixed(2)
            break;
        case "BRL":
            
            return (usd_value / BRLtoUSD).toFixed(2)
            break;

        case "CAD":
            return (usd_value / CADtoUSD).toFixed(2)
            break;

        case "ARS":
            return (usd_value / ARStoUSD).toFixed(2)
            break;

        case "GBP":
            return (usd_value / GBPtoUSD).toFixed(2)
            break;

        case "EUR":
            return (usd_value / EURtoUSD).toFixed(2)
            break;

        default:
            alert("ERRO INTERNO. POR NÃO SABER QUE ERA IMPOSSÍVEL, FOI LÁ E SOUBE")
            break;
    }


}

function calculadora(input_value, input_type, output_type) {
    //nossa função 
    var usdOutput = Number(toUSD(input_value, input_type));
    console.log("usdOutput " + usdOutput)
    var output = Number(toOutput(usdOutput, output_type));
    console.log("output " + output)
    console.log(typeof output)
}