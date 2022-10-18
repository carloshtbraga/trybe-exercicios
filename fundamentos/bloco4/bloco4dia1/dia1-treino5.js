const currentHour=10
let message=""
if(currentHour>=22){
    console.log("Está muito tarde, vamos dormir")
} else if (currentHour>=18 && currentHour<22){
    console.log("Ta na hora da jantinhaaaaaaa")
} else if (currentHour>=14 && currentHour<18){
    console.log("Ta de tarde po, hora do bolo")
} else if (currentHour>=11 && currentHour<=14){
    console.log("Almoçoooooooooooo")
} else if (currentHour>=4 && currentHour<=11){
    console.log("Ta cedo, café da manhã")
}

console.log(message);