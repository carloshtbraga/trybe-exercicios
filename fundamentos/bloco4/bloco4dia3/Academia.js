/*1. Encontre o index através do valor de um elemento
Escreva um algoritmo que recebe 2 parâmetros:

Um array contendo um conjunto de números
O valor de um desses elementos
Procure esse elemento dentro do array, e imprima no terminal a posição index em que o elemento encontra-se.

Caso não o encontre, imprima:

"Elemento não encontrado no array"*/
let numero=13
let numbers= [7, 10, 17, 83, 25, 2, 13]
/*for (let index= 0; index<numbers.length; index+=1 ){
    if(numbers[index] === numero){
        console.log(index); 
    } else {
        console.log("xxxxx")
    }
} */

if (numbers.indexOf(numero) >= 0) { 
    console.log(numbers.indexOf(numero)); } 
    else { 
    console.log('Elemento não encontrado no array'); } 