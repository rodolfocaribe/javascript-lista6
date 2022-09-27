function assustado() {
  document.getElementById("imagem").src = "img1/Assustado.png";
  document.getElementById("descricao").innerHTML = "O que você quer?";
}
function pensativo() {
  document.getElementById("imagem").src = "img1/Pensativo.png";
  document.getElementById("descricao").innerHTML = "zzzzzzzzzz!!!";
}
function nervoso() {
  document.getElementById("imagem").src = "img1/Nervoso.png";
  document.getElementById("descricao").innerHTML = "Não me aperte!!!";
}
function alegre() {
  document.getElementById("imagem").src = "img1/alegre.png";
  nome = prompt("Por favor, digite seu nome: ");
  document.getElementById("descricao").innerHTML = `${nome}, vamos brincar?`;
}
function maisVotado() {
  let max = candidato1;
  if (candidato2 > max) max = candidato2;
  if (candidato3 > max) max = candidato3;
  if (candidato4 > max) max = candidato4;
  return max;
}

candidato1 = 0;
candidato2 = 0;
candidato3 = 0;
candidato4 = 0;
function incrementaVoto1() {
  document.getElementById(`candidato1`).innerHTML = `${++candidato1}`
  maisVotado();
}
function incrementaVoto2() {
  document.getElementById(`candidato2`).innerHTML = `${++candidato2}`
  maisVotado();
}
function incrementaVoto3() {
  document.getElementById(`candidato3`).innerHTML = `${++candidato3}`
  maisVotado();
}
function incrementaVoto4() {
  document.getElementById(`candidato4`).innerHTML = `${++candidato4}`
  maisVotado();
}

