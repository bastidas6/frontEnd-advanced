mi_funcion2();
mi_funcion1();

function mi_funcion1(){
    console.log("Funcion 1");
}

function mi_funcion2(){
    console.log("Funcion 2");
}

//Funcion de tipo callback
function imprimir(mensaje){
    console.log(mensaje);
}
function sumar(op1, op2, funcion_call_back){
    let res = op1 + op2;
    funcion_call_back(`Resultado: ${res}`)
 
}
sumar(5,3,imprimir); 

//Llamadas asincronas con uso de la funcion settimeout
function mi_funcion_callback(){
    console.log("Saludo asincrono despues de 6  seg");
}
setTimeout(mi_funcion_callback, 6000); //Se ejecuta despues de 3 segundos

//Funcion setInterval
let reloj = () => {
    let fecha = new Date();
    console.log(`${fecha.getHours()}: ${fecha.getMinutes()}: ${fecha.getSeconds()}`);
};

setInterval(reloj, 1000);


