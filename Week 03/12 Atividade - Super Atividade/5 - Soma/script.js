var soma = 0
for(i = 1; i<=500; i++){
    (i%3 == 0) && !((i%2 == 0)) ? soma+= i : document.write('Proximo <br>')
}
alert(soma)