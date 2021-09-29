
const calcular = document.getElementById("calcular");


function imc() {
    const nome = document.getElementById("nome").value;
    const altura = document.getElementById("altura").value;
    const peso = document.getElementById("peso").value;
    let resultado = document.getElementById("resultado");


    if (nome !== "" && altura !== "" && peso !== "") {

        let saude = "voce está bem";

        let valorIMC = (peso / (altura * altura)).toFixed(1);



      if (18.5 < valorIMC < 25) {
           saude = "muito magro"
        }
        else if (valorIMC  < 25) {
            saude = "bem demais"
        }
        else if (valorIMC  < 30) {
            saude = "pokin pesado em"
        }
        else if (valorIMC >= 30) {
            saude = "MANDADO"
        }
        resultado.textContent = `${nome} seu imc é ${valorIMC} e voce está ${saude}`

    } else {
    
       resultado.textContent = "Preencha todos os campos"



    }


} calcular.addEventListener("click", imc)