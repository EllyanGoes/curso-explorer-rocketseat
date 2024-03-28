/*
OBS - todo formulário do tipo submit eles enviam as informações e recarrega a página

1) Bloquear a ação de envio fo button 
(event.preventDefault)
2) Clicar e fazer o cauculo 

*/

import {Modal} from './modal.js'
import {AlertError} from './alert-error.js'
import {calcularIMC, notaNumber } from './utils.js'

// variáveis 
const form = document.querySelector("form")
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')


form.onsubmit = event => {
  event.preventDefault()
  
  const weight = inputWeight.value
  const height = inputHeight.value

  const showAlertError = notaNumber(weight) || notaNumber(height)

  if(showAlertError) {
    AlertError.open()
    return;
  }

  AlertError.close()

  const result = calcularIMC(weight,height)
  const message = `Seu IMC é de ${result}`

  Modal.message.innerText = message
  Modal.oepn()
}

