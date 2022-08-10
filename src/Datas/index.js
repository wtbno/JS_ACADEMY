//Date é uma função construtora
const data = new Date(); //Timestamp valor negativo ou zero como props. Sem props pega a data atual


// function formatData (data) {
//     const dia = data.getDate
//     const mes = data.getMonth
//     const ano = data.getFullYear

//     return `${dia}, ${mes}, ${ano}`
// }


console.log('Dia', data.getDate());
console.log('Mês', data.getMonth());
console.log('Ano',data.getFullYear());
console.log('Milésimo de segundos',data.getMilliseconds());
console.log('Segundos',data.getSeconds());
console.log('Minutos',data.getMinutes());
console.log('Horas',data.getHours());


