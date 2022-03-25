console.log("Listado de personas");

const personas = [
    new Persona("Juan", "Perez"),
    new Persona("Karla", "Lopez")
];

function mostrar_personas(){
    console.log("Se esta ejecutando el metodo mostrar personas");
    let texto = "";
    for(let persona of personas){
        texto += `<li> ${persona._nombre} ${persona.apellido}</li>`;
    }
    document.getElementById("personas").innerHTML = texto;
}

function agregar_persona(){
    const forma = document.forms["forma"];
    const nombre = forma["nombre"];
    const apellido = forma["apellido"];
    if(nombre.value != "" && apellido.value != ""){
        const persona = new Persona(nombre.value,apellido.value);
        console.log(persona);
        personas.push(persona)
        mostrar_personas();
    }else{
        console.log("No hay información que agregar");
    }
    
}