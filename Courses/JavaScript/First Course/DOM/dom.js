    //console.log(window)
    //console.log(document) //mapea todo el contenido del HTML

/*  

API: Aplication programming interface (interfaz de programación de aplicación). En un lenguaje de aplicación,
una API es una serie de objetos/mecanismos que tiene el lenguaje implementado 
en ciertas áreas (en este caso JS de los navegadores) para poder interactuar con el propio navegador.
Con esto podremos tener el control de todo el contenido del navegador (barra de direcciones, tamaño, posicionamiento,
    sistema operativo del usuario, ubicación del usuario, ...). 

    Existen muchos tipos de WEB APIs:

        -Eventos, 
        -Forms, 
        -Consumo de datos asíncrono con AJAX -Fetch, 
        -History (controlarel historial), 
        -Web storage (almacenamiento en la web), 
        -Geolocation (geolocalización), 
        -Drag & Drop (para arrastrar y soltar), 
        -Indexed DB (pequeña BD), Canvas (para dibujar), 
        -MatchMedia (Control de las media queries en CSS) etc... 


        El DOM es como los navegadores representan el código HTML y XML para trabajarlo con JavaScript.
        El DOM es una interfaz estandarizada.
        EL DOM es la API que tiene JavaScript para manejar los navegadores
        El CSSOM es otra API de JavaScript que sirve para controlar código CSS dentro de los navegadores
        El DOM y el CSSOM están muy relacionadas entre sí
        El BOM NO es una API estándar (aunque casi que se considera estándar por funcionar casi todos los
            navegadores de la misma manera).
        Para detectar ubicación del usuario, ubicaciónd del navegador en la pantalla, detecar ancho y alto,
        manejo de historial, barra de direcciones.


*/



/*  
    Podemos ver el objeto "navigator", que controla características como detectar el idioma del HTML,
    detectar el S0, el userAgent (características del navegador)
    También podemos ver otros como:
    Objeto history que es el que nos controla el historial de la página
    Objeto Index DB (pequeña Bases de Datos dentro del navegador)
    Objeto Location, que contiene todas las partes que forman la URL
*/
/*
    //Un ejemplo de una API
    let texto = "Hola"
    const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto))
    hablar(texto) 
*/
    




    
/*
    console.log("*********Elementos del Documento**********")
    
    //Todo lo que cuelga del scope window se puede poner sin el windows
    console.log(window.document)
    console.log(document)
    //Podemos capturar las partes de un HTML mediante estos métodos
    console.log(document.head) //extrae el head de la pag
    console.log(document.body) //extrae el body de la pag
    console.log(document.documentElement) //extrae el html de la pag
    console.log(document.doctype) //extrae el doctype de la pag
    console.log(document.charset) 
    console.log(document.title)
    console.log(document.links)//no sale nada porque no hay links en nuestro HTML
    console.log(document.images)//=
    console.log(document.forms)//=
    console.log(document.styleSheets)//=
    //Trae dos scripts porque si nos vamos a la pestaña elements del navegador
    //vemos un script correspondiente al Live Server del Visual Studio
    console.log(document.scripts)
    
    //Para ver lo que está seleccionado en la web
    setTimeout(() =>{
        console.log(document.getSelection().toString())
    },3000)

    //Para escribir en el documento HTML desde el JS
    document.write("<h2>Hola desde el DOM</h2>")
*/
















    //NODOS, ELEMENTOS Y SELECTORES
    /*  
    
    Existen 12 tipos de nodos, cada nodo tiene una razón de ser, pero para la interacción con HTML a nosotros
    nos va a interesar los Nodos de tipo Elemento y los de tipo Texto.
    Un nodo de texto es el texto que tiene dentro una etiqueta como un h1, un p, un h2 etc... y un nodo de tipo
    elemento hace referencia a la etiqueta como tal del documento HTML en particular.
    
    */
    

    
    /*

    //¿QUé métodos tiene el DOM para yo poder capturar elementos del HTML?
    console.log(document.getElementsByTagName("li")) //trae todos los nodos tipo elemento que sean del tipo etiqueta li
    console.log(document.getElementsByClassName("card")) //trae todos los nodos tipo elemento que tengan una clase llamada card
    console.log(document.getElementsByName("nombre")) //trae todos los nodos tipo elemento que sean del tipo etiqueta li
    console.log(document.getElementById("menu")) //trae todos los nodos tipo elemento que tengan un atributo llamada menu
    //Todos estos métodos están en desuso, y en su lugar se utilizan los descritos porteriormente
    //Estos elementos devuelve un HTMLColletion y los querySelector un NodeList (devuelven diferente tipos de datos)
    */

    /* 

    **En los formularios es importante ponerle el atributo name porque gracias
    a él, cuando el formulario sea enviado al servidor, este podrá detectar
    el formulario 
    
    */


/*
    Este método puede hacer lo mismo que el método getElementById,
    getElementsByClassName y getElementsByTagName pero es
    más lento (peor rendimiento) porque tiene que analizar que cosa le hemos 
    introducido entre las comillas (clase,etiqueta o id). 
    Los querySelector devuelven un NodeList en lugar de un HTMLCollection como hace los getEleme...
*/
/*
    //Para Ids
    console.log(document.querySelector("#menu")) //Trae las etiquetas que tengan un id llamado menu
    //querySelector (solo trae el primer selector de ese tipo que encontró)
    console.log(document.querySelector("a"))
    console.log(document.querySelector(".card"))
    console.log(document.querySelector(".hola"))

    //Para encontrarlos todos, se usar el All
    console.log(document.querySelectorAll("a"))
    console.log(document.querySelectorAll(".card"))
    console.log(document.querySelectorAll(".card")[2])
    console.log(document.querySelectorAll("a").length)
    console.log(document.querySelector(".card"))
    console.log(document.querySelectorAll("#menu li"))

    //Imprime todos los enlaces (etiquetas tipo a)
    document.querySelectorAll("a").forEach((el) => console.log(el))




    //CONCLUSIÓN: usaremos solo getElementById (para ids),
    //para traerme el primer selector válido de cualquier tipo 
    //usaremos querySelector y para todos querySelectorAll

*/



















    //ATRIBUTOS
