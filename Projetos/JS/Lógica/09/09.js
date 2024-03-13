/* 
  Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima

  "Paciente X possui o IMC de: Y"

  Onde X é o nome do paciente e Y é o IMC desse paciente

  Crie uma função para fazer o cálculo de IMC
*/

/* peso / (altura * altura) */

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
    name: 'Gabriela',
    age: 18,
    weight: 50,
    height: 1.66,
  },
]

function IMC (weight,height){
  return (weight/(height**2)).toFixed(2)

}

function printPatientIMC(patient){
  return `
    Paciente ${patient.name} possui o IMC  de ${IMC(patient.weight, patient.height)}`
}

for (let patient of patients) {
  let  IMCmessage = printPatientIMC(patient)
  alert(IMCmessage)

}





// alert(`Paciente ${patients[index].name} possui o IMC de: .`)



// index = Number(prompt(`Informe qual é o paciente que você quer saber o IMC 1 

// 1 - Luiz 
// 2 - Carlos 
// 3 - Gabriela

// `) - 1)

// let imc = (patients[index].weight/(patients[index].height**2)).toFixed(2)