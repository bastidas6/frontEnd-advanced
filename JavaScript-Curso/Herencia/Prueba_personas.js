class Persona{
    //Atributo estatico 
    static contador_personas = 0;

    //Los atributos del constructor son atributos no estaticos
    constructor(nombre, apellido, edad){
        this._id_persona = ++Persona.contador_personas;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }

    get id_persona(){
        return this._id_persona;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre=nombre;
    }

    get apellido(){
        return this._apellido 
    }

    set apellido(apellido){
        this._apellido = apellido;
    }

    get edad(){
        return this._edad
    }

    set edad (edad){
        this._edad = edad;
    }

    toString(){
        return `${this.id_persona} 
                ${this._nombre} 
                ${this._apellido}
                ${this._edad}`;
    }
}

class Empleado extends Persona{

    static contador_empleados = 0;

    constructor(nombre, apellido, edad, sueldo){
        super(nombre, apellido, edad);
        this._id_empleado = ++Empleado.contador_empleados;
        this._sueldo = sueldo;
    }

    get id_empleado(){
        return this._id_empleado;
    }

    get sueldo(){
        return this._sueldo;
    }

    set sueldo(sueldo){
        this._sueldo = sueldo;
    }

    toString(){
        return super.toString() + " " + this._id_empleado + " " + this._sueldo;
    }
}

class Cliente extends Persona{

    static contador_clientes = 0;

    constructor(nombre, apellido, edad, fecha_registro){
        super(nombre, apellido, edad);
        this._id_cliente = ++Cliente.contador_clientes;
        this._fecha_registro = fecha_registro;
    }

    get id_cliente(){
        return this._id_cliente;
    }

    get fecha_registro(){
        return this._fecha_registro;
    }

    set fecha_registro(fecha_registro){
        this._fecha_registro = fecha_registro;
    }

    toString(){
        return super.toString() + " " + this._id_cliente + " " + this._fecha_registro
    }
}

let persona1 = new Persona("Manuel", "Bastidas", 23)
console.log(persona1.toString());

let persona2 = new Persona("Piedad", "Ospina", 32)
console.log(persona2.toString());

let empleado1 = new Empleado("Karla", "Gomez", 25, 10000, );
console.log(empleado1.toString())

let empleado2 = new Empleado("Marina", "Quintero", 55, 3245678);
console.log(empleado2.toString())

let cliente1 = new Cliente("Angela", "Rua", 98, new Date());
console.log(cliente1.toString())

let cliente2 = new Cliente("Maria", "Lara", 36, new Date());
console.log(cliente2.toString())