/*

    //Aparentemente las dos formas traen el mismo resultado pero con el ejemplo del link-dom vemos como no, por ello es mejor usar
    // el método getAttribute
    console.log(document.documentElement.lang) //accedemos al atributo lang del documento HTML el cual está arriba del todo del documento
    console.log(document.documentElement.getAttribute("lang")) //
    //console.log(document.querySelector(".link-dom").href) //accedemos al atributo href de la etiqueta que tenga una clase llamada link-dom
    //console.log(document.querySelector(".link-dom").getAttribute("href"))


    document.documentElement.lang = "es" //le cambiamos dinámicamente el valor de dicho atributo (aunque en la inspección de elementos del navegador
                                        //no parezca que se haya cambiado)
    console.log(document.documentElement.lang)

    //otra forma de hacer lo mismo que antes
    document.documentElement.setAttribute("lang","es-ES")
    console.log(document.documentElement.lang)


    /*
        Es muy pesado estar escribiendo continuamente document. lo que sea... por ello se considera buena práctica guardar
        los elementos del DOM en variables para posteriormente trabajar con ellas
        Para guardar elementos del DOM preferible usar const antes que let
        Cuando declaramos variables que hacen referencia a elementos HTML se suele
        definir con $ al principio para distinguirlas facilmente de las que correspondan
        a variables de nuestra lógica de programación
    */
/*
    
    const $linkDOM = document.querySelector(".link-dom")

    //Es muy buena práctica que en cualquier enlace que tenga un target _blanck, para evitar cualquier tipo de hackeo
    //le introducimos el atributo rel="noopener", para que no haya ningún tipo de dependencia entre la pestaña origen
    //y la abierta desde el link
    $linkDOM.setAttribute("target","_blank")
    $linkDOM.setAttribute("rel","noopener")
    $linkDOM.setAttribute("href","https://rafarc97.github.io/")
    console.log($linkDOM.hasAttribute("rel")) //imprime true, comprueba si la etiqueta con clase .link-dom tiene el atributo rel
    $linkDOM.removeAttribute("rel")
    console.log($linkDOM.hasAttribute("rel")) //imprime false
*/





















    //DATA ATTRIBUTES
/*
    const $linkDOM = document.querySelector(".link-dom")

    console.log($linkDOM.getAttribute("data-description")) //devuelve como se llama lo que está dentro de ese atributo en el HTML
    console.log($linkDOM.dataset) //Devuelve que es un mapa (tipo de dato)
    console.log($linkDOM.dataset.description)

    $linkDOM.setAttribute("data-description","Modelo de Objeto del Documento")
    console.log($linkDOM.getAttribute("data-description"))
    $linkDOM.dataset.description = "Entra en mi GitHub"
    console.log($linkDOM.getAttribute("data-description"))

    console.log($linkDOM.hasAttribute("data-id"))
    $linkDOM.removeAttribute("data-id")
    console.log($linkDOM.hasAttribute("data-id"))
*/























//ESTILOS CSS
/*
Nos permitirá el como podemos interactuar con los estilos de nuestro documento HTML
*/



//const $linkDOM = document.querySelector(".link-dom")
/*
Devuelve un objeto de tipo CSSStyleDeclaration para ver todas las propiedades CSS, incluyendo las modificadas
por nosotros mismos. Todas estas propiedades que tengan más de una palabra vienen sin guión medio sepador y las prop de una palabra con
lowercamelcase. Las propiedades que estén en uso podremos ver sus valores, las que no aparecerán vacías
*/
/* console.log($linkDOM.style)
console.log($linkDOM.getAttribute("style")) //hace lo mismo pero solo nos devuelve las propiedades que se están usando, las demás vacías no
console.log($linkDOM.style.backgroundColor) //nos devuelve el valor de dicha prop.
console.log($linkDOM.style.color) //igual */

/*
Le asigna un id/propiedad y nos devuelve los valores por defecto de todas las propiedades que tenga la etiqueta $linkDOM
En el modo de desarrollador que tenemos en el navegador tenemos un apartado que se llama Styles donde podremos ver esas
propiedades.
*/
/* console.log(getComputedStyle($linkDOM))
console.log(getComputedStyle($linkDOM).getPropertyValue("color")) //accedemos solo al valor de la propiedad que le especifiquemos

//Para modificar las propiedades de estilo (le quitamos la linea de url azul en este ej.)
$linkDOM.style.setProperty("text-decoration","none")
$linkDOM.style.setProperty("display","block")
//Otra forma de modificar a través de la notación del punto
$linkDOM.style.width = "50%"
$linkDOM.style.textAlign = "center"
$linkDOM.style.marginLeft = "auto"
$linkDOM.style.marginRight = "auto"
$linkDOM.style.padding = "1rem"
$linkDOM.style.borderRadius = ".5rem"

//Vemos las prop de nuevo para comprobar las modificaciones
console.log($linkDOM.style)
console.log($linkDOM.getAttribute("style"))
console.log(getComputedStyle($linkDOM)) */

/* 
Todos estos cambios de forma dinámica de las propiedades de estilo en una etiqueta HTML podremos visualizarlos en el modo desarrollados
de nuestro navegador en el apartado Styles o en el apartado Computed.
*/



//VARIABLES CSS - Custom Properties CSS
/*
const $html = document.documentElement,
    $body = document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
    varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color")

console.log(varDarkColor,varYellowColor)

$body.style.backgroundColor = varDarkColor
$body.style.color = varYellowColor


$html.style.setProperty("--dark-color","green") //El valor de la propiedad se aplica pero no es ve reflejada en la web porque se aplica al $html pero no al $body
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color") //el dark color del HTML tiene el pink no el black


$body.style.backgroundColor = varDarkColor //y ahora si le cambiamos al body el black por el pink y se verá reflejada en el documento HTML de la web
*/


























