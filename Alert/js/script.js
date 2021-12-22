let num1 = prompt ("Insira um número");
let num2 = prompt ("Insira outro número");
num1 = Number(num1);//Conversão de string para número
num2 = Number(num2);
const resultado = num1 + num2;
console.log(resultado);
alert(`O reusltado da operação foi:${resultado}`)//dentro das chaves vai a str
//Quando uma função tá dentro de um obj, chamamos ele de método se estiver fora, chamamos de função
//Quando chamado uma função, essa função pode ou não retornar algo
//prompt = captura um dado informado pelo usuario