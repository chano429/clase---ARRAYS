
let arrayNombres = ["Pedro", "Agustina","María", "Walter", "Raúl"]

let nombreABuscar = prompt("Ingrese un nombre")
let indice = arrayNombres.indexOf(nombreABuscar)

if (indice !== -1){
    console.log(indice)
    arrayNombres.splice(indice,1)
    console.log(nombreABuscar + `, usuario eliminado!`)
    console.log(arrayNombres)
} else{
    alert("Usuario no encontrado")
}
// este código anterior, puedo usarla para quitar productos del carrito

console.log(arrayNombres.includes("María")) //para encontrar un nombre dentro de la tabla
console.log(arrayNombres.reverse()) // ojo con reverse, ya que modifica el array original, es un método destructivo


/* los métodos más usados son:
    * lenght
    * push
    * splice
    * indexOf
*/

class Persona {
    constructor(nombre, apellido, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
}

const persona1 = new Persona ("Pancho", "Piugh",13)
const persona2 = new Persona ("Marisa", "Globo", 28)
const persona3 = new Persona ("Gaby", "Miretti", 29)

let arrayPersonas = [persona1, persona2, persona3]

for (let i = 0; i < arrayPersonas.length; i++){
    console.log(arrayPersonas[i])
}

for (let personaEnArray of arrayPersonas){
    console.log(personaEnArray)
}

