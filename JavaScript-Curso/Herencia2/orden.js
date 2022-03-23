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

class Orden{


    static contador_ordenes = 0;

    //Esto simula una constante
    static get MAX_PRODUCTOS(){
        return 5;
    }

    constructor(){
        this._id_orden = ++Orden.contador_ordenes;
        this._productos = [];
        this._contador_productos_agregados = 0;
    }

    get id_orden(){
        return this._id_orden
    }

    agregar_producto(producto){
        if(this._productos.lenght < Orden.MAX_PRODUCTOS){
            this._productos.push(producto);
            //Opcional, pero tambien se puede hcaer --> this._productos[this._contador_productos_agregados++] = producto;
        }else{
            console.log("NO se pueden agregar mas productos");
        }
    }

    calcular_total(){
        let total_venta = 0;
        for(let producto of this._productos){
            total_venta += producto._precio;
        }
        return total_venta;
    }

    mostrar_orden(){
        let productos_orden = "";
        for(let producto of this._productos){
            productos_orden += producto.toString() + " ";
        }

        console.log(`Orden: ${this._id_orden} Total: ${this.calcular_total}, Productos: ${productos_orden}`)
    }
}

let producto1 = new Producto("Jabon", 345676);
let producto2 = new Producto("Aceite", 500000);



let orden1 = new Orden();
orden1.agregar_producto(producto1);
orden1.agregar_producto(producto2);

orden1.mostrar_orden();

console.log(orden1)