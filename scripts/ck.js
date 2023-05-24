let ck = document.getElementById("cck")

let r = document.getElementById("res")

function converter(){

    if(ck.value.length == 0){

        alert("Digite um número para fazer a conversão")

    }
    else{

        let numDig = Number(ck.value)

        ck = numDig + 273.15;

        r.innerHTML = `${ck}`

    }

}

function limpar(){
    location.reload()
}