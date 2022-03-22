let persona1 = {
    nombre: "Juan", 
    apellido: "Perez",
    nombreCompleto: function(){
        return this.nombre + " " + this.apellido
    }
}

let persona2 = {
    nombre: "Carlos",
    apellido: "Lara"
}

//Haciendo uso de call para el metodo nombreCompleto
console.log(persona1.nombreCompleto.call(persona2));
