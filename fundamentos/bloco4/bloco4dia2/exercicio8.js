let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let number =[];

for ( let index = 1; index <= 25; index+=1  ){
    number.push(index)
}
console.log(number)

for (let index =0; index < number.length;index+=1){
    console.log(number[index] / 2)
}