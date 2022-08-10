//Regras para criar constantes 
/**
 * Não criar const com palavras reservadas (let, console, log, var etc);
 * As contantes precisam ter nomes significativos e que façam sentido;
 * Não iniciar o nome de uma var com números -> estoura um erro Invalid or unexpected token;
 * Constantes com traço ou espaço não são aceitas -> ex.: nome cliente ou nome-cliente
 * -> forma correta: nomeCliente (camelCase);
 * Constantyes são case sensitive -> nomeCliente;
 * Não se pode redeclarar constantes
 * A CONSTANTE PRECISA SER CRIADA E INICIALIZADA IMEDIATAMENTE!!!
 * 
 * 
 * JS É uma linguagem de tipagem dinâmica, que faz com que  a JVM identifique o tipo de dado inserido.
 */

//const nome = 'Petti';
//console.log(nome);


const num1 = 98;
const num2 = 37;
const result = num1 * num2;
const resultTriplicado = result * 3;
let resultQuad = result * 4;
console.log(result);
console.log(resultTriplicado);
console.log(resultQuad);

console.log(typeof num1); //Identificação do tipo de dado inserido
console.log(typeof (num1 / num2));//A execução será primeiro das variaveis dentro dos parênteses