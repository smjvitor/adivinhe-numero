const numAleatorio = Math.floor(Math.random() * 10000);

let tentativas = 15;
let numTentados = [];

const botao = document.querySelector("button");
const input = document.querySelector("input");
const resultado = document.querySelector("#resultado");
const tentativasTexto = document.querySelector("#tentativas");
const numTentadosTexto = document.querySelector("#numeros-tentados");
const bReiniciar = document.createElement("button");

bReiniciar.textContent = "Reiniciar";

bReiniciar.addEventListener("click", () => {
  window.location.reload();
});

botao.addEventListener("click", () => {
  const chute = parseInt(input.value);

  if (isNaN(chute)) {
    resultado.textContent = "Digite um número válido!";
    return;
  }

  if (chute < 0 || chute > 9999) {
    resultado.textContent = "Digite um número entre 0 e 9999!";
    return;
  }

  if (numTentados.includes(chute)) {
    resultado.textContent = "Você já tentou esse número!";
    return;
  }

  numTentados.push(chute);

  tentativas--;

  if (chute === numAleatorio) {
    resultado.textContent = "Você acertou o número!";
    botao.disabled = true;
  } else if (chute > numAleatorio) {
    resultado.textContent = "O número é menor!";
  } else {
    resultado.textContent = "O número é maior!";
  }

  tentativasTexto.textContent = `Restantes: ${tentativas}`;

  numTentadosTexto.textContent = `Números : ${numTentados.join(
    ", "
  )}`;

  if (tentativas === 0) {
    botao.disabled = true;
    resultado.textContent = `Suas tentativas acabaram! O número era ${numAleatorio}.`;
    document.querySelector(".container").appendChild(bReiniciar);
  }

  input.value = "";
});
