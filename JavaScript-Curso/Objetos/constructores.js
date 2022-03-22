//Constructor de objetos de tipo Persona
function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    //Metodo en un constructor
    this.nombreCompleto = function(){
        return this.nombre + " " + this.apellido
    }
}

Persona.prototype.tel = "34567811"


let padre = new Persona("Manuel", "Bastidas", "manuel@gmail.com")
console.log(padre)

let madre = new Persona("Nasly", "Ospina", "nasly@gmail.com");
console.log(madre)


//Llamamos el metodo del objeto
console.log(padre.nombreCompleto())

padre.nombre = "Arcangel"
console.log(padre)

var miObjeto = new Object();  
var miObjeto2 = {}; /*Forma mas común */

var mi_cadenaa_uno = new String("Hola");
var mi_cadena_dos = "Hola"
