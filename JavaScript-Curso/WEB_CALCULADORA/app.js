console.log("App calculadora");

function sumar(){
    //const forma = document.getElementById("formulario");
    let numero1 = document.getElementById("operando_a");
    let numero2 = document.getElementById("operando_b");

    let resultado = Number(numero1.value) + parseInt(numero2.value);
    if(isNaN(resultado)){
        resultado = "OJO! La operacion no incluye numeros"
    }
    document.getElementById("resultado").innerHTML = `El resultado es: ${resultado}`;
}