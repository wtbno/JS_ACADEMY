const alunos =  ['Mateus', 'Fernando', 'Victor'] // => arrays
//                  0          1           2 => itens indexados
//Indexação de array é feito por elemento
console.log(alunos[0]);
console.log(alunos[1]);
console.log(alunos[2]);
alunos[0]='João';//Altera
console.log(alunos[0]);
alunos[3]='Gerald';//Adiciona
console.log(alunos[3]);
console.log(alunos.length);//tamanho do array
alunos.push('James');//Adiciona no fim do array
console.log(alunos);
alunos.unshift('Zelda')//Adiciona no indíce 0
console.log(alunos);
alunos.pop();//remove último dado
alunos.shift();//remove o primeiro dado
console.log(alunos);
delete alunos[1]//deleta um item específico no array
alunos[2]='Triss'
console.log(alunos);
console.log(alunos.slice(0 , 3));// seleciona os dados dentro de um range selecionado
console.log(alunos.slice(0 , -2));//método de fatiamento
alunos[1]='Luigi';
console.log(alunos);
console.log(typeof alunos);//objeto =/= de strings no processo de index 
