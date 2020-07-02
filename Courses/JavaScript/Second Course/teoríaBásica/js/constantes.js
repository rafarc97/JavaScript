export const PI = Math.PI

let usuario = "Rafa"

//IMPORTANTE: solo puede haber una funcion/metodo/objeto
//que sea exportado por default


//si quisieramos que esta variable fuera la export default
//tendríamos que hacerlo con una línea a parte. Esto tiene que 
//ver con el hoisting
//Esto ocurrirá siempre con let y const
let password = "qwerty"
//export default password

//default significa que cuando se llame a esa funcion
//no se pueden tener dos funciones,objetos o variables exportadas
//por default
export default function saludar(){
    console.log("Hola Módulos ES6")
}

//Este método de export default también podemos hacerlo con las clases
