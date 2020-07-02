window.onload = configuraSelect;

function configuraSelect(){
    //Elemento seleccionado por defecto
    document.getElementById("selectFaq").selectedIndex = 0;
    //si se selecciona otra opción (onchange)
    document.getElementById("selectFaq").onchange = cambiaPagina;
}

function cambiaPagina(){
    var elementoSelect = document.getElementById("selectFaq");
    //todo esto nos regresa el valor del elemento select que el usuario ha seleccionado
    var nuevaPagina = elementoSelect.options[elementoSelect.selectedIndex].value;
    if(nuevaPagina !== ""){
        window.location = nuevaPagina; //hace el cambio a la nueva pagina
    }
}