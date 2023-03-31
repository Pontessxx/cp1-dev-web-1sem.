/*Escreva  um  programa  que  calcula  o  índice  de  massa  corporal  (IMC)  
de  uma  pessoa  e  exibe  uma mensagem indicando se ela está abaixo, no peso ideal ou acima do peso.
 Considere as seguintes faixas de IMC:  abaixo  de  18,5  (abaixo  do  peso),
   entre  18,5  e  24,9  (peso  ideal)  e  acima  de  24,9  (acima  do  peso).
    Exemplifique e demonstre a saída! (10 Pontos) */

let peso = prompt("Digite seu peso: ") 
let altura = prompt("Digite sua altura: ")

resultado = peso / altura**2

if (resultado < 18.5){
    document.write("você esta abaixo do peso")
}
else if (resultado > 18.5 && resultado <= 24.9){
    document.write("você esta na media normal de peso")
}
else if (resultado > 24.9){
    document.write("você esta acima do peso")
}