//CLASES CSS
/* 
En los apartados anteriores aprendimos a utilizar selectores, aplicar estilos y obtener los atributos de una etiqueta HTML sin embargo no
hablamos de como acceder a las clases. 
*/
/*
const $card = document.querySelector(".card") //nos traemos la primera tarjeta (card) del documento
console.log($card)

console.log($card.className) //accedemos al valor del atributo class
console.log($card.classList) //devuelve un objeto tipo DOMTokenList en el cual en su atributo value (del objeto) podremos ver el valor del atributo class
                            //de la etiqueta HTML


console.log($card.classList.contains("rotate-45")) //devuelve true/false si contiene esa clase nuestro card
$card.classList.add("rotate-45") //añadimos la clase
console.log($card.classList.contains("rotate-45"))//ahora devuelve true

$card.classList.remove("rotate-45") //borramos la clase
console.log($card.classList.contains("rotate-45"))//ahora devuelve false

$card.classList.add("rotate-45") //añadimos
$card.classList.toggle("rotate-45") //si tiene la clase, borra, y si no, se la agrega
console.log($card.classList.contains("rotate-45"))//ahora devuelve false

//toggle es muy útil para el típico botón de interfaz para poner la web en modo dark/light

$card.classList.toggle("rotate-45") //como no la tiene, la agrega
$card.classList.replace("rotate-45","rotate-135") //reempleaza la clase 45 por 135

//Para intercambiar varias clases al mismo tiempo:
$card.classList.add("opacity-80","sepia") //el método add puede añadir más de un elemento a la vez
$card.classList.remove("opacity-80","sepia") //borramos la clase
$card.classList.toggle("opacity-80","sepia") //como la acabamos de borrar, la agrega
*/


































//DOM: Texto y HTML
/* EN este apartado aprendemos a como interactuar con el contenido tanto texctual como HTML de un documento*/
/*
const $whatItsDOM = document.getElementById("que-es")
let text = `
    <p>
    El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model </i></b>) es un API
    para documentos HTML y XML.
    </p>
    <p>
    Éste provée una representación destructural del documento, permitiendo modificar su contenido y
    presentación visual mediante código JS.
    </p>
    <p>
        <mark> El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
    </p>
`

/* 
innerText y textConten sirven ambas para agregar contenido textual a una etiqueta
innerText fué creada para internet explorer y no es estándar
textContent es la estándar 
Estas dos instrucciones sustituyen el párrafo lorem ipsum por lo contenido en la variable text
*/
/*
//$whatItsDOM.innerText = text //sin formato (poco uso), no reconocen el formato HTML
//$whatItsDOM.textContent = text //sin formato (para cuando tengamos que introducir texto), no reconoce formato HTML


$whatItsDOM.innerHTML = text //con formato (se usa para cuando tengamos que introducir texto HTML)

/* 
¿Cuando usar cada cual? Dependiendo de las necesidades. Si necesitamos trabajar con texto en formato HTML usaremos innerHTML y 
cuando tengamos que trabajar con texto sin formato usaremos textContent que es estándar (innerText no lo es) 
*/

/* 
El outer a diferencia del inner, reemplaza la etiqueta padre por todo lo que haya en text
sin embargo inner mete las 3 etiquetas p dentro de la etiqueta padre 
Es decir con el outer nos quedaría dentro de la etiqueta con id que-es los 3 párrafos que contiene la variable Text, sin embargo
usando inner estamos metiendo dentro de la etiqueta p que ya contiene (del lorem ipsum) de la etiqueta con id que-es, los 3 
párrafos de la variable text 
*/
/*
$whatItsDOM.outerHTML = text
*/


























//DOM TRAVERSING: RECORRIENDO el DOM
//Propiedades que nos da la API del DOM para poder recorrer los elementos del DOM (etiquetas HTML).

/*
const $cards = document.querySelector(".cards")

console.log($cards)
console.log($cards.children)//devuelve un HTMLCollection con cada una de las figuras del card
console.log($cards.children[2]) //devuelve la figura de la tercera tarjeta
console.log($cards.parentElement) //devuelve el elemento padre que es la etiqueta body
console.log($cards.firstChild) //imprime texto porque hay un salto de línea entre
//donde está cards y la siguiente línea de código. (este método trabaja con nodos tipo texto, no nodos tipo elemento)
console.log($cards.firstElementChild) //Este método si trabaja con nodos tipo elemento (etiquetas HTML) y nos devuelve la figura del primer card
console.log($cards.lastChild)
console.log($cards.lastElementChild)

//A nosotros nos interesa los firstElementChild y lastElementChild
//que trabajan con nodos tipo elemento no con nodos tipo texto

console.log($cards.previousElementSibling) //saca la etiqueta a (etiqueta HTML que está justo antes a la de cards), hermano anterior
console.log($cards.previousSibling) //interpreta el salto de línea (porque este método tb trabaja con nodos tipo texto)
console.log($cards.nextElementSibling)  //hermano posterior (saca la etiqueta HTML section)
console.log($cards.nextSibling)

console.log($cards.childNodes) //sale que hay 11 nodos porque cuenta los saltos de línea (suma los nodos tipo elemento + los nodos tipo texto)

console.log($cards.closest("div")) //Busca el padre más cercano del tipo de selector que indiquemos (en este caso div)
                                    //imprime null porque hacia arriba no tiene ningún elemento padre que sea un div

console.log($cards.closest("body")) //imprime el body pq si tiene un elemento padre body
console.log($cards.children[3].closest("section"))//busca dentro del cuarto hijo de cards la section ancestral más cercana (e imprime la misma section cards)

*/
























