const randomNumber = () => Math.ceil(Math.random() * 5 );

const numeroApostado = 5;
const lottery = (numero,callback) => (numero===callback) ? "Winner" : "Loser"

console.log(randomNumber())




// const compara = (numero, callback) => {
//   if (numero === callback) {
//     return `GanhoUUUuUUuUUUuu ${numero} e ${callback}`;
//   } else {
//     return `Perdeuuuuuuuuuuu ${numero} e ${callback}`;
//   }
// };

// console.log(compara(3, randomNumber()))

// const ternario = (numero,callback) => (numero === callback) ? `Ganhou ${numero} e ${callback}` : `Perdeu ${numero} e ${callback}`;
// console.log(ternario(5, randomNumber()));
