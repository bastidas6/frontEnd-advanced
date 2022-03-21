//Esto es un objeto
let persona = {
    nombre: "Manuel",
    apellido: "Bastidas",
    email: "manu@gmail.com",
    edad: 28,
    idioma: 'español',
    get lang(){
        return this.idioma.toUpperCase();
    },

    set lang(lang){
        this.idioma = lang.toUpperCase();
    },

    //Formas de crear metodos de un objeto
    /* 
    nombre_completo: function(){
        return this.nombre + " " + this.apellido;
    }
    */

    get nombre_completo(){
        return this.nombre + " " + this.apellido;
    }
}

console.log(persona.nombre_completo)
console.log(persona.lang)

//Aqui se manda llamar el metodo set
persona.lang = "mx";
console.log(persona)