//Crear elementos y fragmentos
//Vamos a aprender a crear elementos dinámicamente, es decir a crear etiquetas HTML
/*
const $figure = document.createElement("figure"), //crea una etiqueta HTML (nodo tipo elemento) figure
    $img = document.createElement("img"),
    $figcaption = document.createElement("figcaption"),
    $figcaptionText = document.createTextNode("Animals"), //Crea un nodo tipo texto (nos sirve para añadir texto literal a nuestras etiquetas HTML)
    $cards = document.querySelector(".cards"),
    $figure2 = document.createElement("figure");


//Esta es la forma en la que los frameworks REACT y ANGULAR crean sus elementos HTML
$img.setAttribute("src","https:/placeimg.com/200/200/animals") //le añadimos el atributo src a la etiqueta $img
$img.setAttribute("alt","Animals") //le añadimos el título en forma de atributo a la etiqueta $img
$figure.classList.add("card") //añade la clase card a la etiqueta $figure para que tenga el mismo estilo que los demás cards
$figcaption.appendChild($figcaptionText) //agrega el texto a la etiqueta figcaption (título de la imagen)
$figure.appendChild($img) //añade a la etiqueta $figure la etiqueta $img
$figure.appendChild($figcaption) //añade a la etiqueta $figure la etiqueta $figcaption
$cards.appendChild($figure) //agregamos finalmente la etiqueta $figure a la etiqueta cards


//Otra manera de hacerlo
$figure2.innerHTML = `
<img src="https://placeimg.com/200/200/people" alt="People">
<figcaption>People</figcaption>
`;
$figure.classList.add("card")
cards.appendChild($figure2)



//¿Qué ocurre si queremos añadir de una forma rápida varios elementos de forma dinámica en nuestro documento HTML?

const estaciones = ["Primavera","Verano","Otoño","Invierno"],
    $ul = document.createElement("ul");

               
//No es buena práctica utilizar el document.write pero por practicidad lo vamos a usar
document.write("<h3> Estaciones del Año </h3>")
document.body.appendChild($ul)


//De esta manera estaremos dinámicamente generando la lista de estaciones
//Esto puede ser útil cuando vengamos de recoger datos de una BBDD o una API
//y queramos realizar cambios en la web de forma dinámica
//Vamos a hacerlo usando textContent
estaciones.forEach(el => {
    const $li = document.createElement("li")
    $li.textContent = el
    $ul.appendChild($li)
});



//Ahora vamos a hacer lo mismo pero en lugar de usar textContent, usamos innerHTML
const continentes = ["África","América","Asia","Europa","Oceanía"],
    $ul2 = document.createElement("ul");


document.write("<h3>Continentes del Mundo</h3>")
document.body.appendChild($ul2)

//Otra manera de agregar elementos dinámicamente es a través de innerHTML,
//que se haría de esta manera:
$ul2.innerHTML = ""; //inicializamos vacío la variable por el +=
continentes.forEach(el => $ul2.innerHTML += `<li>${el}</li>`)


/*
Cuando trabajemos con miles de registros/peticiones/elementos estaremos
pegándole al DOM tantas veces como elementos/.. haya, es decir por cada elemento
que vayamos añadiendo estamos haciendo una nueva inserción al DOM y estas son unas de las 
operaciones más demandantes (suele ser una de las problemáticas en el desarrollo Frontend).
Esto causa una bajada en rendimiento considerable y por lo tanto que relentice la carga del 
navegador.
Esto es lo que provocamos con las dos técnicas anteriormente vistas por ello la manera más 
eficiente/óptima de hacerlo es a través de los FRAGMENTOS: 
*/




//FRAGMENTOS: mejora de RENDIMIENTO

/*
Vamos a crear en el DOM fragmentos dinámicos (que es como una variable que se crea dinámicamente y 
está almacenada en memoria, no directamente en el DOM) el cual vamos a estar iterando para agregarle 
los nuevos elementos y una vez que todos los elementos hayan sido agregados a ese fragmento, vamos
hacer UNA SOLA inserción con los cientos o miles de registros que nuestra petición haya capturado.
Y esto pues es lo que mejora nuestro rendimiento ya que pasamos de realizar miles de inserciones al DOM
a relizar solamente una.
*/
/*
const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
]


$ul3 = document.createElement("ul")
$fragment = document.createDocumentFragment()

meses.forEach(el =>{
    const $li = document.createElement("li")
    $li.textContent = el
    $fragment.appendChild($li)
});

document.write("<h3>Meses del Año</h3>")
$ul3.appendChild($fragment)
document.body.appendChild($ul3)

*/


























//TEMPLATES HTML 
/* 
Los templates HTML es una etiqueta nueva (nodo tipo elemento), que es (como su nombre indica template = modelo)
un modelo a seguir  en el cual estructuramos el contenido HTML mediante JS el cual será dinámico y es otra forma que
tenemos para interactuar con el DOM.
Estas etiquetas son muy utilizadas en VUE.
*/ 


//Vamos a generar dinámicamente otras 5 tarjetas pero en español
/*
const $cards = document.querySelector(".cards"),
    $template = document.getElementById("template-card").content, //guardamos el contenido de la etiqueta template HTML (que es lo que nos interesa)
    $fragment = document.createDocumentFragment(), //creamos un fragmento para la inserción MÁS ÓPTIMA 
    cardContent = [
        {
            title: "Tecnología",
            img:"https://placeimg.com/200/200/tech"
        },
        {
            title: "Animales",
            img:"https://placeimg.com/200/200/animals"
        },
        {
            title: "Arquitectura",
            img:"https://placeimg.com/200/200/arch"
        },
        {
            title: "Gente",
            img:"https://placeimg.com/200/200/people"
        },
        {
            title: "Naturaleza",
            img:"https://placeimg.com/200/200/nature"
        }
    ]

    cardContent.forEach(el => {
        $template.querySelector("img").setAttribute("src",el.img)
        $template.querySelector("img").setAttribute("alt",el.title)
        $template.querySelector("figcaption").textContent = el.title

        //true indica que se copia toda la estructura (img, figcaption,...), si le pasaramos un false solo se clonaría la etiqueta
        //de apertura y de cierre del template HTML sin nada dentro 
        let $clone = document.importNode($template,true)
        $fragment.appendChild($clone)

    });

    //Así volvemos a conseguir UNA SOLA INSERCION al DOM
    $cards.appendChild($fragment)
*/



















    //MODIFICAR ELEMENTOS (Old Style)

    /* 
    Conocemos el método appendChild que agrega elementos al final, pero tenemos otras maneras también
    No vamos a usar las formas más eficientes por practicidad, por ello usamos la propiedad innerHTML 
    agregando rápidamente todas las etiquetas sin guardarlas en variables, etc... */
    /*

    const $cards = document.querySelector(".cards"),
        $newCard = document.createElement("figure");

    $newCard.innerHTML = `
        <img src="https://placeimg.com/200/200/any" alt="Any">
        <figcaption>Any</figcaption>
    `;

    $newCard.classList.add("card");

    //$cards.replaceChild($newCard,$cards.children[2])//reemplaza la card tipo arch(arquitectura) que es el 3er hijo por any(cualquier)

    //añade any al principio de los cards, toma como referencia el primer hijo y lo inserta antes de ese
    $cards.insertBefore($newCard,$cards.firstElementChild)

    //eliminamos la card de naturaleza
    $cards.removeChild($cards.lastElementChild)


    //true para que clone todo su contenido completo, si ponemos false copia las etiquetas section de apertura y cierre sin nada dentro
    const $cloneCards = $cards.cloneNode(true);

    //Ahora aparecerán repetidas dos veces todas las tarjetas, porque le hemos añadidos toda la etiqueta section (class=".cards")
    document.body.appendChild($cloneCards)
*/

























    //MODIFICAR ELEMENTOS (Cool Style)
    //Nuevo métodos. Manera más fácil.

    /*
        .insertAdjacent...
            .insertAdjacentElement(position,el)   // agrega un elemento (es como un appendChild o un insertBefore)
            .insertAdjacentHTML(position,html)    // agrega contenido HTML (es como un innerHTML)
            .insertAdjacentText(position,text)    // agrega texto (es como un textContent)

        Posiciones (position) de estos nuevos métodos (primer parámetro):
            beforebegin(hermano anterior) 
            afterbegin(primer hijo)       
            beforeend(último hijo)        
            afterend(hermano siguiente)  
    */
