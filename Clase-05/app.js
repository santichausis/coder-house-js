// Crear un objeto 

class Planta {
    constructor (nombre, tamaño, ambiente, precio ){
        this.nombre  = nombre;
        this.tamaño = tamaño;
        this.ambiente = ambiente;
        this.precio = precio;
    }
    mostrarPlanta() {
        console.log( `Tu planta es un/a ${this.nombre} con un tamaño ${this.tamaño} para vivir en ${this.ambiente} su valor aproximado es de $${this.precio}`)
    }
}

const planta1 = new Planta("🌵 Cactus ", "medio", "exterior", 130);
const planta2 = new Planta("🌹 Rosal", "grande", "exterior", 900);
const planta3 = new Planta("🪴 Croto Petra", "chico", "interior", 600);

planta1.mostrarPlanta()
planta2.mostrarPlanta()
planta3.mostrarPlanta()