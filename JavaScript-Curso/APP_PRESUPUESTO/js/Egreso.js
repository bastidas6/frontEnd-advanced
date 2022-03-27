class Egreso extends Dato{
    static contador_egresos = 0;

    constructor(descripcion, valor){
        super(descripcion, valor);
        this._id_egreso = ++Egreso.contador_egresos;
    }

    get id(){
        return this._id_egreso;
    }
}