let hora_dia = 9;

if(hora_dia >= 6 && hora_dia <= 11){
    console.log("Buenos dias")
}else if(hora_dia >= 12 && hora_dia <= 18){
    console.log("Buenas tardes")
}else if (hora_dia >= 19 && hora_dia <= 24){
    console.log("Buenas noches")
}else if(hora_dia >= 0 && hora_dia < 6){
    console.log("Durmiendo")
}else{
    console.log("Valor incorrecto")
}