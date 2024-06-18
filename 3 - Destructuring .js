// DESTRUCTURING EN OBJETOS ==> NO IMPORTA EL ORDEN

// const persona = {
//     nombre: "Carlos",
//     apellido: "Perez",
//     edad: 50,
//     mail: "cperez@mail.com",
//     direccion: "calle falsa 1 2 3",
//     ciudad:"Posadas",
//     pais: "Argentina",
// }

// function mostrarNombre (persona) {
//     // const nombre = persona.nombre;
//     // const apellido = persona.apellido;
//     const {nombre, apellido} = persona;
//     console.log("el nombre de usuario es ", nombre, "y el apellido es ", apellido)
// }

// mostrarNombre(persiona)

//////////////////////////////////////////////////

const persona = {
    nombre:"Nahuel",
    apellido:"Aguirre",
    edad: 50,
    mail: "NAguirre@gmail",
    direccion: "calle falsa 123",
    pais: "Argentina",
};

function traernombre (persona){
const {nombre,mail,apellido} = persona;
console.log("El nombre es " + nombre + ", su apellido es " + apellido + " y su mail es " + mail )
}

traernombre(persona)

// DESTRUCTURING EN ARREGLOS ==> MUY IMPORTANTE LA POSICION DEL INDICE

const miArray = [1, 2, 3, 4]

const [num1, num2, num3, num4] = miArray;


const palabras = ["hola", "Nahuel", "NAguirre@gmail.com", "calle falsa 123"];

const [saludo, nombre, mail, direccion] = palabras

// LO UNICO QUE ME PUEDE VINCULAR LA VARIABLE CON EL VALOR ES LA POSICION DEL ARREGLO DENTRO DE LA DESTRUCTURIZACION




















