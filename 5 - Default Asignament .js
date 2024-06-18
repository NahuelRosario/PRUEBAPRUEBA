
function saludar (nombre =`Invitado`) {
    console.log(`Hola, ${nombre}!`) 
}

saludar()
saludar("Roberto")

/////////////////////////////////////////////////////

let valor1 = undefined;
let valor2 = "Valor por defecto"

let resultado = valor1 ?? valor2;
console.log(resultado)

/////////////////////////////////////////////////////

let a = null; 
let b = "Rosario";
let c = "Central";
let d = undefined;

let x = d ?? a;

console.log(x);

// CUANDO SEAN LAS DOS TRUE (STRING/NUMERO/TRUE) VA A MOSTRAR LA PRIMERA
// CUANDO SEAN LAS DOS FALSE (NULL/UNDEFINED) VA A MOSTRAR LA SEGUNDA
// CUANDO HAYA UNA TRUE Y UNA FALSE MUESTRA LA TRUE

