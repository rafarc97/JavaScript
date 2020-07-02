console.log("Hola Mundo");
//BOOLEANOS
var esSuperman = true;
var esBatman; //toda variable no asignada
//es la variable undefined
if (esSuperman) {
    console.log("Estamos salvados");
}
else {
    console.log("No estamos salvados");
}
esSuperman = convertirClarck();
function convertirClarck() {
    return false;
}
//ENTEROS
var avengers = 5;
var villanos;
var otros = 2;
if (avengers > villanos) {
    console.log("Estamos salvados");
}
else {
    console.log("No estamos salvados");
}
//nuestras variables definidas como
//valores numéricos solo aceptarán valolres
//numéricos. Da error si intentamos asignar
//un valor no numérico
otros = 123;
otros = 123.123;
//STRINGS
var batman = "Batman";
var linternaVerde = 'Linterna Verde';
var volcanNegro = "Volc\u00E1n Negro";
console.log(batman);
console.log(linternaVerde);
console.log(volcanNegro);
//para concatenar lo hacemos de una manera mucho más fácil que en JS de esta forma:
var concatenar = "Los héroes";
var concat = "Los h\u00E9roes son: " + batman + ", " + linternaVerde + ", " + volcanNegro;
console.log(concat);
//ANY: tipo de dato que soporta cualquiera de los existentes
var vengador = "Superman";
var existe;
var derrotas;
vengador = "Dr. Strange";
console.log(vengador.charAt(0));
vengador = 150.55555;
console.log(vengador.toFixed(2));
vengador = true;
console.log(vengador);
console.log(existe);
console.log(derrotas);
//ARREGLOS
var arreglo = [1, 2, 3, 4, 5, 6];
var villanoss = ["Omega Rojo", "Dormammu", "Duende Verde"];
//solo nos permite añadir datos string
villanoss.push("Otro villano");
console.log(villanoss[2].charAt(0));
//OBJETOS BÁSICOS
var flash = {
    nombre: "Barry Allen",
    edad: 24,
    poderes: ["Puede correr muy rápido", "Viajar por el tiempo"]
};
//Si intentaramos hacerlo con otras propiedadas nos marcaría error
//o si le llamásemos con otros nombres disitntos a las prop ya inicializadas
flash = {
    nombre: "Clarck Kent",
    edad: 500,
    poderes: ["Poder volar"]
};
//CLASES y CONSTRUCTORES
var Avenger = /** @class */ (function () {
    function Avenger(nombre, equipo, nombreReal) {
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }
    return Avenger;
}());
var antman = new Avenger("Rafa", "cap", "Scott Lang");
console.log(antman);
