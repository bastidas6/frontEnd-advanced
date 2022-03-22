class Persona{
    //Atributo estatico 
    static contador_personas = 0;

    //Los atributos del constructor son atributos no estaticos
    constructor(id_persona, nombre, apellido, edad){
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