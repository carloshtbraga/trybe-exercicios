// const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

// const hasName = (arr, name) => {
//   return names.some((nome,i)=> nome === name)
// };

// console.log(hasName(names, 'Bruna'));

// const people = [
//     { name: 'Mateus', age: 18 },
//     { name: 'José', age: 16 },
//     { name: 'Ana', age: 23 },
//     { name: 'Cláudia', age: 20 },
//     { name: 'Bruna', age: 19 },
//   ];
  
//   const verifyAges = (arr, minimumAge) => {
//     return people.every((idade)=> idade.age >= minimumAge) 
//   };
  
//   console.log(verifyAges(people, 18));

const points = [40, 100, 1, 5, 25, 10, 5, 8, 90, 26, 67, 54];
points.sort((a, b) => b - a);
console.log(points); 