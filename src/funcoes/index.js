function saudacao(nome) {
console.log(`Bem vindo ${nome}!`);//=> sempre que usar $ associar com {}
return (`${'Como você está?'}`) // retorna a função e mais alguma coisa caso solicitado dentro de uma variavel
}
//o return acima está sendo direcionado para a variavel abaixo
//corpo da função em {}
//tudo que está dentro da função, está protegido não podendo ser acessado fora dela.
//parâmetros são inseridos nos () do nome da função, no caso saudacao

// os () indicam que a função está sendo executada
const variavel = saudacao('Bruno')
console.log(variavel);


//Arrow Function
const isAdult = (age) => {
    return age >= 18
}

//ou ainda

const isAdult2 = (age) => age >= 18