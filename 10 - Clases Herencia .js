
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

class Doctor extends Persona {
    constructor (nombre, edad, nMatricula){
        super(nombre,edad);
        this.nMatricula = nMatricula;
    }

}

const doctor1 = new Doctor("Patricia", 40, "36506")
console.log(doctor1)

doctor1.agregarAmigo("Pepe")
doctor1.pararse()

console.log(doctor1)