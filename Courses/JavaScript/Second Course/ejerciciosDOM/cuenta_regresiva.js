const d = document;

export function countdown(id,limitDate,finalMessage){
    const $countdown = d.getElementById(id),
        countdownDate = new Date(limitDate).getTime();

let countdownTempo = setInterval(() => {
    let now = new Date().getTime(),
        limitTime = countdownDate - now,
        days = Math.floor(limitTime / (1000 * 60 * 60 * 24)),
        /* El slice hace que cuando el string tenga + 2 caracteres recorte los sobrantes.
        Esto se utiliza para cuando la hora sea de 2 dígitos no aparezca por ejemplo
        020 horas, sino 20 horas */
        hours = ("0" + Math.floor(limitTime % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))).slice(-2),
        minutes = ("0" + Math.floor(limitTime % (1000 * 60 * 60) / (1000 * 60))).slice(-2),
        seconds = ("0" + Math.floor(limitTime % (1000 * 60) / (1000))).slice(-2);

    $countdown.innerHTML = `<h3>Faltan: ${days} días ${hours} horas ${minutes} minutos ${seconds} segundos </h3>`;
    //console.log(countdownDate, now, limitTime);

    if(limitTime < 0){
        clearInterval(countdownTempo);
        $countdown.innerHTML = `<h3>${finalMessage}</h3>`;

    }
},1000);


/* 

Para obtener la fecha en milisegundos usamos el método getTime(), este nos ayudará
a realizar los cálculos sobre las fechas más fácilmente 

*/
}