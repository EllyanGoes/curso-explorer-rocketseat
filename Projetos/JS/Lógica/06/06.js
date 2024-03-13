/* 

  Jogo da Advinhação 

  Apresente a mensagem ao usuário: 
  "advinhe o número que estou pensando? Está ente 0 e 10"


  Crie uma lógica para gerar um número aleatório e verificar se o número gerado é o mesmo que o aleatório gerado pelo sistema.

  Enquanto o usuário não advinhar o número, mostrar a mendagem:

  "Erro, tente novamente "

  Caso o usuário acerte o número, mstrar a mensagem: 
  "Parabéns! Você advinhou o número em x tentativas"

  Substitua o 'x' da menagem, pelo número de tentativas 

*/ 

let result = prompt( "Advinhe o número que estou pensando? Está ente 0 e 10")

const randomNumber = Math.round(Math.random()*10)

let xAttempts = 1;

while(Number(result) != randomNumber){
  result = prompt('Erro, tente novamente')
  xAttempts++
}

alert(`Parabéns! Você advinhou o número em ${xAttempts} tentativas`)