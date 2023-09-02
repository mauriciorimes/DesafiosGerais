// Dado um array de numeros inteiros, retorne esse array na sua ordem inversa. 1, 2, 3, 4, 5

const input = [1, 2, 3, 4, 5];
const output = [];

for (let i = input.length; i > 0; i--) {
  output.push(input[i - 1])  
}

console.log(output);