/* 
    Conocemos el método appendChild que agrega elementos al final, pero tenemos otras maneras también
    No vamos a usar las formas más eficientes por practicidad, por ello usamos la propiedad innerHTML 
    agregando rápidamente todas las etiquetas sin guardarlas en variables, etc... */
    /*

    const $cards = document.querySelector(".cards"),
        $newCard = document.createElement("figure");

    $newCard.innerHTML = `
        <img src="https://placeimg.com/200/200/any" alt="Any">
        <figcaption>Any</figcaption>
    `;
/*

/*
    $newCard.classList.add("card") //le añadimos la clase de estilos
    
    //$cards.insertAdjacentElement("beforebegin",$newCard) //se inserta antes del nodo referencia (que es la section con clase cards)
    $cards.insertAdjacentElement("afterbegin",$newCard) //se inserta dentro de la section como primer hijo
    //$cards.insertAdjacentElement("beforeend",$newCard) //se inserta dentro de la section como último hijo
    //$cards.insertAdjacentElement("afterend",$newCard) //se inserta después del nodo de referencia (que es la section con clase cards)
*/


/* const $cards = document.querySelector(".cards"),
   $newCard = document.createElement("figure");

let $contentCard = `
<img src="https://placeimg.com/200/200/any" alt="Any">
<figcaption></figcaption>
`;

$newCard.classList.add("card")

//en este caso da igual beforeend o beforebegin porque estamos metiendo un texto dentro de un elemento vacío
$newCard.insertAdjacentHTML("beforeend",$contentCard)


//Y con el método insertAdjacentText conseguimos añadir texto
//en este caso da igual beforeend o beforebegin porque estamos metiendo un texto dentro de un elemento vacío
$newCard.querySelector("figcaption").insertAdjacentText("beforeend","Any")   */


//$cards.insertAdjacentElement("afterbegin",$newCard)

/* 
Estos son métodos que antes no existian en JS nativo y se tenía que utilizar JQuery, ahora ya no lo necesitamos pq están en JS nativo. 
Es otra forma de hacer lo mismo que hemos hecho justo antes.
*/

//agrega la card any como primer hijo
//$cards.prepend($newCard)
//lo agrega al último hijo
//$cards.append($newCard)
//lo agrega como hermano anterior
//$cards.before($newCard)
//lo agrega como hermano posterior
//$cards.after($newCard)


























//MANEJADORES DE EVENTOS
/*

Mecanismo para controlar las acciones del usuario y definir comportamientos del usuario
los manejadores son las funciones que se ejecutan en un determinado momento. 
A estas fucciones se les conoce como event handler
en el mozilla developer tenemos la lista de todos los eventos de todos los tipos

*/

//esta función es el manejador de eventos
/*
function holaMundo () {
    alert ("Hola Mundo")
    //Cuando una función se convierte en un manejador de eventos, nosotros podemos acceder a un objeto
    //especial que es el evento en sí 
    console.log(event) //nos devuelve todos los eventos en forma de objeto. En concreto event.type y event.target son muy importantes
    //event es una palabra reservada en JS
}

const $eventoSemantico = document.getElementById("evento-semantico")

//no se pone los paréntesis de la función, pq si de lo contrario la función manejadora de ventos se ejecutará sin darle click al botón
$eventoSemantico.onclick = holaMundo

//Estos eventos semánticos tienen un pequeño inconveniente. Habŕa veces que a un elemento HTML le tengamos que asiganr
//diferentes manejadores de eventos. Pero una vez que definimos un evento semántico solo podrá ejecutar esa sola función.


/* 
En la línea 986 le estamos asignando una función al evento y tras este comentario le estamos asignando otra función,
por lo que se reemplaza y ya cuando demos click se ejecuta la nueva función en lugar de la anterior
*/
//le asignamos otra funcion al evento, entonces estamos reemplazando el evento anterior por este nuevo
//entocnes cuando pulsemos va a saltar este nuevo alert no el anterior
/*
$eventoSemantico.onclick = function(e){ //e es como event palabra reservada (forma más simplificada) 
    alert("Hola esto es un nuevo Manejador de Eventos Semántico")
    console.log(e)
    console.log(event) //se va a imprimir dos veces la información sobre evento
}

//Para definir varias funciones a un evento usamos los manejadores múltiples de eventos (listeners)

const $eventoSemantico = document.getElementById("evento-semantico"),
    $eventoMultiple = document.getElementById("evento-multiple")

    //desaparece la palabra "on", simplemente se pone el tipo de evento
    $eventoMultiple.addEventListener("click",holaMundo)

    //le asignamos otra función al evento click de ese mismo botón
    $eventoMultiple.addEventListener("click",(e)  =>{
        alert("Hola esto es un manejador de eventos múltiple")
        console.log(e)
        console.log(event)//lo mismo que no pasar "e" a la función
        console.log(e.type) //imprime el tipo de evento
        console.log(e.target) //imprime el código del elemento HTML que originó el evento
    });

    //Después de ejecutar el código, veremos como se ejecuta primero la 1ªfunción y luego la segunda.
*/



















    //EVENTO con PARÁMETROS y REMOVER EVENTOS

    /* 
    En el apartado anterior vimos que a una función manejadora de eventos solo podíamos pasarle un parámetro
    el cual correspondería con el parámetro event pero abreviado (e). Pero qué pasa cuando a una función event handler
    queremos pasar algún parámetro adicional? Pues lo podemos hacer.
    */

    //PASAR PARÁMETROS
