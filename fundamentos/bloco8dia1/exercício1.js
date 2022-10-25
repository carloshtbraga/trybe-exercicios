// const novo = (nome) => {
//     const oi = nome.toLowerCase().split(" ").join("_")
//     return {
//         nome, email:`${oi}@trybe.com`
//     }
// }









const creatEmail = (NomeCompleto) =>{
  let emailcreation = NomeCompleto.toLowerCase().split(" ").join("_")
  return {NomeCompleto, email: `${emailcreation}@trybe.com` }
}







const newEmployees = (call) => {
    const employees = {
      id1: call('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: call('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: call('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };
  console.log(newEmployees(creatEmail));