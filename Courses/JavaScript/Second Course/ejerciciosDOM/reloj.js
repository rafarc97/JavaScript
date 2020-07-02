const d = document;


export function digitalClock(clock,btnPlay,btnStop){
    let clockTempo;

    d.addEventListener("click", e => {
        if(e.target.matches(btnPlay)){
            clockTempo = setInterval(() => {
                let clockHour = new Date().toLocaleTimeString();
                d.querySelector(clock).innerHTML = `<h3> ${clockHour} </h3>`;
            },1000);

            e.target.disabled = true;
        }
        if(e.target.matches(btnStop)){
            clearInterval(clockTempo);
            d.querySelector(clock).innerHTML = null;
            d.querySelector(btnPlay).disabled = false; //se reactiva el botón de play
        }
    });
}

export function alarma (sound,btnPlay,btnStop){
    let alarmaTempo;
    const $alarma = d.createElement("audio");
    $alarma.src = sound;

    d.addEventListener("click", e => {
        if(e.target.matches(btnPlay)){
            alarmaTempo = setTimeout(() => {
                $alarma.play(); //método de la API de la etiqueta HTML de audio
            },2000);

            e.target.disabled = true;
        }
        if(e.target.matches(btnStop)){
            clearTimeout(alarmaTempo); //se
            $alarma.pause(); //se elimina e setTimeout
            //se reinicia el audio al segundo 0 (preparado para la siguiente vez que se pulse en iniciar alarma)
            $alarma.currentTime = 0; 
            d.querySelector(btnPlay).disabled = false; //se reactiva el botón de play
        }
    })
}