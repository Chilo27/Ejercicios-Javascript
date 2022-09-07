
let productos = [10, 20, 15] 

let final= 0
let cantidad
let error = 0


function preciofinal(){
    cacho = document.getElementsByClassName("cantidades")
    for (let i = 0; i < 3; i++){
        final = final + cacho [i].value * productos [i]
    }
    document.getElementsByClassName("resultadofinal")[0].innerHTML = "Total:" + final
    final = 0
    
}


document.addEventListener("DOMContentLoaded",function(event){
    let divs = document.getElementsByClassName("productoprecios")
i = 0
for (const producto of productos) {
    let elemento = document.createElement("h1")
    elemento.innerHTML = `Precio ${producto}`
    divs[i++].appendChild(elemento)
}
})

