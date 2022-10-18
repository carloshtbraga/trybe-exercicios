const factorial = (number) => {
  let result = 1;
  for (let index = 1; index <= number; index += 1) {
    result *= index;
  }
  return result
};

let imprimir = factorial(6);
console.log(`O fatorial é ${imprimir}`)