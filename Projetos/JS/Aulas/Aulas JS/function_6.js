function Person(name){
  this.name = name
  this.walk = function() {
    return this.name + 'está andando'
  }
}

const myke = new Person('Myke')
const joao = new Person('João')

console.log(myke)
console.log(joao)

let name = new String('myke')

console.log(name)

let number = new Number(100)

console.log(number)