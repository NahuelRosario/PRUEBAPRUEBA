
function sumar (a,b,c) {
    const sumar = a + b + c;
    return sumar
}

console.log(sumar(4,8));

console.log(sumar(4,8,7));

console.log(sumar(4,8,7,9));

/////////////////////////////////////////////
// QUIERO QUE SUME CUALQUIER CANTIDAD DE NUMEROS

function sumar2 (...numeros) {
    console.log(numeros)

    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
        }
    return suma
};


console.log(sumar2(2,4,6,8,10,12,14,16))
console.log(sumar2(2,4,6,8,10,12,))
console.log(sumar2(2,4,6,8,10,12,14,16,18,20,22,24,26))
