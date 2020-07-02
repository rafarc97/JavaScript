function validarForma(forma){
    //Validamos el usuario
    var usuario = forma.usuario;
    if (usuario.value === "" || usuario.value === "Escribir usuario"){
        alert("Debe proporcionar un nombre de usuario");
        usuario.focus();
        usuario.select();
        return false; //se evita el envío del usuario al servidor
    }
    //Validamos el password
    var password = forma.password;
    if (usuario.value === "" || usuario.value.length < 3){
        alert("Debe proporcionar un password al menos de 3 caracteres");
        password.focus();
        password.select();
        return false; //se evita el envío del password al servidor
    }
    //Validamos el usuario
    var tecnologias = forma.tecnologia;
    var checkSeleccionado = false;
    //revisamos si se selecciono algún checkbox
    for (i = 0; i < tecnologias.length; i++){
        if(tecnologias[i].checked){ //agarantizamos que se haya seleccionado al menos un elemento
            checkSeleccionado = true;
        }
    }
    if(!checkSeleccionado){
        alert("Debe proporcionar una Tecnología");
        return false;
    }
    
    //Validamos el genero
    var generos = forma.genero;
    var radioSeleccionado = false;
    
    //revisamos si se selecciono algun radiobutton
    for(i  = 0; i < generos.lngth; i++){
        if(generos[i].checked){
            radioSeleccionado = true;
        }
    }
    if (!radioSeleccionado){
        alert("Debe seleccionar el Genero");
        return false;
    }
    
    //Validamos la ocupación
    var ocupacion = forma.ocupacion;
    if(ocupacion.value === ""){
        alert("Debe seleccionar una ocupacion");
        return false;
    }
    
    //Solo si el formulario es validado, llegamos a este punto y por lo tanto
    ////se envían los datos al servidor 
    //Formulario validado
    alert("Formulario valido, enviando datos...");
    return true;
}