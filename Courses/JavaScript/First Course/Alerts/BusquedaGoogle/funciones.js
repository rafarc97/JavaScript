window.onload = iniciaDatos; //se llama a la función iniciaDatos cuando se carga la pag html

function iniciaDatos(){
    document.getElementById("link").onclick = validaSalir; //cuando se de click se ejecuta la funcion validaSalir
    document.getElementById("linkSearch").onclick = busqueda;
}

function validaSalir(){
    if (confirm("Desea salir del sitio?")){ //confirm es similar a alerta, podremos seleccionar si o no
        alert("Nos vamos a google");
        return true;
    }
    else{
        alert("Nos quedamos en el sitio");
        return false;
    }
}

function busqueda(){
    //capturamos la información del usuario con la function prompt
    var respuesta = prompt("Escribe la cadena a buscar: ", "");
    //si responde algo:
    if (respuesta){
        alert("Tu respuesta fue: " + respuesta);
        //this hace referencia al elemento de linkSearch
        //? indica que vamos a añadir un parámetro
        //q indica que es un parámetro de tipo query
        var nuevoLink = this + "search?q=" + respuesta;
        alert("Nuevo link: " + nuevoLink);
        //redireccionamos el nuevo link
        window.location = nuevoLink;
        //para que no nos lleve al link originalmente registrado 
        //en el elemento "linkSearch" devolvemos false
        return false;
    }
    else{
        alert("No proporcionaste ninguna cadena a bsucar");
        return false;
    }    
}
