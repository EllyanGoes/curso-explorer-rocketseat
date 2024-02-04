
let total = 0

const sum = function(number1, number2){
  let total = number1 + number2
  return total
}

// sum(1,2)
// sum(7,10)
// sum(30,10)

let number1 = 10;
let number2 = 20;

// sum(number1, number2)
// sum(3,5)

console.log(`o número 1 é ${number1}`)
console.log(`o número 2 é ${number2}`)
console.log(`a soma dos dois é ${sum(number1, number2)}`)
console.log(total)

// sempre se atentar que  ao uso do let, var e const com questão do escopo local e global, o comum e não usar tanto var devido a questão de escopo global e hosting, e usar mais o let que é local. Pode causar bugs.