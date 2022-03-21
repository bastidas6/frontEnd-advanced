//Operadores aritmeticos +, -, /, *, **, %, ++, --
let a = 3, b = 2;
let z = b**a;
console.log("Resultado de la suma: " + z)

//Operadores de asignación =, +=, -=, *=, /=, %=, **=

//Operadores de comparación ==, ===, !=, !==
// == revisa si el valor es igual pero no el tipo
// === Revisa si el valor y el tipo son iguales

let letra = "3", numero =3;
let x = letra == numero;
console.log(x);

x = letra === numero;
console.log(x)

//Operadores relacionales >, <, >=, <=

let uno = 1, uno_en_letra = "2"
let resultado = uno >= uno_en_letra
console.log(resultado)

//Ejercicio numero par
let num = 11;
if(num % 2 === 0){
    console.log("El numero " + num + " es par.")
}else{
    console.log("El numero: " + num + " no es par")
}

//Operadores logicos and $$, or ||

//Operador ternario

let resul = 3 > 5 ? "Verdadero" : "falso";
console.log(resul)

num = 8;
let res = num % 2 == 0 ? "Numero par" : "Numero impar";
console.log(res) 

//Convertir de String a Number
let mi_numero = "18";
console.log(mi_numero)

let edad = Number(mi_numero)
console.log(typeof edad)



let result = (edad >= 18) ? "Puede votar" : "Muy joven para votar";
console.log(result)

//funcion isNan
 edad = "18x";
 if(isNaN(edad)){
     console.log("No es un numero");
 }else{
    if (edad >= 18){
        console.log("Puede votar")
    }else{
        console.log("Muy joven para votar")
    }
 }


