let listaDeNumSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio(); 
let tentativas = 1;

function exibirMsgNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brasilian Portuguese Female", {rate:1.2}); 
}
function exibirMsgInicial() {
    exibirMsgNaTela("h1", "Jogo do número secreto");
    exibirMsgNaTela("p", "Escolha um número entre 1 e 10");

}

    exibirMsgInicial();

function verificarChute() {
    let chute = document.querySelector("input").value;

    if(chute == numeroSecreto) {
        exibirMsgNaTela("h1", "Acertou!");
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirMsgNaTela("p", mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if(chute > numeroSecreto) {
            exibirMsgNaTela("p" , "O número secreto é menor"); 
        } else {
            exibirMsgNaTela("p", "O número secreto é maior");
        }
        tentativas++;  
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let qutdDeElementosNaLista = listaDeNumSorteados.length;

    if(qutdDeElementosNaLista == numeroLimite) {
        listaDeNumSorteados = []
    }
    
    if(listaDeNumSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumSorteados.push(numeroEscolhido);
        console.log(listaDeNumSorteados);
        return numeroEscolhido;
    }
}   

function limparCampo() {
    chute = document.querySelector("input");
    chute.value = "";
}
    
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMsgInicial();
    document.getElementById("reiniciar").removeAttribute("disabled", true);
}







//push- add item ao final da lista
//let titulo = document.querySelector("h1");
//titulo.innerHTML = "Jogo do número secreto";

//let paragrafo = document.querySelector("p");
//paragrafo.innerHTML = "Escolha um número entre 1 e 10";
