export function notaNumber(value){
  return isNaN(value) || value == ""
}
  
export function calcularIMC(weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(2)
}