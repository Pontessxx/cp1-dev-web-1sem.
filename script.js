/*Faça um programa que recebaa idade de uma pessoa e exiba uma mensagem indicando em qual faixa etária ela se encontra: criança (até 12 anos),
adolescente (entre 13 e 18 anos), adulto (entre 19 e 60 anos) ou idoso (mais de 60 anos). Exemplifique e demonstre a saída!  */

let idade = prompt("Qual sua idade?")

if (idade<=13){
    document.write("Você é uma criança")
}

if (idade>13 && idade<=18){
    document.write("Você é um adoslescente")
}

if (idade>19 && idade<=60){
    document.write("Você é um adulto")
}

if(idade>60){
    document.write("Você é um idoso")
}






