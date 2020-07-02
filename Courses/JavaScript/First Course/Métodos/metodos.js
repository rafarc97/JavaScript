/*
Arrays - Métodos II

.from(iterable) - Convierte en array el elemento iterable

.sort([callback]) - Ordena los elementos de un array alfabéticamente(valor Unicode), si le pasamos un callback los ordena en función del algoritmo que le pasemos.

.forEach(callback(currentValue, [index])) - ejecuta la función indicada una vez por cada elemento del array.

.some(callback) - Comprueba si al menos un elemento del array cumple la condición

.every(callback) - Comprueba si todos los elementos del array cumplen la condición

.map(callback) - Transforma todos los elementos del array y devuelve un nuevo array

.filter(callback) - Filtra todos los elementos del array que cumplan la condición y devuelve un nuevo array

.reduce(callback) - Reduce todos los elementos del array a un único valor
*/






/* FROM */
/*
 let word = 'Hola mundo'

console.log(Array.from(word));
console.log(word.split(''));
*/





/* SORT */
/*
 const letters = ['b', 'c', 'z', 'a']
const numbers = [1,8,100,300,3]

console.log(letters.sort())
console.log(numbers.sort())

console.log(numbers.sort((a,b)=>a-b))

function menorMayor(a, b) {
if (a-b < 0) return -1;
if (a-b > 0) return 1;
if(a == b) return 0;
}

function mayorMenor(a, b) {
if (b-a < 0) return -1;
if (b-a > 0) return 1;
if(b == a) return 0;
}
*/






/* FOREACH */
/*
 const numbers = [12, 25, 47, 84, 98]

//numbers.forEach((number)=>console.log(number))
numbers.forEach((number, index) =>
    console.log(`${number} está en la posición ${index}`))
*/



/* SOME - EVERY */
/*
 const words = ['HTML', 'CSS', 'JavaScript', 'PHP']

console.log(words.some(word => word.length>10));
console.log(words.every(word => word.length>3));
*/






/* MAP */

 const numbers = [1, 2, 3, 4, 90]
/*
 //const numbers2 = numbers.map(number => number * 2)

//console.log(numbers2);

*/




/* FILTER */
/*
 const numbers2 = numbers.filter(number => number > 80)

console.log(numbers2)

*/





/* REDUCE */
/*
console.log(numbers.reduce((a,b)=>a+b)) //suma todos los números

const users = [
    {
        name: 'user 1',
        online: true
    },
    {
        name: 'user 2',
        online: true
    },
    {
        name: 'user 3',
        online: false
    },
    {
        name: 'user 4',
        online: false
    },
    {
        name: 'user 5',
        online: false
    },
    {
        name: 'user 6',
        online: true
    }
]

const usersOnline = users.reduce((cont, user) => {
    if (user.online) cont++
    return cont
},0) //se le añade un valor inicial a cont = 0

console.log(`Hay ${usersOnline} usuarios conectados`);


*/

/*
 var amigos = ['rafa', 'amanda', 'fran'];
document.write(amigos.length + "<br>"); //imprime la long del vector
document.write(amigos.pop() + "<br>"); //imprime y saca la ultima pos del vector
var amigos2 = ['pepe', 'juan'];
document.write(amigos.concat(amigos2) + "<br>"); //concatena dos vectores
var amigos3 = amigos2.pop(); //saco el ultimo elementoy lo imprimo
document.write(amigos3 + "<br>");
document.write(amigos.join(" : ") + "<br>"); //une los elems de un vector como queramos
document.write(amigos.sort() + "<br>"); //ordena los elems del vector por alfabeto
document.write(amigos.reverse() + "<br>"); //los ordena al contrario que sort

*/

/*

 var texto = "Rafa Rodríguez";
document.write((texto.length) + " <br>"); //imprime el nº carac de la var texto
document.write(texto.substring(10) + "<br>"); //imprime del char pos 10 en adelante
document.write(texto.substr(0,4) + "<br>"); //imprime los char de las pos 0 a 4
//index y lastindexof son sensible a May/Min
document.write(texto.indexOf("z") + "<br>");  //imprime pos de la 1ª letra que encuentre qe sea z
document.write(texto.indexOf("a", 2) + "<br>"); //imprime pos de la letra a buscando desde el char en pos 2
document.write(texto.lastIndexOf("g") + "<br>"); //igual indexof pero comienza a buscar desde el final
document.write(texto.replace(texto, "Amanda Lopez") + "<br>"); //Reemplaza textos
document.write(texto.toUpperCase() + "<br>"); //transforma a may
document.write(texto.toLowerCase() + "<br>"); //transforma a minus
 */
