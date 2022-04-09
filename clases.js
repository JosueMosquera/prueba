class Persona {
    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad=edad
    }
    despertar = ()=>{
        console.log(`${this.nombre} wake up`)
    }
}
const persona1 = new Persona('juan','23')
let datosAdicionales = {
    ...persona1,
    hobbie:'programar'
}
persona1.despertar()