forma_de_pagamento = 0
valor_produto = 1000
valor_pagamento = 0

forma_de_pagamento = parseInt(prompt("Selecione a forma de pagamento: \n 1) À vista no cartão ou cheque, recebe 10% de desconto \n 2) À vista no dinheiro, recebe 15% de desconto \n 3) Em duas vezes, preço normal de etiqueta sem juros \n 4) Em três vezes, preço normal de etiqueta mais juros de 10%"))


if (isNaN(forma_de_pagamento)) {
    alert("Um valor foi inserido incorretamente! \n Verifique e tente novamente.")
}else{
if(forma_de_pagamento == parseInt(1)) valor_pagamento = (1-.1) * valor_produto
if(forma_de_pagamento == 2) valor_pagamento = (1-.15) * valor_produto
if(forma_de_pagamento == 3) valor_pagamento = (1) * valor_produto
if(forma_de_pagamento == 4) valor_pagamento = (1+.1) * valor_produto
alert(`Valor total a ser pago pelo produto é de R$${valor_pagamento}`)
}


