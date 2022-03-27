class Ingreso extends Dato{
    static contador_ingresos = 0;

    constructor(descripcion, valor){
        super(descripcion, valor);
        this._id_ingreso = ++Ingreso.contador_ingresos;
    }

    get id(){
        return this._id_ingreso;
    }
}