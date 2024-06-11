let resposta = document.getElementById("resposta")
function calcular(){
    let alturaCm = document.getElementById("alturaCm").value
    let peso = document.getElementById("peso").value
    let alturaM = alturaCm / 100
    let imc = peso / (alturaM ** 2)
    let saude = ""
    if(imc < 18.5){saude = "Magreza"}
    else if(imc >= 18.5 && imc <= 24.9){saude = "Normal"}
    else if(imc >= 25 && imc <=29.9){saude = "Obesidade Grau I"}
    else if(imc >=30 && imc <= 39.9){saude = "Obesidade Grau II"}
    else if(imc >=40){saude = "Obesidade Grau III"}
    resposta.innerHTML = "O seu IMC é igual a: " + imc.toFixed(2) + " e seu estado de saude é: " + saude
}