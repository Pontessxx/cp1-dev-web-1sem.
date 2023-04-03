document.write("<br>")
let senha = "1234"
let admin = ["admin","Admin"];  // determinando quais nomes são classificados como adm
var [primeiro, segundo] = admin  // parte do processo de designação da função admin
//coloquei variantes com inicial minúscula para evitar erros
let username = prompt('digite seu username: '); //solicita o nome do usuário


let password = prompt('Digite a senha: ')


if(username == primeiro && password == senha){
    document.write('usuário logado');  // testa a paridade entre o nome do imput e cada possível admin
}                                       // ao mesmo tempo que averigua a veracidade da senha informada
else if(username == segundo){
    document.write('usuário logado');
}
else if(username != admin){
    document.write('acesso negado');
}
