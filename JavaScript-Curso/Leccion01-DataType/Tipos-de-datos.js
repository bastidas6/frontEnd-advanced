//Tipo de dato String
var nombre = "Manuel";
console.log(nombre);

//La variable nombre paso de String a numerico, 
//y la propiedad typeof sirve para saber el tipo de dato de la variable 
nombre = 30;
console.log(typeof nombre);

//Tipo de dato numerico
var numero = 23;
console.log(numero);

//Tipo de dato object
var objeto = {
    nombre: "Juan",
    apellido: "Ramirez",
    telefono: "234567"
}
console.log(objeto);

//Tipo de dato boolean (true, false)
var flag = true;
console.log(flag);

//Tipo de dato function
function mi_funcion(){}
console.log(mi_funcion)

//Tipo de dato Symbol
var simbolo = Symbol("mi simbolo");
console.log(simbolo);

//Tipo clase es una function
class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(Persona)

//Tipo de dato undefined
var x;
console.log(x)

//Tipo de dato null
var y = null;
console.log(y)

//Tipo de dato array, este es un tipo de dato Object
var autos = ["BMW", "Audi", "Volvo"];
console.log(autos)

//Tipo de dato string que es un empty
var z = "";
console.log(z);