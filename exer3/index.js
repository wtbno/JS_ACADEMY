let varA = 'A'
let varB = 'B'
let varC = 'C'

let varATemp = varA;//reserva da variável em um local temporário
let varA = varB
let varB = varC
let varC = varATemp

console.log(varA, varB, varC);

//Outra forma de utilizar [ varA, varB, varC ] = [1 , 2 , 3] e dps é só substituir os números pelas
//variáveis desejável