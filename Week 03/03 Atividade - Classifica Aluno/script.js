const nota1_aluno1 = 7
const nota2_aluno1 = 10
const nota3_aluno1 = 5
const nome_aluno1 = "Luca Alfaro Rampinelli"

const total = nota1_aluno1 + nota2_aluno1 + nota3_aluno1
const media = total/3
const media_minima = 7

document.write(`|| Calculo de média do aluno ${nome_aluno1}`,'<br>')
document.write(`|| P1: ${nota1_aluno1}`,'<br>')
document.write(`|| P2: ${nota2_aluno1}`,'<br>')
document.write(`|| P3: ${nota3_aluno1}`,'<br><br>')
document.write(media >= media_minima ? "APROVADO" : "REPROVADO",'<br>')
