let sumar = function(a,b){return a+b}
let resultado = sumar(1,2)
console.log(resultado);

const sumar_funcion_tipo_flecha = /*Aqui empieza la función flecha --> */ (a,b) => a+b;
resultado = sumar_funcion_tipo_flecha(3,5);
console.log(resultado);

//Ejemplo argumentos y parametros
let resultado2 = sumarTodo(5, 4, 13, 10, 9, 80);
console.log(resultado2);

function sumarTodo(){
    
    let suma = 0;
    for(let i = 0; i < arguments.length; i++){
        suma += arguments[i];
    }
    return suma;
}


