document.getElementById("temaSelect").addEventListener("change", function () {
    const temaSelecionado = this.value;
    document.body.className = temaSelecionado;
});

let tamanhoAtual = 16; // Tamanho inicial da fonte
const textarea = document.getElementById("text");

function alterarFonte(delta) {
    tamanhoAtual += delta;

  // Limite mínimo e máximo
    if (tamanhoAtual < 12) tamanhoAtual = 12;
    if (tamanhoAtual > 50) tamanhoAtual = 50;

    textarea.style.fontSize = `${tamanhoAtual}px`;
}

const synth = window.speechSynthesis;

function talk() {
  let t = document.getElementById('text').value;
  let voices = synth.getVoices();
  if(voices.length !== 0){
    console.log('talk');
    let msg = new SpeechSynthesisUtterance();
    msg.voice = voices[0];
    msg.rate = 1;
    msg.pitch = 1;
    msg.text = t;
    msg.lang = "pt-BR";
    synth.speak(msg);
  }
}

document.getElementById("play").onclick = talk;