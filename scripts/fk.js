let fk = document.getElementById("cfk")

let r = document.getElementById("res")

function converter(){

    if(fk.value.length == 0){

        alert("Digite um número para fazer a conversão")

    }
    else{

        let numDig = Number(fk.value)

        fk = (numDig - 32) * 5/9 + 273.15;

        r.innerHTML = `A conversão de ${numDig}°F para Kelvin foi de <strong>${fk}°K</strong>`

    }

}

function limpar(){
    location.reload()
}