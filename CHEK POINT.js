class figura{
    constructor(nombre){
        this.nombre=nombre
    }
}

class circulo extends figura {
    constructor(radio){
        super ("circulo")
        this.radio=radio
    }
    area (){
        return Math.PI * this.radio * this.radio
    }
}

const miCirculo = new circulo(5)
console.log(miCirculo.area())

const partes = ["hombros","rodilla"]
const cuerpo = ["cabeza",...partes,"y","dedos"]
console.log(cuerpo.join(""))
