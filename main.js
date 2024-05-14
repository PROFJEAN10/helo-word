let nomeUusuario = "";
let elemento = document.querySelector("#nome-usuario");


while(nomeUusuario == ""){
    nomeUusuario = prompt("qual o seu nome?")
}

if(nomeUusuario == null){
    elemento.textContent = "seja muito bem-vindo.";
}else{
    elemento.textContent = nomeUusuario;}