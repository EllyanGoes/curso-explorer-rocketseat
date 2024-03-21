//Variáveis 
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
let xAttempts = 1;
let randomNumber = Math.round(Math.random()*10)

// Eventos 
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keypress', enter)


//Função Callback 
function handleTryClick(event){
  
  event.preventDefault()

  const inputNumber = document.querySelector("#inputNumber")
  
  if(inputNumber.value != ""){
    if( inputNumber.value >= 0 && inputNumber.value <= 10){
      if(Number(inputNumber.value) == randomNumber){
        toggleScreen()
        screen2.querySelector("h2").innerText = `Acertou em ${xAttempts} tentativa(s)`

        randomNumber = Math.round(Math.random() * 10);
        console.log(randomNumber);

      } else{
        xAttempts++
        inputNumber.value = ""
      }
    } else { alert('Precisa ser um número entre 0 e 10')
    inputNumber.value = ""}
  } else{ alert("Campo está vazio")}
}

console.log( randomNumber)

function handleResetClick(){
  toggleScreen()
  inputNumber.value = ""
  xAttempts = 1
}
function toggleScreen(){
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function enter(e){
    if(e.key == 'Enter' && screen1.classList.contains('hide')){
      handleResetClick()
      
    } }