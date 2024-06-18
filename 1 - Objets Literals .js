//antes de EcmasCript6

const miObjeto1 = new Object();
miObjeto1.nombre = "Nahuel";
miObjeto1.apellido = "Aguirre";
miObjeto1.edad = 32;
console.log(miObjeto1)

// despues de EcmasCrip6

const miObjeto = {
    nombre: "Nahuel",
    apellido: "Aguirre",
    edad: 32,
}
console.log(miObjeto)

// ////////////////////////////////////////////////////////////////////////////////////////////////////////
// EL METODO PERMITE DE FORMA DINAMICA AGREAGAR UNA NUEVA PROPIEDAD Y SU VALOR AL OBJETO

const salta = {
    pais: "Argentina",
    continente: "sudamericano",
    asignarPropiedad(clave,valor) {
        this[clave] = valor;
    },
};

salta.asignarPropiedad("clima","frio")
console.log(salta)

/////////////////////////////////////////////////////////////////////////////////////////////////////////

const nombre = "Nahuel";
const apellido = "Aguirre";
const edad = 32;

const persona = {
    nombre,
    apellido,
    edad,
}
console.log(persona)

////////////////////////////////////////////////////////////////////////////////////////////////////////



