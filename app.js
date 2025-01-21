//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
let pegaNome = document.getElementById('amigo');
listarAmigos();

function adicionaAmigos(){
    if(pegaNome.value == ''){
        alert('Por favor, insira um nome.');
    } else{
        amigos.push(pegaNome.value);
        limpaCampo();
        listarAmigos();
    }
}

function limpaCampo(){
    pegaNome.value = '';
}

function listarAmigos(){
    let listaAmigo = document.getElementById('listaAmigos');
    listaAmigo.innerHTML = '';
    for(let i=0; i<amigos.length; i++){
        let item = document.createElement('li');
        item.textContent = amigos[i];
        listaAmigo.appendChild(item);
    }
}

function sortearAmigo(){
    if(amigos.length > 0){
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        resultado = document.getElementById('resultado');
        resultado.innerHTML = `O amigo secreto sorteado é ${amigos[indiceAleatorio]}`;
        amigos.splice(indiceAleatorio, 1);
        listarAmigos();
    } else{
        alert('Primeiro adicione amigos para realizar o sorteio.');
    }
}

function limpaAmigos(){
    if(amigos.length > 0){
        amigos = [];
        listarAmigos();
        document.getElementById('resultado').innerHTML = '';
        alert('A lista de amigos foi removida!');
    }
}