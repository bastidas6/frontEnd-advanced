//Constructor de objetos de tipo Persona
function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
}

let padre = new Persona("Manuel", "Bastidas", "manuel@gmail.com")
console.log(padre)

let madre = new Persona("Nasly", "Ospina", "nasly@gmail.com");
console.log(madre)

padre.nombre = "Arcangel"
console.log(padre)