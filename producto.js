
alert("Ud. tiene una tabla con los productos: Yerba, Fideos, Azúcar, presione + o - para agregar o quitar un producto")
class Productos {
    constructor(tipo, marca, cantidad){
        this.tipo = tipo;
        this.marca = marca;
        this.cantidad = cantidad;
    }
}



const producto1 = new Producto ("Yerba", "Rica",13)
const producto2 = new Producto ("Fideos", "Los Sabrosos", 28)
const producto3 = new Producto ("Azúcar", "La Dulce", 29)

let arrayProductos = [producto1, producto2, producto3]

for (let i = 0; i < arrayProductos.length; i++){
    console.log(arrayProductos[i])
}

for (let productoEnArray of arrayProductos){
    console.log(productoEnArray)
}
