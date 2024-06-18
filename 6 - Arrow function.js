function sumar(a, b) {
    return a + b
}
console.log(sumar(5, 8))

/////////////////////////////////////////////////

const sumar1 = (c, d) => c + d;
console.log(sumar1(5, 10))

/////////////////////////////////////////////////

const ArrayNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = ArrayNum.filter((num) => num % 2 == 0);
console.log(pares)

/////////////////////////////////////////////////

const persona = {
    nombre: "Nahuel",
    amigos: ["Mariana", "Mati", "Martin"],
    saludar: function (){
        console.log("Hola soy", this.nombre)
    },
    despedirse: () => {
        console.log("Me despido,", this.nombre)
    }
}
persona.saludar()
persona.despedirse()