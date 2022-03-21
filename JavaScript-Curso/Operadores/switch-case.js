let numero = "4";
let numero_texto = "valor desconocido";

switch(Number(numero)){
    case 1:
        numero_texto = "numero uno";
        break;
    case 2:
        numero_texto = "numero dos";
        break;
    case 3: 
        numero_texto = "numero tres";
        break; 
    case 4:
        numero_texto = "numero cuatro";
        break;  
    default:
        numero_texto = "Caso no encontrado";
        break;  
}

console.log(numero_texto)
