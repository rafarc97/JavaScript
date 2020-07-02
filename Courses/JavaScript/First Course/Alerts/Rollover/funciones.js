window.onload = cargarImagenes;

function cargarImagenes(){
    //document.images nos regresa un arreglo con todas las imagenes que tenemos en el document html
    for(var i = 0; i < document.images.length; i++){
        //si la imagen se encuentra dentro de un nodo padre el cual es un hipervínculo =>
        if (document.images[i].parentNode.tagName == "A"){
            configuraRollover(document.images[i]);
        }
    }
}

function configuraRollover(imagen){
    imagen.imagenOff = new Image ();
    imagen.imagenOff.src = "boton_off.jpg";
    imagen.onmouseout = cambiaOff;
    
    imagen.imagenOn = new Image ();
    imagen.imagenOn.src = "boton_on.jpg";
    imagen.onmouseover = cambiaOn;
}

function cambiaOff(){
    this.src = this.imagenOff.src; //tomamos los valores ya asociados
}

function cambiaOn(){
    this.src = this.imagenOn.src; //tomamos los valores ya asociados
}

