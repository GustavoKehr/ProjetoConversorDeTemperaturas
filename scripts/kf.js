let kf = document.getElementById("ckf")

let r = document.getElementById("res")

function converter(){

    if(kf.value.length == 0){

        alert("Digite um número para fazer a conversão")

    }
    else{

        let numDig = Number(kf.value)

        kf = (numDig - 273.15) * 1.8 + 32

        r.innerHTML = `${kf}`

    }

}

function limpar(){
    location.reload()
}