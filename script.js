let notas = [];//array estrutura de dados que permite armazenar um conjunto de valores em uma única variável.
let soma = 0;
for (let i = 1; i <= 7; i++) { //media calculada
  let nota = parseFloat(prompt(`Digite a nota ${i}:`));
  notas.push(nota);
  soma += nota;
}
let media = soma / 7;
if (media >= 6) {
  console.log(`Parabéns, você foi aprovado! Sua média foi ${media.toFixed(2)}.`);
} else {
  console.log(`Infelizmente você foi reprovado. Sua média foi ${media.toFixed(2)}.`);
} 