/*
    const $eventoMultiple = document.getElementById("evento-multiple")


    //Se imprime Object MouseEvent (el parámetro event), a pesar de haberle especificado un valor por defectgo al parámetro nombre
    function saludar(nombre = "Desconocid@"){
        alert(`Hola ${nombre}`)
        console.log(event)
    }


    $eventoMultiple.addEventListener("click",(e)  =>{
        alert("Hola esto es un manejador de eventos múltiple")
        console.log(e)
        console.log(event)//lo mismo que no pasar "e" a la función
        console.log(e.type) //imprime el tipo de evento
        console.log(e.target) //imprime el código del elemento HTML que originó el evento


    });


    //Toda función que sea manejador de eventos no puede recibir otro parámetro que sea el evento en sí
    
    //Por ello tendremos que poner una ARROW FUNCTION para que sea ésta la manejadora del evento (en lugar de que lo sea la propia función saludar).
    //Esto es válido porque ahora quien estará recibiendo los parámetros será la arrow function en lugar de la función event handler saludar.
    //De esta manera conseguimos "engañar" al DOM para poder pasarle parámetros
    $eventoMultiple.addEventListener("click",() => {
        saludar()
        saludar("Rafa")
    });

    //Y esta es la manera en la que podríamos ejecuta una función manejadora de eventos que necesite paso
    //de parámetros

*/


//REMOVER EVENTOS
/*
const $eventoRemover = document.getElementById("evento-remover")


const removerDobleClick = (e) => {
    alert(`Removiendo el evento de tipo ${e.type}`)
    console.log(e)
    //Con esto conseguimos que al pinchar el primer dobleclick se ejecute la funcion event handler, pero a partir de la segunda ya no,
    //porque la primera vez que se ejecuta dicha función se elimina a ella misma.
    $eventoRemover.removeEventListener("dblclick",removerDobleClick)
    $eventoRemover.disabled = true //atributo html que sirve para que el botón se ponga más transparente (como si estuviera deshabilitado)
}

$eventoRemover.addEventListener("dblclick",removerDobleClick)


*/

























//FLUJO DE EVENTOS (Burbuja y Captura)

/*  
Como JS interpreta y trabaja con los eventos, lo vamos a hacer viendo para qué se utiliza el tercer
parámetro del addEvenListener.

El flujo de eventos tenemos 2 maneras de utilizarlo, es decir, tenemos 2 opciones para decirle a JS como
queremos que se propague estos eventos.
Una vez que el evento se origina, este tiene una propagación a lo largo del árbol del DOM (los demás elementos
del DOM), por defecto, esa propagación se da del elemento más interno hacia el externo, y esa fase se llama
fase de burbuja. Es decir, el esquema por defecto que soportan los navegadores es el de la fase de BURBUJA (eventos
se propagan desde el interior hacia el exterior). El addEventListener trabaja de esta manera por defecto.
EL efecto contrario lo tenemos con la fase CAPTURA, que se indica añadiéndole un 3er parámetro al
addEvenListener que sea true.


En el apartado anterior estuvimos asignando un evento a cada uno de los botones, ¿que podríamos hacer si
en una interfaz dinámica esos botones se formara a partir de un catálogo que tengamos en la base de datos?
Entonces tendríamos que ir a consultar la base de datos, imprimir un botón por cada registro de la base de
datos y a ese botón asignarle dinámicamente un evento. Para eso tendríamos que asignarle dinámicamente el
evento a todos los elementos.
*/
/* 
const $divEventos = document.querySelectorAll(".eventos-flujo div")

console.log($divEventos) */

//function flujoEventos(e){
    /*
    this hace referencia a div, ya que es el elemento que llama a esta función event handler
    desde dentro del forEach, y el atributo className imprime su nombre.

    e.target imprime el código del elemento HTML que originó el evento, por lo que con className accedemos
    también al nombre de la clase de dicho elemento (div)
    */
    //console.log(`Hola te saluda ${this.className}, el click lo originó ${e.target.className}`)
    //e.stopPropagation(); //paramos la propagación

//}

/*
Si no le ponemos el stopPropagation conseguimos que si pinchamos dentro de 3, se ejecuta 
3 veces (1 por cada div) la función, si pinchamos 2, se ejecuta 2 veces y si pincho dentro del 
div 1, solo 1. Con esto conseguimos que se ejecute más de una vez esta función dependiendo de 
donde pulsamos. Con este ejemplo vemos la propagación del flujo de eventos
*/

//Este forEach le asigna a cada div la función event handler, esto es práctico cuando tengamos
//que hacerlo para asignarselo a miles de divs o elementos
/* $divEventos.forEach(div => {
    //true/false para indicar la dirección de propagación (de interior a exterior o al revés)
    
    //div.addEventListener("click",flujoEventos,false) //FASE DE BURBUJA
    div.addEventListener("click",flujoEventos,true)  //FASE CAPTURA (se suele utilizar menos)
}); */

/* 
Esta fase de captura o burbuja se puede omitir si delegamos el evento a un elemento padre, y
esto ayudará a mejorar el rendimiento de la memoria y recursos.
*/


/*
Otra manera de hacerlo, y además le indicamos con el parámetro once que solo se ejecutará una vez
El parámetro captura hace referencia a si usamos fase de burbuja(false) o captura(true)
y el parámetro once hace referencia a si queremos que se realice el evento tras el primer click
o si de lo contrario queremos que solo funcione para el primer click
*/
 /*$divEventos.forEach(div => {    
    div.addEventListener("click",flujoEventos,{
        capture:false
    }) 
    /* div.addEventListener("click",flujoEventos, {
        capture:true,
        once:true
    }) */
//}); 

  























//STOPPROPAGATION & PREVENTDEFAULT

