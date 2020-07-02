import scrollTopButton from "./bottom_scroll.js";
import darkTheme from "./tema_oscuro.js";


const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
    hamburguerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock("#reloj","#activar-reloj","#desactivar-reloj");
    alarma("assets/alarma.mp3","#activar-alarma","#desactivar-alarma");
    /* como el countdown va a trabajar solamente sobre un id y vamos
    a utilizar internamente el método getElementById no vamos a usar el # 
    a diferencia de en las llamadas anteriores, lo usaríamos si usasemos
    querySelector, pero no lo vamos a usar. 

    Luego le pasamos un formato de JS aceptado, se puede
    pasar cualquier formato aceptado para el objeto Date
    */
    countdown("countdown","Feb 23, 2021 03:23:19","Felíz cumpleaños Rafa 😜");
    scrollTopButton(".scroll-top-btn");
    /* 
    A la clase dark-mode no le ponemos el punto porque lo vamos a modificar
    con los métodos add y remove de la classList 
    */
    darkTheme(".dark-theme-btn","dark-mode");
});

/* 

keydown para cuando pulsamos la tecla 
(suele ser el + utilizado de los 3) 

*/
d.addEventListener("keydown", e => {
    shortcuts(e);
    moveBall(e,".ball",".stage");
})

/* keyup para cuando dejamos de pulsar la tecla */
/* d.addEventListener("keyup", e => {
    shortcuts(e);
}) */

/* keypress para cuando tengamos presionada la tecla */
/* d.addEventListener("keypress", e => {
    shortcuts(e);
}) */