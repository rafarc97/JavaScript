const d = document;
let x = 0, 
    y = 0;



export function moveBall(e,ball,stage){
    const $ball = d.querySelector(ball),
        $stage = d.querySelector(stage),
        limitsBall = $ball.getBoundingClientRect(),
        limitsStage = $stage.getBoundingClientRect();

        /* 
        Todos los elementos del DOM tienen el método 
        getBoundingClientRect() que nos da un objeto con la anchura,altura,
        posición en x e y, y qué tan alejado está de los márgenes top,right,
        bottom y left y con esto vamos a conseguir limitar el movimiento de la
        pelota.

        En nuestro caso nos dará información acerca de:

        -la anchura y altura de la pelota (64 x 64)
        -cuanto de alejado está de los 4 márgenes (top,right,bottom,left)

        Acerca del stage, movamos hacia donde movamos la pelota, sus valores
        son fijos y por lo tanto no cambiarán.
        */
    console.log(limitsBall,limitsStage);
    console.log(e.keyCode);

    /* Para no cancelar todos los comportamientos por defecto que tuvieran
    las teclas de la computador pues solo nos interesa prevenirlos cuando
    pulsemos las teclas 37,38,39,40 */
    switch(e.keyCode){
        case 37:
            /* 
            Cuando la diferencia entre los márgenes de la pelota a la izquierda
            de la pantalla sea mayor a la diferencia de los márgenes del stage  
            a la izquierda de la pantalla se permite disminuir el movimiento en
            el eje x, si no, quiere decir que la pelota habría llegado al limite
            del stage y no lo permitiremos.

            La pelota se sale un poco del stage por temas de decimales de los píxeles,
            para ello usamos las funciones de Math para corrregirlo.

            */
            if(limitsBall.left > limitsStage.left + 1) {
                e.preventDefault();
                let redondeoY = Math.round(x);
                x--;
            }
            break;
        case 38:
            
            if(limitsBall.top > limitsStage.top) {
                e.preventDefault();
                let redondeoY = Math.round(y);
                y--;
            } /* en la web el eje y va al revés que en el eje cartesiano */
            break;
        case 39:
            if(limitsBall.right < limitsStage.right - 1) {
                e.preventDefault();
                let redondeoX = Math.round(x);
                x++;
            }
            break;
        case 40:
            if(limitsBall.bottom < limitsStage.bottom) {
                e.preventDefault();
                let redondeoY = Math.round(y);
                y++;
            }
            break;

        default:
            break;
    }

    $ball.style.transform = `translate(${x*15}px, ${y*15}px)`;
}



export function shortcuts(e){
    /* 

    Esto nos va a imprimir el tipo de tecla que pulsemos.
    Dentro de este evento keydown vamos a tener una propiedad
    muy importante que es la de keyCode (cada tecla tiene un
    código) que es el id de cada tecla
    
    */
    /* console.log(e);
    console.log(e.type);
    console.log(e.key); //imprime el nombre de la tecla que pulse
    console.log(e.keyCode); */ //imprime el keyCode de esa tecla
    /* 
    Las 3 siguientes propiedades imprimen true o false si
    la tecla que pulsemos son algunas de eesas 3 
    */
    /* console.log(`ctrl: ${e.ctrlKey}`);
    console.log(`alt: ${e.altKey}`);
    console.log(`shift: ${e.shiftKey}`); */



    /* 
    Creamos los atajos de teclado 
    Estos ejercicios podrían ser útiles para un programa de diseño
    que al pulsar una combinación de teclado en concreto se activará
    una función en concreto del programa como recortar, pegar, etc...
    */
    if(e.key === "a" && e.altKey){
        alert('Has lanzado un alert con la combinación alt + a');
    }
    if(e.key === "c" && e.altKey){
        confirm('Has lanzado un confirm con la combinación alt + c');
    }
    if(e.key === "p" && e.altKey){
        prompt('Has lanzado una prompt con la combinación alt + p');
    }
}