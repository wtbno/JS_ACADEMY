const pessoa1 = {
    nome: 'Bruno',
    sobrenome: 'Alves',
    idade: 31,

    fala () {
        console.log(`Aminha idade atual é ${this.idade}.`);
    },//Quando uma função está dentro de um objeto ela é chamada de método *****

    addAnual(){
        this.idade++;
    }


};


pessoa1.fala();
pessoa1.addAnual();
pessoa1.fala();
pessoa1.addAnual();
pessoa1.fala();
pessoa1.addAnual();
pessoa1.fala();
pessoa1.addAnual();


// function regPessoa (nome, sobrenome, idade) {//Os dados inseridos em () na função são parâmetros
//     return {
//         nome, sobrenome, idade
//     };

    
// }//essa função retorna objetos, funciona como uma fábrica de objetos

// const pessoa1 = regPessoa('Bruno', 'Alves', 31)//esse dados da constante são argumentos, que são enviados ao parâmetros da funcão
// console.log(pessoa1.nome);
// //[] => array
// //{} => objetos
// //() => função

// const array = [1 ,2 ,3];
// array.push (4);
// array[0] = 'Shen'
// console.log(array);//Nesse caso a alteração da const é permitida pois 
//é alterado apenas o elemento dentro do array.
//ao usar this dentro do método estou fazendo uma refência ao valor instanciado
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Working_with_Objects