import {PI} from "./constantes.js"
import {sumar,restar} from "./aritmetica.js"
//podemos darle alias a aritmetica (cosas que pasemos)
//import {aritmetica as calculos} from "./aritmetica.js"
import saludar from "./constantes.js"


console.log("Archivo modulo.js")
console.log(PI)
console.log(sumar(3,4),restar(4,3))
//console.log(calculos.sumar(2,3),calculos.restar(3,4))
saludar()