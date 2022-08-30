
/*
let numero2 = [1, 2, 3, 4];
console.log("numeros", numero2.length)

let animal = "tortuga"

let animales = ["oso", "perro", "gato", animal];
console.log("animales", animales.length)
console.log(animales)

let ultimaposicion = animales.length -1
console.log(animales [ultimaposicion])
console.log(numero2)

*/

const numeros = []
for (let index = 1; index <= 100; index = index +1) {
    numeros.push(index);
}

console.log(numeros)

let suma = 0
for (let index = 0; index < numeros.length; index++) {
    const numero = numeros[index];
    suma = numero
}

console.log(suma)