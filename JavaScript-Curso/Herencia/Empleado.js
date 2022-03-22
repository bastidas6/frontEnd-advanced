class Empleado extends Persona{

    static contador_empleados = 0;

    constructor(sueldo){
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