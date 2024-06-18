function Persona (nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
}

Persona.prototype.saludar = function () {
    console.log("Hola, soy ", this.nombre);
} 

const Persona1 = new Persona ("Nahuel",32);

console.log(Persona1);

Persona1.saludar();
