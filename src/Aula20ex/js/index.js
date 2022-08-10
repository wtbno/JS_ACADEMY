//Eventos
//Tudo que estiver dentro de uma função fica protegido, 
//não se tornando disponível para todo escopo global

function meuEscopo () {
    const form = document.querySelector('.form');
    
    form.onsubmit = function (evento) {
        evento.preventDefault();
        alert(1)
        console.log('enviado');
    };
}

meuEscopo();