/* 
Vamos a ver como detener la propagación del apartado anterior, porque habrá veces donde no
queramos que nuestro evento se propague hacia los elementos hijos o padre dependiendo de la
fase que estemos trabajando (burbuja false o captura true).

También habrá veces donde ciertos elementos del DOM que tienen comportamientos por default
por ejemplo, cuando pulsamos el típico botón submit (input) para formualarios, si queremos
que tras ello se procesen datos de una API, tendríamos que desactivar el PREVENTDEFAULT 
para indicarle un comportamiento distinto al por defecto. Esto es lo que aprenderemos también,
a como prevennir esos comportamientos por defecto, en concreto con el enlace creado dentro
del div 3.
*/
//mejora de rendimiento de hacer lo mismo que en la propagación (apartado anterior)
/* 
const $divEventos = document.querySelectorAll(".eventos-flujo div"),
    $linkEventos = document.querySelector(".eventos-flujo a");

function flujoEventos(e){
    console.log(`Hola te saluda ${this.className}, el click lo originó ${e.target.className}`)
    //e.stopPropagation(); //paramos la propagación
}

$divEventos.forEach(div => {
    div.addEventListener("click",flujoEventos,false) //FASE DE BURBUJA
}); */

/* 
Agregando este addEvenListener y añadiendo la función e.preventDefault() al elemento enlace, 
estamos cambiando su comportamiento por defecto que sería abrir el enlace en una nueva pestaña.
Por lo tanto ahora al pulsar al enlace en lugar de abrir el enlace, realizaría el alert indicado
y nada más, no se abriría el enlace.
*/
/* $linkEventos.addEventListener("click",(e) => {
    alert('Hola soy Rafa');
    e.preventDefault();
    e.stopPropagation(); //Se lo ponemos para que al pulsar el enlace no se ejecute los eventos de los div
}); */






















//DELEGACIÓN DE EVENTOS
/* 
Angular, React internamente utilizan este mecanismo.

Esto es muy útil para mejorar el rendimiento de la App.
La delegación de eventos sirve para asignar el evento a un elemento padre 
Si por ejemplo tuvieramos 30 submits (botones) en un formulario, en lugar de asignar un 
addEventListener a cada uno de ellos, lo que haríamos sería asignarle un addEvenListener al cuestionario
que es un elemento padre o incluso al nodo raíz del DOM, de manera que en lugar de tener 20,30 o 1000 listeners
generados al evento click, vamos a tener solo uno generado al Document y simplemente dentro de él, detecto
cual es el elemento que va a desencadenar ese evento.

Gracias a este mecanismo, vamos a conseguir eliminar la propagación, por lo que ya no necesitaríamos
usar el stopPropagation()
*/

 
const $divEventos = document.querySelectorAll(".eventos-flujo div"),
    $linkEventos = document.querySelector(".eventos-flujo a");

function flujoEventos(e){
    console.log(`Hola te saluda ${this.className}, el click lo originó ${e.target.className}`)
    //Ahora no necesitamos el stopPropagation
}

/* 

El listener del click se lo asignamos al documento, y de esta manera tendremos 1 solo listener en lugar
de 4 (en el ejercio anterior) asignados al evento click el cual está asignado al nodo principal Document.
Con esta técnica a parte de mejorar el rendimiento de nuestra aplicación en cuanto a memoria y recursos,
solo estamos teniendo una sola asignación al evento click, y ya la programación que necesitemos ejecutar
en cada uno de los elementos del DOM que tengamos que programar, pues simplemente con un condicional
vamos evaluando que coincida con un selector (en este caso .eventos-flujo a y div).

Esta técnica es MUY IMPORTANTE en PETICIONES ASÍNCRONAS cuando usamos AJAX - Fetch y generamos elementos
dinámicos. Veremos más adelante como no podemos generar un listener de un elemento que aún no está cargado
en el DOM. Entonces esta técnica de la delegación de eventos es muy importante si por ejemplo mandamos a 
solicitar ciertos datos a una API, con esos datos generamos elementos HTML dinámicos y luego esos elementos
que generamos dinámicamente con la respuesta de la petición les tenemos que asignar eventos y la ÚNICA FORMA
de hacerlo es mediante la DELEGACIÓN DE EVENTOS, porque si generamos listeners a elementos que aún no existen
en el DOM, pues nos va a marcar un error en consola que nos dirá que no podemos asignarle un listener a un
elemento que aún no está cargado.


Esta es la forma MÁS ÓPTIMA de trabajar con los eventos en JS.

*/
document.addEventListener("click",(e) => {
    /* 
    e.target hace referencia al objeto que originó el evento, por lo que cuando pulsemos
    en cualquier parte de la web, en la consola nos saldrá que parte pulsamos
    */
    console.log('Click en', e.target)

    /* 
    El método matches sirve para buscar un selector válido, en este caso eventos-flujo a
    Si el objeto que originó el evento coincide con lo que se indique, devuelve true y se ejecuta el if
    */
    if(e.target.matches(".eventos-flujo a")){
        alert("Hola vamos a google");
        e.preventDefault();
    }

    if(e.target.matches(".eventos-flujo div")){
        flujoEventos(e);
    }
}) 























