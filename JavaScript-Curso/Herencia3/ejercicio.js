class Dispositivo_Entrada{

    constructor(tipo_entrada, marca){
        this._tipo_entrada = tipo_entrada;
        this._marca = marca;
    }
    get tipo_entrada(){
        return this._tipo_entrada;
    }
    set tipo_entrada(tipo_entrada){
        this._tipo_entrada = tipo_entrada;
    }
    get marca(){
        return this._marca;
    }
    set marca(marca){
        this._marca = marca
    }
}

class Raton extends Dispositivo_Entrada{

    static contador_ratones = 0;

    constructor(tipo_entrada, marca){
        super(tipo_entrada, marca);
        this._id_raton = ++Raton.contador_ratones;
    }
    get id_raton(){
        return this._id_raton; 
    }
    toString(){
        return `Raton: [idRaton: ${this._id_raton}, tipoEntrada: ${this._tipo_entrada}, Marca: ${this._marca }]`
    }
}



class Teclado extends Dispositivo_Entrada{

    static contador_teclados = 0;

    constructor(tipo_entrada, marca){
        super(tipo_entrada, marca);
        this._id_teclado = ++Teclado.contador_teclados;
    }
    get id_teclado(){
        return this._id_teclado;
    }
    toString(){
        return `Teclado: [id_teclado: ${this._id_teclado}, tipo entrada: ${this.tipo_entrada}, marca: ${this._marca}]`
    }
}

class Monitor{
    static contador_monitores = 0;
    constructor(marca, tamaño){
        this._id_monitor = ++Monitor.contador_monitores;
        this._marca = marca;
        this._tamaño = tamaño
    }
    get id_monitor(){
        return this._id_monitor;
    }
    get marca(){
        return this._marca;
    }
    set marca(marca){
        this._marca = marca;
    }
    get tamaño(){
        return this._tamaño
    }
    set tamaño(tamaño){
        this._tamaño = tamaño;
    }
    toString(){
        return `Monitor: [id_monitor: ${this._id_monitor}, marca: ${this._marca}, tamaño: ${this._tamaño}]`
    }
}

class Computadora{
    static contador_computadoras = 0;

    constructor(nombre, monitor, raton, teclado){
        this._id_computadora = ++Computadora.contador_computadoras;
        this._nombre = nombre;
        this._monitor = monitor;
        this._raton = raton;
        this._teclado = teclado;
    }

    toString(){
        return `Computadora: ${this._id_computadora},[ nombre: ${this._nombre} \n ${this._monitor} \n raton: ${this._raton}\n teclado: ${this._teclado}]`
    }
}

class Orden{
    static contador_ordenes = 0;

    constructor(){
        this._id_orden = ++Orden.contador_ordenes;
        this._computadoras = [];
    }
    get id_orden(){
        return this._id_orden;
    }
    agregar_computadora(computadora){
        this._computadoras.push(computadora);
    }
    mostrar_orden(){
        let computadoras_orden = ""
        for(let computadora of this._computadoras){
            computadoras_orden += `${computadora}`; 
        }

        console.log(`Orden: ${this._id_orden}, Computadoras: \n${computadoras_orden}`)
    }
}

let raton1 = new Raton("USB", "Toshiba")
console.log(raton1.toString())
let raton2 = new Raton("Bluetooh", "HP")
raton2.marca = "Dell";
console.log(raton2.toString());

let teclado1 = new Teclado("Normal", "HP")
console.log(teclado1.toString());
let teclado2 = new Teclado("USB", "ACER")
console.log(teclado2.toString())

let monitor1 = new Monitor("HP", "15pg")
console.log(monitor1.toString());
let monitor2 = new Monitor("DELL", "25PG");
console.log(monitor2.toString());

let computador1 = new Computadora("HP23", monitor1, raton1, teclado1);
console.log(computador1.toString())

let computador2 = new Computadora("Armada", monitor2, raton2, teclado2);
console.log(computador2.toString());

let orden1 = new Orden();
orden1.agregar_computadora(computador1);
orden1.agregar_computadora(computador2);
orden1.mostrar_orden();