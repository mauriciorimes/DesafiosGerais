// Crie uma função que recebe um número (de 1 a 12) e retorne o mês correspondente
// como uma string. Por exemplo, se a entrada for 2, a função deverá retornar "fevereiro",
// pois este é o 2° mês.

const meses = ['janeiro', 'fevereiro', 'marco', 'abril', 'maio', 'junho', 'julho', 'agosto',
  'setembro', 'outubro', 'novembro', 'dezembro'];

function recebeNumero(numero) {  
  console.log(meses[numero - 1]);
}

recebeNumero(12);
