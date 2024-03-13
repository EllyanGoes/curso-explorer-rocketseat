/* 
  Crie uma lista de pacientes 

  Cada Paciente dentro da lista, deverár conter 
    Nome
    Idade
    Peso 
    Altura

  Escreva uma lista contendo o nome dos pacientes 
*/

/*

# Quais são os dados? 

- paciente 
- Nome, idade, peso e altura. 

#Desaio 

escreve : 'nome tem x anos, pesa y e tem uma altura de z'.

*/ 

let patients = [
  {
    name: 'Luiz',
    age: 20,
    weight: 60,
    height: 1.70,
  },

  {
    name: 'Carlos',
    age: 24,
    weight: 80,
    height: 1.90
  },

  {
    name: 'Luiza',
    age: 18,
    weight: 50,
    height: 1.66,
  },
]


let patientsNames = []
let patientsDeatils = []
//aqui eu to dizendo que cada objeto dentro de patients é um patient
for(let patient of patients) {
  // patientsNames.push(patient.name)
  patientsDeatils.push(`O paciente chamado(a) ${patient.name} tem ${patient.age} anos, pesa ${patient.weight.toFixed(2)}kg e tem ${patient.height.toFixed(2)}m de altura. `)

}

alert(patientsDeatils)