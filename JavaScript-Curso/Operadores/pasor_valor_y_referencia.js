//Paso por valor
let x = 10; //Valor primitivo, no podemos asociarle atributos ni metodos asociados

function cambiar_valor(a){
    a = 20;
}

//Paso por valor 
cambiar_valor(x)
console.log(x)

//Paso por referencia
const persona = {
    nombre: "Manuel",
    apellido: "Bastidas"
}

function cambiar_valor_objeto(p1){
    p1.nombre = "Nasly";
    p1.apellido = "Ospina";
}

//Paso por referencia
cambiar_valor_objeto(persona);
console.log(persona)