//               01234567 
let umaString = "Um texto"
console.log(umaString[7]);//[7] -> captura do elemento do índice.
console.log(umaString.concat + ' aleatória '); //formas de concatenar
console.log(`${umaString} aleatória `);
console.log(umaString.indexOf('texto'));//pesquisa do índice da palavra texto

let umTexto = 'O rato roeu a roupa do rei de roma'
console.log(umTexto.replace(/r/g, '#'));
console.log(umTexto.length);
console.log(umTexto.slice(4, 8));
console.log(umTexto.toUpperCase());
//é possível usar aspas duplas em aspas simples
//Strings são indexadas, ou seja possuem um índice, onde cada caracter está em uma posição do índice
//Atrvés desse index é possível selecionar um elemento específico desse índice