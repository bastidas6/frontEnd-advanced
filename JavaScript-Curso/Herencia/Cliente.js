class Cliente extends Persona{

    static contador_clientes = 0;

    constructor(fecha_registro){
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