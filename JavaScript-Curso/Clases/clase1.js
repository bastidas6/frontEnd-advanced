//Clase padre
class Persona{
    constructor (nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }

    nombre_completo(){
        return this._nombre + " " + this._apellido;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get apellido (){
        return this._apellido
    }

    set apellido(apellido){
        this._apellido = apellido;
    }
}

//Clase hija
class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre,apellido); //Llamar al constructor de la clase padre 
        this._departamento = departamento;
    }

    get departamento(){
        return this._departamento;
    }

    set departamento(departamento){
        this._departamento = departamento;
    }

    //Sobreescritura del metodo de la clase Padre 
    nombre_completo(){
        return super.nombre_completo() + " " + this._departamento
    }
}

let persona1 = new Persona("Juan", "Perez");
console.log(persona1);

//Metodo get
console.log(persona1.nombre)

//Metodo set
console.log(persona1.nombre = "Carlos")
console.log(persona1.nombre)

let persona2 =  new Persona("Marta", "Guarin");
console.log(persona2);

persona1.apellido = 7654

console.log(persona1) 

//Objeto de la clase hija
let empleado1 = new Empleado("Nasly", "Ospina", "Finanzas");
console.log(empleado1);
console.log(empleado1.nombre)
console.log(empleado1.nombre_completo());
console.log(persona1.nombre_completo());