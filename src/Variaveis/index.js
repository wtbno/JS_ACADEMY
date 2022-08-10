//Variáveis = dados salvos em um espaço na memoria do pc

//Exemplo gatos



var a = 1;
var b = 2;
if (a === 1) {
  var a = 11;
  let b = 22;
  console.log(a, b);

  //Let tem escopo de bloco {...bloco}
  //Var tem escopo global

}

//Hoisting = atribuir um valor a uma variável antes de declara-la (para var)
//numberOne = 1; Atribuição

//Let e const é necessário declrar antes

console.log(a, b);

let nome1 = "kittie"; // let é mais utilizado atualmente, não pode redeclarar esse tipo de variável
var nome2 = "cookie"; // método de declarar com var é uma forma antiga de se declarar var//Pode ser alterado

console.log("A", nome1, "chegou em casa no ano de 2021");
console.log(
  "Em dezembro de 2021",
  nome1,
  "ganhou uma fonte de presente de natal"
);

console.log("A", nome2, "dorme demais!!!");

//Regras para criar variáveis
/**
 * Não criar var com palavras reservadas (let, console, log, var etc);
 * As variáveis precisam ter nomes significativos e que façam sentido;
 * Não iniciar o nome de uma var com números -> estoura um erro Invalid or unexpected token;
 * Variáveis com traço ou espaço não são aceitas -> ex.: nome cliente ou nome-cliente
 * -> forma correta: nomeCliente (camelCase);
 * Variáveis são case sensitive -> nomeCliente;
 * NÃO UTILIZAR VAR
 */
