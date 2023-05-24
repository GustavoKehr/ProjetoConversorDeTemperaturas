let fc = document.getElementById("cfc")

let r = document.getElementById("res")

function converter(){

    if(fc.value.length == 0){

        alert("Digite um número para fazer a conversão")

    }
    else{

        let numDig = Number(fc.value)

        fc = (numDig - 32)/1.8

        r.innerHTML = `${fc}`

    }

}

function limpar(){
    location.reload()
}