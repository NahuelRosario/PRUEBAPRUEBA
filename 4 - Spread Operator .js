// EN OBJETOS

const perro = {
    raza: "salchicha",
    nombre: "pancho",
    edad: 3,
    color: "marron",
}
const perro2 = {...perro};

perro.collar = true;

console.log(perro);
console.log(perro2)

//NO SOLO COPIO LAS PROPIEDADES DEL OBJETO SINO QUE MODIFICO EL VALOR DEL NOMBRE

const perro3 = {...perro, nombre: "Grofi"}

console.log(perro3)

/////////////////////////////////////////////////////////////////////////////////
/// EN ARREGLOS

const miArreglot = [ true, "palabra",{a:5}]

miArreglot.push("nuevoelemento")

console.log(miArreglot)

// SE AGREGA UN ELEMENTO AL ARRAY PERO SIGUE SIENDO UNO... EL MISMO
/////////////////////////////////////////////////////////////////////////

const miArreglo = [ true, "palabra",{a:5}]

const miNuevoArreglo = [...miArreglo, "Nuevo Elemento"];

console.log(miNuevoArreglo)

// SE CREA UNA COPIA DE LOS ELEMENTOS EN UN NUEVO ARREGLO Y LE SUMO UN NUEVO ELEMENTO
//////////////////////////////////////

const miArreglo1 = [12,54,63,81];

const miArreglo2 = [29,64,72,93,16];

const miArreglo3 = [...miArreglo1,...miArreglo2];

console.log(miArreglo3)


// OTRA HABILIDAD DEL SPREAD OPERATOR ES LA FACILIDAD PARA CONCATENAR ARREGLOS
///////////////////////////////////////

