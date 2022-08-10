//Criação do DOM

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import link from './images/link.jpg'
import './styles/main.scss'

ReactDOM.render(<App />, document.getElementById("root"));

//Nesse trecho document.getElementById("root") nós estamos dizendo para o rect-dom 
//buscar dentro da DOM de template.html 
//uma div com id “root” e assim injetar nossa aplicação dentro dela.
