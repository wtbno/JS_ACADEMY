/**
 * Aritméticos:
 * (+) Adição / concatenação
 * (**) Potênciação
 * (%) Resto da divisão
 * (*) Multiplicação
 * Ordem de cálculo:
 * ()
 * **
 * *
 * / %
 * + - 
 */
let num1 = 65;
let num2 = 97;
let num3 = 99;

console.log((num1 + num2) * num3);//Realiza primeiro o cálculo primeiro dentro de parênteses


//Esquema de contador = incremento
// ++ adiciona em +1 em uma ordem, não pode ser usado em constantes
//é realizado de 1 em 1 (para mais ou para menos)
let contador = 10;
//contador ++; // executa a ação e depois faz o incremento do valor
//++ contador; // primeiro faz a conta e depois mostra o valor
console.log(contador++);
console.log(contador);
//Não misturar o sistema de incremento e o console.log na mesma log!!!!s

//Esquema contador = decremento
//-- remove em -1 em uma ordem, não pode ser usado em constantes
//Esquema similar para incremento

//para fazer com números > de 1
const adcion = 3;
let contad = 0;
contad = contad + adcion
console.log(contad);
contad = contad + adcion
console.log(contad);

//Outra forma de operadores de atribuição
let contad1 = 0;
contad1 += 5;//Pode ser com (* / -) 
contad1 += 5;
contad1 += 5;
contad1 += 5;
contad1 += 5;
console.log(contad1);

//Erro NaN = Not a Number que indica erro de dados
const atb1 = 55;
const atb2 = 'Bruno';
console.log(atb1 * atb2);

//função parseFloat analisa casas decimais 
//função parseInt analisa casas decimais 


