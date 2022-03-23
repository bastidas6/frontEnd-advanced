class Producto{

    static contador_productos = 0;

    constructor(nombre, precio){
        this._id_producto = ++Producto.contador_productos;
        this._nombre = nombre;
        this._precio = precio;
    }

    get id_producto(){
        return this._id_producto;
    }

    get nombre(){
        return this._nombre
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get precio(){
        return this._precio
    }

    set precio(precio){
        this._precio = precio;
    }

    toString(){
        return `id producto: ${this._id_producto}, nombre: ${this._nombre}, precio: ${this._precio}`
    }
}

let producto1 = new Producto("Jabon", 345676)
console.log(producto1.toString())