//Funcion normal
function mi_funcion(){
    console.log("Salu2 desde mi función");
}

//Función flecha --> arrow function
// let mi_funcion_flecha = () => {
//     console.log("Salu2 desde mi función flecha");
// }

//Funcion flecha en una sola linea
//const mi_funcion_flecha = () => {console.log("Salu2 desde mi función flecha de una sola linea")}
//mi_funcion_flecha();


//Funcion flecha que retorna
// const saludar = () => {
//     return "Saludos desde función flecha";
// }

//Funcion flecha que retorna en una sola linea
const saludar = () => "Saludos desde función flecha de una linea";
console.log(saludar());

const regresa_objeto = () => ({
    nombre: "Juan",
    apellido:"perez"
})

console.log(regresa_objeto());

//Si la funcion flecha es con un solo parametro entonces se pueden omitir los parentesis
const funcion_con_parametros = (mensaje) => {console.log(mensaje)};
funcion_con_parametros("Saludos con parametros"); 

const funcion_con_parametros2 = mensaje => {console.log(mensaje)};
funcion_con_parametros2("Hola, sin parentesis");
