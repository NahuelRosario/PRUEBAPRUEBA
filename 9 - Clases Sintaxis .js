class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
        this.amigos = [];
        this.sentado = true;
    }

    agregarAmigo(nombreAmigo) {
        this.amigos.push(nombreAmigo)
    }

    pararse(){
        this.sentado = false;
    }

}

const Persona1 = new Persona("Nahuel", 32);

console.log(Persona1)

Persona1.agregarAmigo("Matias");
Persona1.agregarAmigo("Martin");

console.log(Persona1)

Persona1.pararse()

console.log(Persona1)

