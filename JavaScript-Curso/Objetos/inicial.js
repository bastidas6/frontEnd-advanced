//Esto es un objeto
let persona = {
    nombre: "Manuel",
    apellido: "Bastidas",
    email: "manu@gmail.com",
    edad: 28,
    nombre_completo: function(){
        return this.nombre + " " + this.apellido; 
    }
}

console.log(persona.edad)
console.log(persona)
console.log(persona.nombre_completo())

let persona2 = new Object();
persona2.nombre = "Miguel";
persona2.telefono = 25465478;
persona2.direccion = "Ciudad gotica";

console.log(persona["apellido"])

for(propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad])
}

//Agregar una nueva propiedad al objeto
persona.novia = "Melany"

console.log(persona)

//Borrar una propiedad d eun objeto
delete persona.novia;
console.log(persona)

//Formas de imprimir un objeto
//Concatenar cada valor de cada propiedad
console.log(persona.nombre + ", " + persona.apellido)

//for in
for(nombrePropiedad in persona){
    console.log(persona[nombrePropiedad])
}

//Con la clase Object como si fuera un array
let personaArray = Object.values(persona);
console.log(personaArray)

//Utilizando el metodo JSON
let string_persona = JSON.stringify(persona);
console.log(string_persona)