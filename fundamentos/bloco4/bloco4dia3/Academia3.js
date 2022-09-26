/*3. Números divisíveis por 3
Escreva um algoritmo que cria uma sequência numérica de inteiros com intervalo de 1 entre eles. O algoritmo deve receber antes de criar essa sequência, o valor inicial e final.

Conte os números divisíveis por 3 da sequência e imprima no terminal condicionando:

Se houver 50 ou mais:

"Há 50 ou mais números divisíveis por 3"

Caso o contrário: "Sequência muito pequena."*/


let resultado = 0

let inicial = 0
let final = 150

for(let index=inicial; index <= final; index +=1 ){
    if(index % 3 === 0){
        resultado+=1
    } 
}console.log(resultado)

if( resultado < 50){
    console.log("Sequência muito pequena")

} else {
    console.log("Há 50 ou mais números divisíveis por 3")
}