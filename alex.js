const inicio = Number(prompt('Digite um número'))
const mais = document.querySelector('#mais')
const menos = document.querySelector('#menos')
const vezes = document.querySelector('#vezes')
const div = document.querySelector('#div')
const result = document.querySelector('#result')

result.innerHTML = inicio


function soma (){
    const dois = Number(result.innerHTML)
    const um = Number(prompt('Digite um número'))
    result.innerHTML = um + dois
}
function sub (){
    const dois = Number(result.innerHTML)
    const um = Number(prompt('Digite um número'))
      result.innerHTML = dois - um
}
function divi (){
    const dois = Number(result.innerHTML)
    const um = Number(prompt('Digite um número'))
    result.innerHTML = dois / um
}
function vezess (){
    const dois = Number(result.innerHTML)
    const um = Number(prompt('Digite um número'))
    result.innerHTML = um * dois
}


menos.addEventListener('click', sub)
mais.addEventListener('click', soma)
div.addEventListener('click', divi)
vezes.addEventListener('click', vezess)