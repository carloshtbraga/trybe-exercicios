/*2. Retorne os números ímpares
A Dora aventureira gostaria de ter uma lista com todos o números ímpares entre 1 e 50.

Escreva um algoritmo que imprima no terminal uma string com todos os números inteiros ímpares desse intervalo.

Use a seguinte estrutura na impressão:

"x, y, z, ...n"*/

let impar=[]
for(let index =0; index <= 50; index+=1){
    if(index %2 !== 0 ){
        impar.push(index)

    }
}
console.log(impar)