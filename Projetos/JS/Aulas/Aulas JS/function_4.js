// function scope 

let subject 

function createThink() {
  subject = 'study'
}

console.log(subject)
createThink() // invoca a função a atualizando a variável subject 
console.log(subject)