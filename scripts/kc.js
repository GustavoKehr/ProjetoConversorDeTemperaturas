let kc = document.getElementById("ckc")

let r = document.getElementById("res")

function converter(){

    if(kc.value.length == 0){

        alert("Digite um número para fazer a conversão")

    }
    else{

        let numDig = Number(kc.value)

        kc = numDig - 273.15;

        r.innerHTML = `${kc}`

    }

}

function limpar(){
    location.reload()
}