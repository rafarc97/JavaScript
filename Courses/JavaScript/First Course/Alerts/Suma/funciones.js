function sumar(){
    //Envolvemos todo el código en un bloque
    //try y catch para procesar la expeción
    //en el caso de que haya ocurrido alguna
    try{
        //Pedimos el valor del operando a
        //primer argumento de prompt es el valor que se introduce
        //el segundo es una cadena vacia en caso de que no se introduzca nada
        var a = prompt("Valor a:", "");

        //validamos parametro a, !a revisa si la cadena es vacía o nula
        if (!a || isNaN(a)){ //isNotaNumber
            throw newError("Valor invalido de a:" + a);
        }

        //pedimos el valor del operando b
        var b = prompt("Valor b:", "");

        //validamos parametro b, !b revisa si la cadena esta vacia  o nula
        if (!b || isNaN(b)){
            throw newError("Valor invalido de b:" + b);
        }

        var c = parseInt(a) + parseInt(b);
        alert("La suma es: " + c);
    }

    catch(e){
        alert("El error es:" + e.message);
    }
}
