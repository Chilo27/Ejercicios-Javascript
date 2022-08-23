let arroz = 10;
let tallarines = 20;
let ñoquis = 15;
let final= 0
let cantidad
let error = 0

alert("Bienvenidos a la tienda mora a continuacion escriba los productos que quiera sumar")
for (let i = 1; i <=3; i++){
    switch(i){
        case 1: producto = "arroz";
         precio = arroz
        break
        case 2: producto = "tallarines";
         precio = tallarines
        break
        case 3: producto = "ñoquis";
         precio = ñoquis
        break
    }

    do{
        if(error){
            alert("error escriba un numero, no una letra")
        }
         cantidad = parseInt(prompt("Ingrese Cantidad de " + producto))
        error=1

    }while(isNaN(cantidad))
    final = precio * cantidad + final
    error=0

}
alert ("total de su compra " + final)