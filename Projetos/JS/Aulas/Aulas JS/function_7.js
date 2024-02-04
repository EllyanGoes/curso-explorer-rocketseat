// tornar as palavras maiusculas ou minusculas
let word = 'estudar programação é muito legal';
console.log(word.toLocaleLowerCase())


// encontrar palvras em texto 
let texto = "Este é um exemplo de texto.";
let palavraProcurada = "ExEmPlo";

if (texto.toLowerCase().includes(palavraProcurada.toLowerCase())) {
    console.log("A palavra foi encontrada no texto.");
} else {
    console.log("A palavra não foi encontrada no texto.");
}

