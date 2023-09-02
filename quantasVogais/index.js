// Identifique quantas vogais
// existem na frase hello world

const frase = 'hello world';
const vogais = ['a', 'e', 'i', 'o', 'u'];
let quantasVogais = 0;

for (let i = 0; i < frase.length; i++) {
  
  if (frase[i] === vogais[0] || frase[i] === vogais[1] || frase[i] === vogais[2] || frase[i] === vogais[3] || frase[i] === vogais[4]) {
    quantasVogais += 1
  }
  
}

console.log(quantasVogais);




