function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  }
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

//   Crie um calendário dinamicamente.

// O array decemberDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Sua função deve criar dinamicamente cada dia do calendário e os adicionar dentro da tag <ul>.

// Note que os dias 29 e 30 de novembro estão no array, pois representam respectivamente Domingo e Segunda-feira.

// A tag <ul> deve conter o id 'days'
// Os dias devem estar contidos em uma tag <li>, e todos devem ter a classe day. Ex: <li class="day">3</li>
// Os dias 24, 25 e 31 são feriados e, além da classe day, devem conter também a classe holiday. Ex: <li class="day holiday">24</li>
// Os dias 4, 11, 18 e 25 são sextas-feiras. Eles devem conter a classe day e a classe friday. Ex: <li class="day friday">4</li>
  const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function creatDaysofTheMonth(){

let ulTag = document.getElementById('days');
for ( let index = 0; index < decemberDaysList.length;index+=1){
  let liTag = document.createElement('li');
  let day = decemberDaysList[index];
  liTag.innerHTML = decemberDaysList[index];  
  ulTag.appendChild(liTag);
  liTag.className = 'days';

if(day === 24 || day === 31){
  liTag.className = 'holiday days';
  } else if (day === 4 || day ===11 || day ===18){
  liTag.className = 'friday days';
  } else if (day===25){
  liTag.className = 'holiday friday days'
  }
} 
}

creatDaysofTheMonth();

// Implemente uma função que crie dinamicamente um botão com o nome “Feriados”.
// Sua função deve receber um parâmetro com a string 'Feriados'
// Adicione a este botão a ID "btn-holiday"
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container"

function button(string){
div = document.getElementsByClassName('buttons-container')[0];
button1 = document.createElement('button');
button1.id = 'btn-holiday';
div.appendChild(button1)
button1.innerHTML = string


}
button('Feriados');

// Implemente uma função que muda a cor de fundo dos dias que possuem a classe "holiday".

// Adicione ao botão "Feriados" um evento de "click" que altere a cor de fundo dos dias que possuem a classe "holiday"
// 👀 É interessante que esse botão possua também a lógica inversa. Ao ser clicado novamente, ele retorna à configuração inicial com a cor “rgb(238,238,238)”.

function changeColor(){
let diaX = document.querySelectorAll('.holiday')
let bgColor = 'rgb(238,238,238)';
let newColor = 'green';
let button = document.getElementById('btn-holiday');

button.addEventListener('click', function(){
for (let index = 0; index < diaX.length;index+=1){
if (diaX[index].style.backgroundColor === newColor){
  diaX[index].style.backgroundColor = bgColor;
} else {
  diaX[index].style.backgroundColor = newColor;
}
}

})


}
changeColor();

// parte 4

function createButton(string){
let divBotao = document.getElementsByClassName('buttons-container')[0];
let Botao = document.createElement('button');
Botao.innerHTML = string
Botao.id = 'btn-friday'
divBotao.appendChild(Botao)
}
createButton('Sexta-Feira')

//parte 5

function textMod(){
let botao = document.getElementById('btn-friday');
let weekDays = document.querySelectorAll('.week-days');
let novoTexto = "SEXTOUUUUUUUU";
botao.addEventListener('click', function(){
  for (index = 0; index < weekDays.length;index+=1){
    if (weekDays[index].innerTEXT === 'Sexta'){
      weekDays[index].innerTEXT = novoTexto;
    } else{
      weekDays[index].innerTEXT = weekDays[index];
    }
}

})
}

textMod();

// PARTE 6
function mouseOver(){
  let days = document.getElementById('days');
  days.addEventListener('mouseover', function(event){
    event.target.style.fontSize = '40px'
  })
}

function mouseOut(){
  let days = document.getElementById('days');
  days.addEventListener('mouseout', function(event){
    event.target.style.fontSize = '20px'
  })
}

mouseOver();
mouseOut();

// PARTE 7

function newTask(task){
  let taskLocalization = document.querySelector('.my-tasks');
  let taskname = document.createElement('span')
  taskname.innerHTML = task
  taskLocalization.appendChild(taskname)
}


newTask('cagar')

//parte 8

function colorTask(para){
  div1 = document.querySelector('.my-tasks');
  div2 = document.createElement('div');
  div2.className = 'task';
  div2.style.backgroundColor = para;
  div1.appendChild(div2);



}
colorTask('blue');