/* 

Hasta ahora hemos visto los conceptos básicos para poder trabajar cualquier tipo de evento
a pesar de solo habernos centrado en el evento "click". De cualquier manera tras acabar estos
apartados orientados al JS de los navegadores, haremos ejercicios con otros tipos de eventos
como formularios, de teclado, etc...

Pero antes vamos a ver el BOM.


BOM: Browser Object Model
Recordemos que a pesar de no ser un estándar, ya no tiene problemas en ningún navegador.
Se trata de una serie de métodos y objetos que cuelgan directamente de Window y que trabajan
con la ventana del navegador (el objeto window).
 */


 /* 
 
 El innerWidth/Height hacer referencia al tamaño de ancho/alto de nuestra pantalla 
 y el outerWIdth/Height al tamaño de nuestro navegador
 
 */

 /*
 Ahora vamos a trabajar con el evento resize en lugar de click
 Por lo tanto, este evento se ejecutará solo cuando redimensionemos la pantalla
 Los métodos scrollX y scrollY que hacen referencia a cada una de las barras de desplazamiento.
 El valor nos lo da el pixel y significa cuanto se aleja la barra de desplazamiento
 vertical del margen top y la barra horizontal cuanto se aleja del margen izquierdo.
 */
 /* window.addEventListener("resize", e => {
    //El clear nos permitirá que no se añadan tantas impresiones en la consola 
    console.clear()
    console.log('*********Evento Resize*********');
    console.log(window.innerWidth);
    console.log(window.innerHeight);
    console.log(window.outerWidth);
    console.log(window.outerHeight);
    console.log(window.scrollX); 
    console.log(window.scrollY); 
    console.log(e);
 }); */


 /* 
 
 Ahora los scroll se producirán también cuando movamos las barras horizontales/verticales 
 gracias al evento scroll
 
 */
 /* window.addEventListener("scroll", e=> {
    console.clear();
    console.log('*********Evento Scroll*********');
    console.log(window.scrollX); 
    console.log(window.scrollY); 
    console.log(e);
 }); */

 /* 
 
 Dentro de nuestra pantalla también podemos identificar en qué coordenada de tu pantalla 
 empieza a dibujarse la ventana de mi navegador, para ello hacemos uso de la propiedad screen.
 
 El evento load se ejecutará cuando la ventana del navegador justamente haya terminado de cargar.

 Si ponemos el navegador en una sola pantalla con F11, marcará 0 en eje X e Y, pero si no lo ponemos 
 a F11 dará valores pequeñitos ya que estarán cerca del 0 pero no del todo.
 */


 /* window.addEventListener("load", e => {
    //console.clear();
    console.log('*********Evento Load*********');
    console.log(window.screenX); 
    console.log(window.screenY); 
    console.log(e);
 }); */


 /* 
 
 Si ejecutamos los dos eventos load y DOMContentLoaded vemos como este último carga antes,
 es mucho más rápido y se considera una buena práctica hacer uso de él en lugar del load
 sobre todo cuando carguemos con peticiones asíncronas, porque estas pausan el parseo del DOM,
 entonces todo lo que necesitemos cargar al momento siempre va a ser una mejor opción hacer desde
 el DOMContentLoaded que desde el load.
 
 */
/*  document.addEventListener("DOMContentLoaded", e =>{
    console.clear();
    console.log('*********Evento DOMContentLoaded*********');
    console.log(window.screenX); 
    console.log(window.screenY); 
    console.log(e);
 }); */
























/* 

BOM: Métodos

Algunos de los métodos del BOM, ya los vimos anteriormente y solo los vamos a mencionar 
para recordarlos. Los métodos alert, confirm y prompt son unos de esos.
*/


//Recordemos que estas llamadas a estos métodos devuelve valores que podemos almacenar en variables
/* window.alert('Esto es una alerta');
window.confirm('Confirmación');
window.prompt('Esto permite introducir texto'); */

//Como cuelgan de window se pueden llamar sin mencionar window
/* alert('Esto es una alerta');
confirm('Confirmación');
prompt('Esto permite introducir texto'); */


const $btnAbrir = document.getElementById("abrir-ventana"),
    $btnCerrar = document.getElementById("cerrar-ventana"),
    $btnImprimir = document.getElementById("imprimir-ventana");

let ventana;
    

/* 
Un caso real sería cuando necesitamos logearnos en una nueva web a través de la 
información de Facebook. Al pulsar se nos abre una ventana donde introducimos los 
datos de Facebook.
*/

$btnAbrir.addEventListener("click",e => {
    //Almacenamos la referencia de la apertura de la página en ventana
    ventana = window.open('https://www.google.com');
    //También se puede así: 
    //open('https://www.google.com');
});


$btnCerrar.addEventListener("click",e => {
    //windows.close(); //esto cerraría la ventana donde estamos
    ventana.close();
});


$btnImprimir.addEventListener("click",e => {
    //abre la ventana para que se pueda imprimir la pag del navegador donde estamos
    window.print(); 
});



















/* 

BOM: Objetos: URL, Historial y Navegador 

El objeto URL también se conoce como el objeto location
*/

//Propiedades + importantes del objeto URL(location)
/* console.log('*******Objeto URL(location)********');
//Como cuelga de window no se lo ponemos
console.log(location);
console.log(location.origin); //da la ruta origen de la web
console.log(location.protocol); //da el protocol (http en nuestro caso)
console.log(location.host); //da el nombre del dominio
console.log(location.hostname);
//puerto (saldrá si se le ha asignado un puerto diferente al por defecto asignado (80))
console.log(location.port); 
console.log(location.href); //url completa
console.log(location.hash); //muy utilizado en REACT, ANGULAR,...
console.log(location.search);
console.log(location.pathname); //justo lo que está tras el nombre del dominio
//location.reload(); //recarga la página */



console.log('*********Objeto Historial(history)**********');
//Como cuelga de window no se lo ponemos
/* La propiedad length hace referencia a las páginas que hacia detrás y delante
puedo moverme. */
console.log(history); 
console.log(history.length);
//para moverme tantas pag como le indiques hacia atrás del historial
console.log(history.back(1));
console.log(history.forward(1)); //igual hacia adelante
console.log(history.go(6)); //se va directamente 6 pag hacia delante
console.log(history.go(-6)); //se va directamente 6 pag hacia atrás



console.log('******** Objeto Navegador(navigator)*********');
console.log(navigator);

//Nos da información sobre la velocidad de internet que tengo (4G),...
console.log(navigator.connection);
//la localización del usuario (haremos ejercicios de ello más adelante)
console.log(navigator.geolocation);
console.log(navigator.mediaDevices); //(dispositivos como cámaras y micrófonos)
console.log(navigator.mimeTypes); //(tipos de formatos que acepta el navegador)
console.log(navigator.onLine); //indica si el usuario tiene conexión en ese momento a internet
/* 
APÌ que nos ayuda a progresive Web Apps, es decir a converitr un simple sitio web
en una aplicación instalable, es decir podremos acceder a ese sitio web (si lo instalamos)
como si fuera una app de escritorio. Si escribimos en el navegador chrome://apps podremos ver
las apps instalables que tenemos.
*/
console.log(navigator.serviceWorker);
console.log(navigator.storage); //Es la API de almacenamiento
//capacidad para detectar dispositivos USB (cuando se conectan y desconectan)
console.log(navigator.usb); 
/* Da información sobre el navegador que se está conectando a nuestra aplicación */
console.log(navigator.userAgent);