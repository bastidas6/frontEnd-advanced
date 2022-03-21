//Ciclo while
let contador = 0;

while(contador < 4){
    console.log(contador);
    contador ++;
}

//Ciclo do-while
let contador2 = 0;
do{
    console.log(contador2);
    contador2++;
}while(contador2 < 4);

//Ciclo for integrada con el break
for(let contador3 = 0; contador3 < 3; contador3++){
    console.log(contador3);
}

for(let contador4 = 0; contador4 <= 10; contador4 ++){
    if(contador4 % 2 == 0){
        console.log(contador4)
        break;
    }
    
}

