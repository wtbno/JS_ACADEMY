const nome = 'Bruno';
const sobrenome = 'Alves';
const idade = 31;
const peso = 75;
const alturaEmM = 1.76; // <-- NESTE LOCAL
const anoNasc = 2021 - idade;

let imc =( peso / (alturaEmM * alturaEmM));

//+ pode ser usado para unir valores dentro do log

console.log(nome + ' ' + sobrenome + ' tem ' + idade + ' anos, pesa ' + peso + ' kg'); // união de valores em uma única string
console.log(`você tem ${alturaEmM} de altura e seu IMC  é de ${imc}` ); // forma de template de strings
console.log(`e você nasceu em ${anoNasc}`);