//Hoisting
mi_funcion(1,1)

//Declaración de la función
function mi_funcion(a,b){
    //console.log("Suma: " + (a+b))
    console.log(arguments.length)
    return a+b
}

mi_funcion(7,5)
let mi_resultado = mi_funcion(40,6)
console.log(mi_resultado)

//Declaracion de la funcion tipo expresion
let sumar = function(a,b){return a+b}
let resultado = sumar(1,2)
console.log(resultado);

//Llamando una función asi misma
(function(a,b){
        console.log("Ejecutando la funcion de suma: " + (a+b))
    }
)(3,4);

console.log(typeof mi_funcion)