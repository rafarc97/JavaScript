/*

Descargas:
- Atom con paquetes: atom-stypescript, platformio-ide-terminal (todo corra dentro de atom),  file-icons (muestra iconos en la barra lateral) y atom-ide-ui
- NodeJS
-TypeScript

Los navegadores no pueden correr directamente el codigo, tienen que ser compilados antes con la terminal

tsc app.ts -w: inicia un servicio en la terminal que se queda escuchando cualquier cambio en el archivo indicado

control + Z: cerramos el servicio anterior

Para abrir un proyecto hacemos:
-tsc -init; esto creará un archivo .json de configuración y nos permitirá escribir el siguiente comando
-tsc *.ts -w (abrimos el mismo servicio de antes pero estará a la escucha de todos los archivos del proyecto)


*/



console.log("Hola Mundo");


//BOOLEANOS
let esSuperman:boolean = true;
let esBatman:Boolean; //toda variable no asignada
//es la variable undefined


if(esSuperman){
  console.log("Estamos salvados");
}else{
  console.log("No estamos salvados");
}

esSuperman = convertirClarck();

function convertirClarck(){
  return false;
}







//ENTEROS
let avengers:number = 5;
let villanos:number;
let otros = 2;

if (avengers > villanos){
  console.log("Estamos salvados");
}else{
  console.log("No estamos salvados");
}

//nuestras variables definidas como
//valores numéricos solo aceptarán valolres
//numéricos. Da error si intentamos asignar
//un valor no numérico
otros = 123;
otros = 123.123;



//STRINGS
let batman:string = "Batman";
let linternaVerde:string = 'Linterna Verde';
let volcanNegro:string = `Volcán Negro`;

console.log(batman);
console.log(linternaVerde);
console.log(volcanNegro);

//para concatenar lo hacemos de una manera mucho más fácil que en JS de esta forma:
let concatenar:string = "Los héroes"
let concat:string = `Los héroes son: ${batman}, ${linternaVerde}, ${volcanNegro}`

console.log(concat);





//ANY: tipo de dato que soporta cualquiera de los existentes

let vengador:any = "Superman";
let existe;
let derrotas;

vengador = "Dr. Strange";
console.log(vengador.charAt(0));


vengador = 150.55555;
console.log(vengador.toFixed(2));

vengador = true;
console.log(vengador);

console.log(existe);
console.log(derrotas);







//ARREGLOS

let arreglo:number[] = [1,2,3,4,5,6];
let villanoss:string[] = ["Omega Rojo","Dormammu","Duende Verde"];

//solo nos permite añadir datos string
villanoss.push("Otro villano");
console.log(villanoss[2].charAt(0));





//OBJETOS BÁSICOS

let flash = {
  nombre: "Barry Allen",
  edad : 24,
  poderes: ["Puede correr muy rápido", "Viajar por el tiempo"]
};


//Si intentaramos hacerlo con otras propiedadas nos marcaría error
//o si le llamásemos con otros nombres disitntos a las prop ya inicializadas
flash = {
  nombre: "Clarck Kent",
  edad: 500,
  poderes:["Poder volar"]
}



//CLASES y CONSTRUCTORES
class Avenger{
  nombre:string;
  equipo:string;
  nombreReal:string;

  constructor(nombre:string, equipo:string, nombreReal:string){
    this.nombre = nombre;
    this.equipo = equipo;
    this.nombreReal = nombreReal;
  }

}

let antman:Avenger = new Avenger("Rafa","cap","Scott Lang");

console.log(antman);
