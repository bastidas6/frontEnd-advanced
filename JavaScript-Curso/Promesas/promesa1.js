let mi_promesa = new Promise((resolver, rechazar) => {
    let expresion = true;
    if(expresion){
        resolver("Resolvio correcto");
    }else{
        rechazar("Se produjo un error")
    }
});

// mi_promesa.then((valor, error) => {
//     console.log(valor);
//     console.log(error);
// });

//mi_promesa.then(valor => console.log(valor)).catch(error => console.log(error));

let promesa = new Promise((resolver) => {
    setTimeout(() => {resolver("Saludos con promesa y timeout")}, 3000 );
});

promesa.then(valor => console.log(valor));