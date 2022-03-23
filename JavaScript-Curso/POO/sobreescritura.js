class Empleado{
    constructor(nombre,sueldo){
        this._nombre = nombre;
        this._sueldo = sueldo;
    }

    obtener_detalles(){
        return `Empleado --> nombre: ${this._nombre}, sueldo: ${this._sueldo}`;
    }
}

class Gerente extends Empleado{
     constructor(nombre, sueldo, departamento){
         super(nombre, sueldo);
         this._departameto = departamento;
     }

     //Aqui estamos sobreescribiendo el metodo obtener detalles de la clase padre
     obtener_detalles(){
         return `${super.obtener_detalles()}, Gerente: dpto: ${this._departameto}`
     }
}

//Aqui aplicamos el polimorfismo con un metodo generico que puede recibir  varios tipos
function imprimir(tipo){
    console.log(tipo.obtener_detalles());

    //Aqui preguntamos si la variable tipo pertenece a la clase Empleado
    if(tipo instanceof Empleado){
        console.log("Es un objeto de tipo empleado")
    }
    else  if(tipo instanceof Gerente){
        console.log("Es un objeto de tipo Gerente")
    }
}

let empleado1 = new Empleado("Juan", 5000);
let gerente1 = new Gerente("Manuel",2000,"Sistemas");
console.log(gerente1.obtener_detalles())

imprimir(empleado1)
imprimir(gerente1)
