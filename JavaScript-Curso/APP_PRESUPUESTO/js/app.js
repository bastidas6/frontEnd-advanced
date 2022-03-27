const ingresos = [
    new Ingreso("Salario", 2100.00),
    new Ingreso("Venta coche", 1500.00)
];

const egresos = [
    new Egreso("Renta",900.00),
    new Egreso("Ropa", 500.00)
];

let cargarApp = () =>{
    cargar_cabecero();
    cargar_ingresos();
    cargar_egresos();
};

let total_ingreso = () => {
    let suma_ingreso = 0;
    for(let ingreso of ingresos){
        suma_ingreso += ingreso.valor;
    }
    return suma_ingreso;
};

let total_egresos = () => {
    let suma_egresos = 0;
    for(let egreso of egresos){
        suma_egresos += egreso.valor;
    }
    return suma_egresos;
};

let cargar_cabecero = () => {
    let presupuesto_total = total_ingreso() - total_egresos();
    let porcentaje_egresos = total_egresos()/total_ingreso();
    document.getElementById("presupuesto_total").innerHTML = formato_moneda(presupuesto_total);
    document.getElementById("porcentaje_egreso").innerHTML = formato_porcentaje(porcentaje_egresos);
    document.getElementById("ingreso_total").innerHTML = formato_moneda(total_ingreso());
    document.getElementById("egreso_total").innerHTML = formato_moneda(total_egresos());
};

const formato_moneda = (valor) => {
    return valor.toLocaleString("en-US", {style: "currency", currency: "USD", minimumFractionDigits:2});
};

const formato_porcentaje = (valor) => {
    return valor.toLocaleString("en-US", {style: "percent", minimumFractionDigits: "1"});
}

const cargar_ingresos = () => {
    let ingresosHTML = "";
    for(let ingreso of ingresos){
        ingresosHTML += crear_ingreso_html(ingreso);
    }
    document.getElementById("lista-ingresos").innerHTML = ingresosHTML;
};

const crear_ingreso_html = (ingreso) => {
     let ingresoHTML = `
     <div class="elemento limpiarEstilos">
            <div class="elemento_descripcion">${ingreso.descripcion}</div>
                    <div class="derecha limpiarEstilos">
                        <div class="elemento_valor">+ ${formato_moneda(ingreso.valor)}</div>
                        <div class="elemento_eliminar">
                            <button class="elemento_eliminar--btn">
                            <ion-icon name="close-outline"
                            onclick="eliminar_ingreso(${ingreso.id})"></ion-icon>
                        </button>
                    </div>
            </div>  
    </div>
     `;

     return ingresoHTML;
};

const eliminar_ingreso = (id) => {
    let indice_eliminar = ingresos.findIndex(ingreso => ingreso.id === id);
    //for(let ingreso of ingresos){ }
    ingresos.splice(indice_eliminar,1);
    cargar_cabecero();
    cargar_ingresos();

};

const cargar_egresos = () => {
    let egresosHTML = "";
    for (let egreso of egresos){
        egresosHTML += crear_egreso_html(egreso);
    }
    document.getElementById("lista-egresos").innerHTML = egresosHTML;
};

const crear_egreso_html = (egreso) => {
    let egresoHTML = `
    <div class="elemento limpiarEstilos">
        <div class="elemento_descripcion">${egreso.descripcion}</div>
            <div class="derecha limpiarEstilos">
                <div class="elemento_valor"> - ${formato_moneda(egreso.valor)}</div>
                <div class="elemento_porcentaje">${formato_porcentaje(egreso.valor/total_egresos())}</div>
                <div class="elemento_eliminar">
                    <button class="elemento_eliminar--btn">
                        <ion-icon name="close-outline"
                        onclick="eliminar_egreso(${egreso.id})"></ion-icon>
                    </button>
                </div>
            </div>
    </div>
    `
    return egresoHTML; 

};

const eliminar_egreso = (id) => {
    let indice_eliminar = egresos.findIndex(egreso => egreso.id === id);
    egresos.splice(indice_eliminar,1);
    cargar_cabecero();
    cargar_egresos();
};

let agregar_dato = () => {
    let forma = document.forms["forma"];
    let tipo = forma["tipo"];
    let descripcion = forma["descripcion"];
    let valor = forma["valor"];
    if(descripcion.value !== '' && valor.value !== '' ){
        if(tipo.value === "ingreso"){
            ingresos.push(new Ingreso(descripcion.value, +valor.value));
            cargar_cabecero();
            cargar_ingresos();
        }else if(tipo.value === "egreso"){
            egresos.push(new Egreso(descripcion.value, +valor.value));
            cargar_cabecero();
            cargar_egresos();
        }

    }
};