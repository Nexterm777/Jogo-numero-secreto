let listaNumeroSorteados = [];
let numeroLimite = 20;
let numeroSecreto = numeroAleatorio();
let tentativas = 1;

function exibirNaTela(tag , texto){   
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto , 'Brazilian Portuguese Female' , {rate : 1.2});
}
exibirMensagemInicial();

function exibirMensagemInicial(){
exibirNaTela("h1" , "Joga essa POrra aí oh");
exibirNaTela("p" , "escolhe de 1 a 20 nessa POrra aí oh");
}


function verificarChute(){
   
    let chute = document.querySelector("input").value
   
    if (chute == numeroSecreto){
        let palavraTentativa = tentativas > 1? "tentativas" : "tentativa";
let mensagemTentativas =  `Você descobriu o numero secreto,uau meu pau esta rigido neste momento,num total de ${tentativas} ${palavraTentativa}`;
        exibirNaTela("h1" , "acerto Ah miseravi!!");
        exibirNaTela("p" , mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }else{
       if (chute > numeroSecreto)
    exibirNaTela("p" , "o numero é menor seu cabeça de piroca");
    else{
        exibirNaTela("p" , "o numero secreto é maior seu boyceta");
    }
    tentativas++;
    limparCampo();
    
    } 
        
}

function numeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
   let numeroDeElementosNaLista = listaNumeroSorteados.length;

    if (numeroDeElementosNaLista == numeroLimite){
        listaNumeroSorteados = [];
    }

    if(listaNumeroSorteados.includes(numeroEscolhido)){
        return numeroAleatorio()
    }else{
        listaNumeroSorteados.push(numeroEscolhido);
        console.log(listaNumeroSorteados);
     return numeroEscolhido;
    }
    
}

function limparCampo() {
chute = document.querySelector("input");
chute.value = "";
}
function reiniciarJogo(){
    numeroSecreto = numeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled" , true);
}