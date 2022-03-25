const mostrar_reloj = () => {
    let fecha = new Date();
    let hora = formato_con_cero(fecha.getHours());
    let minutos = formato_con_cero(fecha.getMinutes());
    let segundos = formato_con_cero(fecha.getSeconds());
    document.getElementById("hora").innerHTML = `${hora}: ${minutos}: ${segundos}`;

    const meses = ["Ene", "Feb", "Mar", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
    const dias = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"];

    let dia_semana = dias[fecha.getDay()];
    let dia_numero = fecha.getDate();
    let mes = meses[fecha.getMonth()];
    let fecha_texto = `${dia_semana}, ${dia_numero} ${mes}`
    document.getElementById("fecha").innerHTML = fecha_texto;

    document.getElementById("contenedor").classList.toggle('animar')
};

const formato_con_cero = (hora) => {
    if(hora < 10){
        hora = "0" + hora;
    }
    return hora;
};

setInterval(mostrar_reloj,  1000);

