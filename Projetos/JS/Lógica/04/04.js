/* 
  Solicitar o nome do aluno e as 3 notas do bimestre calcular a média daquele aluno

  A média positiva deverá ser maior que 6

  Se o aluno passou no bimeste, dar os parabéns.
  
  Se o aluno não passar no bimestre, o motivar o aluno a dar o seu melhor na prova de recuperação.

  Em ambos os casos, moste uma mensagem com o nome do aluno e a nota
*/

let student = prompt('Informe o nome do aluno: ')
let noteOne = Number(prompt('Nota 1: '))
let noteTwo = Number(prompt('Note 2: '))
let noteThree = Number(prompt('Nota 3: ')) 

let media = (noteOne + noteTwo + noteThree)/3
let mediaFormate = media.toFixed(2)

if(media > 6){
  alert('Parabéns '+ student + ", você passou de bimeste!" + 'A sua média foi de: ' + mediaFormate)
} else if(media < 3) {
  alert('Reprovado!')
} else { 
  alert('Olá ' + student + ',você tirou ' + mediaFormate + ' e acabou ficando de recuperação, mas não se preocupe, FAZENDO UMA BOA PROVA DE RECUPERAÇÃO, VOCÊ CONSEGUEEE PASSAR')
}
