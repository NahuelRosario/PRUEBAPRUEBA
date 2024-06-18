// ENCAPSULAMIENTO
// es el principio de ocultar los detalles internos de la implementación de un objeto, 
// exponiendo solo las interfaces necesarias para interactuar con él. 
// Esto asegura la integridad de los datos y la seguridad de la implementación.

class cajafuerte {
    constructor() {
        this._dinero = 0;
    }
    depositar(cantidad) { this._dinero += cantidad };
    retirar(cantidad) {
        if (cantidad <= this._dinero) {
            this._dinero -= cantidad;
            console.log(cantidad)
            return cantidad
        }
        return 0;
    }
}

////////////////////////////////////////////////////////
// HERENCIA
// es un principio que le permite a una clase derivar propiedades y métodos de otra clase, 
// promoviendo la reutilización de código y la jerarquía en la estructuración de clases.

class padre {
    caminar() {
        console.log("caminando...");
    }
}

class Hijo extends padre { }

let hijo = new Hijo();
hijo.caminar();

////////////////////////////////////////////////////////
//POLIMORFISMO
//es una capacidad que permite que objetos de diferentes clases respondan a métodos con el mismo nombre, 
// cada uno según su propia implementación.

class Forma {
    dibujar() {
        console.log("Dibujado una forma genérica")
    }
}

class Circulo extends Forma {
    dibujar() {
        console.log("dibujando un circulo");
    }
}

class Cuadrado extends Forma {
    dibujar() {
        console.log("Dibujando un cuadrado");
    }
}

////////////////////////////////////////////////////////
//ABSTRACCION
// es el proceso de ocultar los detalles complejos de la implementación y exponer solo las características 
// esenciales y las funcionalidades de un objeto.

class Coche {
    constructor() {
        this._motorencendido = false;
    }
    _encenderMotor() {
        this._motorencendido = true;
        console.log("Motor encendido")
    }
    _apagarMotor() {
        this._motorencendido = false;
        console.log("Motor apagado")
    }
}

