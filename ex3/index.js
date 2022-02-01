const numero = Number(prompt("Insira seu número: "))
const numeroTitulo = document.getElementById('numero-titulo')
const texto = document.getElementById('texto')
document.getElementById('texto')

numeroTitulo.innerHTML=numero;
texto.innerHTML += `<p>Seu número + 2 é ${numero + 2}. </p>`
texto.innerHTML += `<p>A raiz quadrada  ${Math.sqrt(numero)}. </p>`
texto.innerHTML += `<p>  ${Number.isInteger(numero)}. </p>`
texto.innerHTML += `<p>  ${Number.isNaN(numero)}. </p>`
texto.innerHTML += `<p>  ${Math.floor(numero)}. </p>`
texto.innerHTML += `<p>  ${Math.ceil(numero)}. </p>`
texto.innerHTML += `<p>  ${Math.round(numero)}. </p>`
//É necessário colocar o += para realizar diversas funções


// ao trabalhar com document, manipulamos o DOM
//Nesse caso está sendo selecionado elementos do html
//jquery seleciona utilizando tags de css
//A propriedade Element.innerHTML define ou obtém a sintaxe HTML ou XML descrevendo os elementos descendentes.