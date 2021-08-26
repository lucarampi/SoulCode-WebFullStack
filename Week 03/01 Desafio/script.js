var valor_entrada = 0
var unidade_entrada = 0
var valor_saida = 0
var unidade_converter = 0


valor_entrada = Number(prompt(`1)Insira o numero que deseja converter:`))
if (isNaN(valor_entrada)) {
    alert(`Valor inválido! \n Tente novamente.`)
} else {
    unidade_entrada = (prompt(`1)Insira a unidade do numero inserido anteriormente:\n
    UNIDADES DISPONÍVEIS: 
       Comprimento: mm, cm, m, km, yd, ft, in
       Velocidade: km/h, m/s, ft/s
    `)).toUpperCase()
    switch (unidade_entrada) {
        case "MM":
            valor_saida = valor_entrada
            document.write(`MM: ${valor_saida} <br>`)

            valor_saida = valor_entrada / 10
            document.write(`CM: ${valor_saida} <br>`)

            valor_saida = valor_entrada / 1000
            document.write(`M: ${valor_saida} <br>`)

            valor_saida = valor_entrada / 1000000
            document.write(`KM: ${valor_saida} <br>`)

            valor_saida = valor_entrada / 914.4
            document.write(`YD: ${valor_saida} <br>`)

            valor_saida = valor_entrada / 304.8
            document.write(`FT: ${valor_saida} <br>`)

            valor_saida = valor_entrada / 25.4
            document.write(`IN: ${valor_saida} <br>`)
            break;

        case "CM":
            valor_saida = valor_entrada * 10
            document.write(`MM: ${valor_saida} <br>`)

            valor_saida = valor_entrada
            document.write(`CM: ${valor_saida} <br>`)

            valor_saida = valor_entrada / 100
            document.write(`M: ${valor_saida} <br>`)

            valor_saida = valor_entrada / 100000
            document.write(`KM: ${valor_saida} <br>`)

            valor_saida = valor_entrada / 91.44
            document.write(`YD: ${valor_saida} <br>`)

            valor_saida = valor_entrada / 30.48
            document.write(`FT: ${valor_saida} <br>`)

            valor_saida = valor_entrada / 2.54
            document.write(`IN: ${valor_saida} <br>`)
            break;

        case "M":
            valor_saida = valor_entrada * 1000
            document.write(`MM: ${valor_saida} <br>`)

            valor_saida = valor_entrada * 100
            document.write(`CM: ${valor_saida} <br>`)

            valor_saida = valor_entrada
            document.write(`M: ${valor_saida} <br>`)

            valor_saida = valor_entrada / 1000
            document.write(`KM: ${valor_saida} <br>`)

            valor_saida = valor_entrada * 1.094
            document.write(`YD: ${valor_saida} <br>`)

            valor_saida = valor_entrada * 3.281
            document.write(`FT: ${valor_saida} <br>`)

            valor_saida = valor_entrada * 39.37
            document.write(`IN: ${valor_saida} <br>`)
            break;

        case "KM":
            valor_saida = valor_entrada * 1000000
            document.write(`MM: ${valor_saida} <br>`)

            valor_saida = valor_entrada * 100000
            document.write(`CM: ${valor_saida} <br>`)

            valor_saida = valor_entrada * 1000
            document.write(`M: ${valor_saida} <br>`)

            valor_saida = valor_entrada
            document.write(`KM: ${valor_saida} <br>`)

            valor_saida = valor_entrada * 1094
            document.write(`YD: ${valor_saida} <br>`)

            valor_saida = valor_entrada * 3281
            document.write(`FT: ${valor_saida} <br>`)

            valor_saida = valor_entrada * 39370
            document.write(`IN: ${valor_saida} <br>`)
            break;

        case "YD":
            valor_saida = valor_entrada * 914
            document.write(`MM: ${valor_saida} <br>`)

            valor_saida = valor_entrada * 91.44
            document.write(`CM: ${valor_saida} <br>`)

            valor_saida = valor_entrada * 1.094
            document.write(`M: ${valor_saida} <br>`)

            valor_saida = valor_entrada * 1094
            document.write(`KM: ${valor_saida} <br>`)

            valor_saida = valor_entrada
            document.write(`YD: ${valor_saida} <br>`)

            valor_saida = valor_entrada * 3
            document.write(`FT: ${valor_saida} <br>`)

            valor_saida = valor_entrada * 36
            document.write(`IN: ${valor_saida} <br>`)
            break;

        case "FT":
            valor_saida = valor_entrada * 305
            document.write(`MM: ${valor_saida} <br>`)

            valor_saida = valor_entrada * 30.48
            document.write(`CM: ${valor_saida} <br>`)

            valor_saida = valor_entrada / 3.281
            document.write(`M: ${valor_saida} <br>`)

            valor_saida = valor_entrada / 3281
            document.write(`KM: ${valor_saida} <br>`)

            valor_saida = valor_entrada / 3
            document.write(`YD: ${valor_saida} <br>`)

            valor_saida = valor_entrada
            document.write(`FT: ${valor_saida} <br>`)

            valor_saida = valor_entrada * 12
            document.write(`IN: ${valor_saida} <br>`)
            break;

        case "IN":
            valor_saida = valor_entrada * 25.4
            document.write(`MM: ${valor_saida} <br>`)

            valor_saida = valor_entrada * 2.54
            document.write(`CM: ${valor_saida} <br>`)

            valor_saida = valor_entrada / 39.37
            document.write(`M: ${valor_saida} <br>`)

            valor_saida = valor_entrada / 39370
            document.write(`KM: ${valor_saida} <br>`)

            valor_saida = valor_entrada / 36
            document.write(`YD: ${valor_saida} <br>`)

            valor_saida = valor_entrada / 12
            document.write(`FT: ${valor_saida} <br>`)

            valor_saida = valor_entrada
            document.write(`IN: ${valor_saida} <br>`)
            break;

        case "KM/H":
            valor_saida = valor_entrada
            document.write(`KM/H: ${valor_saida} <br>`)

            valor_saida = valor_entrada / 3.6
            document.write(`M/S: ${valor_saida} <br>`)

            valor_saida = valor_entrada / 1.097
            document.write(`FT/S: ${valor_saida} <br>`)
            break;

        case "M/S":
            valor_saida = valor_entrada * 3.6
            document.write(`KM/H: ${valor_saida} <br>`)

            valor_saida = valor_entrada
            document.write(`M/S: ${valor_saida} <br>`)

            valor_saida = valor_entrada * 3.281
            document.write(`FT/S: ${valor_saida} <br>`)
            break;

        case "FT/S":
            valor_saida = valor_entrada * 1.097
            document.write(`KM/H: ${valor_saida} <br>`)

            valor_saida = valor_entrada / 3.281
            document.write(`M/S: ${valor_saida} <br>`)

            valor_saida = valor_entrada
            document.write(`FT/S: ${valor_saida} <br>`)
            break;

        default:
            alert(`ERRO INTERNO.\nUNIDADE DE ENTRADA NÃO ESTA DISPONIVEL NO MOMENTO!\nRECARREGUE A PÁGINA`)
            break;
    }
}

