// Variáveis 
const cookie = document.querySelector("#cookie")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnReset = document.querySelector("#btnReset")
const luckDisplay = document.querySelector('#luck')
let lucks = [ 
  'Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.',
  'Procure acender uma vela ao em vez de amaldiçoar a escuridaão',
  'A vida trará coisas boas se tiver paciência.',
  'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.',
  'Defeitos e virtudes são apenas dois lados da mesma moeda.',
  'A maior de todas as torres começa no solo.',
  'Não há que ser forte. Há que ser flexível.',
  'Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?',
  'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.',
  'A juventude não é uma época da vida, é um estado de espírito.',
  'Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.'
]
let randomNumber;
// Funções  

function toggleScreen(){
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
  
  randomNumber = Math.round(Math.random()*(lucks.length-1))
  luckDisplay.innerText = lucks[randomNumber]
  console.log(randomNumber)
}

// Eventos
cookie.addEventListener('click',toggleScreen)
btnReset.addEventListener('click',toggleScreen)

