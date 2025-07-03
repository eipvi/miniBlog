// Seletores
const btnUX = document.getElementById("btnUX");
const btnUI = document.getElementById("btnUI");
const boxUX = document.getElementById("boxUX");
const boxUI = document.getElementById("boxUI");
const nome = document.getElementById("nome");


// Função para ativar UX
btnUX.addEventListener("click", function () {
  btnUX.classList.add("ativo");
  btnUI.classList.remove("ativo");

  boxUX.classList.remove("oculto");
  boxUX.classList.add("visivel");

  boxUI.classList.remove("visivel");
  boxUI.classList.add("oculto");
  alert("Conteúdos UX");
});

// Função para ativar UI
btnUI.addEventListener("click", function () {
  btnUI.classList.add("ativo");
  btnUX.classList.remove("ativo");

  boxUI.classList.remove("oculto");
  boxUI.classList.add("visivel");

  boxUX.classList.remove("visivel");
  boxUX.classList.add("oculto");
  alert("Conteúdos UI");
});

//mudar a cor do background do coteudo
document.getElementById("caixa").addEventListener("mouseover", function () {
  this.style.background = "Beige";
});


   
