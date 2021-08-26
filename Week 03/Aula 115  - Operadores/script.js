num1 = 20
num2 = 15
result = 0
// Operadores matemáticos
result = num1 + num2 //35
result = result + num2 //50
num1 = result //50
result = result - result //0
result = num1 * num2 //750
result = num1 % 3 //2
result = num1 / result//25

// atividade em aula 1
document.write(`Atividade em aula 1`, '<br>')
a = 8
document.write(a *= 3, '<br>')
document.write(a /= 2, '<br>')
document.write(a %= 5, '<br>')
document.write(a += 3, '<br>')
document.write(a -= 1, '<br><br>')

// operadores de incremento e decremento
// atividade em aula 2
document.write(`Atividade em aula 2`, '<br>')
a = 1
document.write(++a, '<br>')
document.write(a++, '<br>')
document.write(--a, '<br>')
document.write(a--, '<br>')
document.write(a, '<br><br>')

// operadores ternarios
// atividade em aula 3
document.write(`Atividade em aula 3`, '<br>')
a = 15
b = "42"
c = 42.0
document.write(b == c ? "verdadeiro" : "falso", '<br>')
document.write(b === c ? "verdadeiro" : "falso", '<br>')
document.write(b != c ? "verdadeiro" : "falso", '<br>')
document.write(a < c ? "verdadeiro" : "falso", '<br>')
document.write(a > c ? "verdadeiro" : "falso", '<br>')
document.write(a <= c ? "verdadeiro" : "falso", '<br>')
document.write(a >= c ? "verdadeiro" : "falso", '<br>')

// atividade em aula 4
document.write(`Atividade em aula 4`, '<br>')
a = 15
b = "42"
c = 42.0
document.write(`Calculo IMC`, '<br>')
document.write(b == c ? "verdadeiro" : "falso", '<br>')
document.write(b === c ? "verdadeiro" : "falso", '<br>')
document.write(b != c ? "verdadeiro" : "falso", '<br>')
document.write(a < c ? "verdadeiro" : "falso", '<br>')
document.write(a > c ? "verdadeiro" : "falso", '<br>')
document.write(a <= c ? "verdadeiro" : "falso", '<br>')
document.write(a >= c ? "verdadeiro" : "falso", '<br><br >')

// atividade em aula 5
document.write(`Atividade em aula 5`, '<br>')

var sensor_incendio_1 = false;
var sensor_incendio_2 = false;
var maquina_ligada = true;
var alimentacao_eletrica = true;
var alarme = false;

//o alarme deve ser acionado se nao houver alimentacao ou incendio em algum dos andares

alarme = (sensor_incendio_1 || sensor_incendio_2 || !alimentacao_eletrica) & maquina_ligada

document.write(alarme, '<br><br>')

// atividade em aula 6
document.write(`Atividade em aula 6`, '<br>')
var salario = 1800;
var fgts_inss = 0.2;
var decimo_terceiro = salario;
var adicional_ferias = (salario + ((1 / 3) * salario));
var custo_funcionario_ano = 0;

impostos = fgts_inss * ((salario * 12) + decimo_terceiro + adicional_ferias)
custo_funcionario_ano = ((salario * 12) + decimo_terceiro + ((1 / 3) * salario) + impostos)
document.write(custo_funcionario_ano)
//calcule o custo do funcionario no ano 

document.write(alarme, '<br><br>')

// atividade em aula 7
