/* 
  Capturar 2 números e fazer as operações matemáticas 
  de soma, subtração, multiplicação, divisão e resto 
  da divisão.

  E para cada operação mostrar um alerta com o resultado 
*/ 

let numberOne = prompt('inserir o primeiro número: ')
let numberTwo =prompt('inserir o segundo número: ')

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

let operaçao = prompt('o que você quer fazer?(+,-,*,/,%)')

switch(operaçao){
  case '+': 
    const soma = numberOne + numberTwo
    alert('A soma deu: ' + soma)
    break
  
  case '-':
    const subtração = numberOne - numberTwo
    alert('A subtração deu: ' + subtração)
    break

  case '*':
    const multiplicaçao = numberOne + numberTwo
    alert('A multiplicação deu: ' + multiplicaçao)
    break

  case '/':
    const divisao = numberOne/numberTwo
    alert('A divisão deu: ' + divisao)
    break

  case '%':
    const resto = numberOne%numberTwo
    alert('O resto da divisão é: ' + resto)
    break
}


