//O principal objetivo deste desafio é fortalecer suas habilidades
//  em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.


let nomeAmigo = [];


function adicionarAmigo(){
    let amigo = document.querySelector('input').value;

    if(amigo !==''){
        nomeAmigo.push(amigo);
        exibirNomes();
        document.querySelector('input').value = '';    
    }else{
        alert('digite o nome de um amigo!');

    }
        
}

function exibirNomes(){
    const listaElement= document.getElementById('listaAmigos');
    listaElement.innerHTML = '';

    for (let i = 0; i < nomeAmigo.length; i++) {
        const li = document.createElement('li');
        li.textContent = nomeAmigo[i];
        listaElement.appendChild(li);
    }
}


function sortearAmigo() {
    if (nomeAmigo.length === 0) {
        alert('Adicione ao menos um amigo para sortear!');
        return;
    }

    const amigoSorteado = nomeAmigo[Math.floor(Math.random() * nomeAmigo.length)];

   const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>O amigo secreto sorteado é: <strong>${amigoSorteado}</strong></li>`;
}



