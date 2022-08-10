var firstName = 'João'
let lastName = 'Souza'

if(firstName === 'João'){
    let lastName = 'Rodrigues';
    var firstName = 'Pedro';
    lastName = 'Alves'//reatribuição
    console.log(lastName);
}

console.log(firstName, lastName);