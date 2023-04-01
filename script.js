/*Crie um programa em Javascript que troque a palavra lugar por mundo da frase O LUGAR VIRA TECNOLOGIA e apresente na tela.*/


let txt = ("O LUGAR VIRA TECNOLOGIA")
console.log(txt.replace("LUGAR","MUNDO"))

document.write(txt)


//exercicio 9 Crie um programa que declare a variável como String depois converta para float e em seguida apresente apenas dois números depois da virgula 


let string = prompt('Digite a variável string: ')

let float = parseFloat(string)

console.log(float)

let floatround = float.toFixed(2);

console.log(floatround)
document.write(floatround)
