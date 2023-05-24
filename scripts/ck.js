let ck = document.getElementById("cck")

let r = document.getElementById("res")

function converter(){

    if(ck.value.length == 0){

        alert("Digite um número para fazer a conversão")

    }
    else{

        let numDig = Number(ck.value)

        ck = numDig + 273.15;

        r.innerHTML = `A conversão de ${numDig}°C para Kelvin foi de <strong>${ck}°K</strong>`

    }

}

function limpar(){
    location.reload()
}