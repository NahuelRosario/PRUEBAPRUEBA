class Edificio {
    constructor(piso,dto){
        this.piso = piso;
        this.dto = dto;
        this.puerta = true;
        this.ascensor = false;
    }

    abrirPuerta(){
        this.puerta = false;
    }
}

class Inquilino extends Edificio {
    constructor (piso,dto,nombre,profesion){
        super (piso,dto);
        this.nombre = nombre;
        this.profesion = profesion;
    }
}

Inquilino1 = new Inquilino(1,2,"Nahuel","Programador");
Inquilino1.abrirPuerta()
console.log(Inquilino1)