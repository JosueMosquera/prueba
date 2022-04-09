class Animal {
    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad=edad
    }
    despertar = ()=>{
        console.log(`${this.nombre} wake up`)
    }
}
const animal1 = new Animal('juan','23')
