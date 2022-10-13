let button1 = document.getElementById("botao1");
button1.addEventListener("click", function () {
  let senha1 = document.getElementById("senha1");
  let email1 = document.getElementById("email1");
  if (senha1.value === "123456" && email1.value === "tryber@teste.com") {
    alert("Olá Tryber");
  } else {
    alert("Email ou senha inválidos");
  }
});

function habilitarBotao(){
    let button2 = document.getElementById('submit-btn');
    let input = document.getElementById('agreement');
    if(input = checked){
    button2 = !disabled
    }

}
input.addEventListener('change',habilitarBotao );