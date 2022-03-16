var nombre = "Juan";
var apellido = "Perez";

//Concatenación con el simbolo +
var nombre_completo = nombre + " "+ apellido;
console.log(nombre_completo)

//Concatenación de numero a cadena, en este caso el numero lo trata como una cadena
//Se trata de izquierda a derecha
var x = nombre + 2 + 4;
console.log(x)

//Los parentesis aumentan la prioridad
x = nombre + (2 + 4)
console.log(x)

//Se evaluan las expresiones de izq a der
x = 2 + 4 + nombre;
console.log(x)