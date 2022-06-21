// Capturar evento de submit do formulário
const form = document.querySelector("#formulario");


//
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const inputPeso = e.target.querySelector("#peso");
  const inputAltura = e.target.querySelector("#altura");

  //conversão para números
  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  if (!peso) {
    setResultado("Peso inválido", false);
    return;
  }

  if (!altura) {
    setResultado("Altura inválida", false);
    return;
  }

  //variáveis de imc
  const imc = getImc(peso, altura);
  const nivelImc = getNivelImc(imc);

  const msg = `Seu IMC é ${imc} (${nivelImc}).`;

  setResultado(msg, true);
});


//captura uma lista de dados
function getNivelImc(imc) {
  //array
  const referencia = [
    "Abaixo do peso",
    "Peso normal",
    "Sobrepeso",
    "Obesidade grau 1",
    "Obesidade grau 2",
    "Obesidade grau 3",
  ];
  //Método condicional que elimina else if
  if (imc >= 39.9) return referencia[5];
  if (imc >= 34.9) return referencia[4];
  if (imc >= 29.9) return referencia[3];
  if (imc >= 24.9) return referencia[2];
  if (imc >= 18.5) return referencia[1];
  if (imc < 18.5) return referencia[0];
}

function getImc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
}

function criaP() {
  const p = document.createElement("p");
  return p;
}

function setResultado(msg, isValid) {
  const resultado = document.querySelector("#resultado");
  resultado.innerHTML = "";

  const p = criaP();

  //Caso o resultado esteja dentro dos valores de ref, será validado como "PR" se não como "bad"
  if (isValid) {
    p.classList.add("paragrafo-resultado");
  } else {
    p.classList.add("bad");
  }

  p.innerHTML = msg;
  resultado.appendChild(p);
}
