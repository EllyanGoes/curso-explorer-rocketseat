// Object literal - objeto com propiedades e valores

export const Modal = {
  wrapper: document.querySelector('.modal-wrapper'),
  message: document.querySelector('#message'), 
  buttonClose: document.querySelector('.modal button'),

  //shorthand  de funcção a partir ES6 vesão mais nova do js
  oepn() {Modal.wrapper.classList.add('open')},
  close() {Modal.wrapper.classList.remove('open')}
}

Modal.buttonClose.onclick = () => Modal.close()


window.addEventListener('keydown', handleKeyDown)

function handleKeyDown(event){
  if( event.key === 'Escape'){
    Modal.close()
  }
}