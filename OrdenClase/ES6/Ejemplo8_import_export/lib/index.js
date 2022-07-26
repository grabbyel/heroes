

// // Importar todas las funciones del módulo
// import * as moduloText from './textos.js'

// let texto = 'te lo juro por la gloria de Pete Sampras'
// console.log(moduloText.mayusculas(texto))
// console.log(moduloText.minusculas(texto))
// console.log(moduloText.longitud(texto)) // No tenemos acceso aún porque no hemos exportado en origen


// Importar todas las funciones del módulo
import { mayusculas, minusculas } from "./textos.js"

let texto = 'te lo juro por la gloria de Pete Sampras'
console.log(mayusculas(texto))
console.log(minusculas(texto))
console.log(longitud(texto)) // No tenemos acceso aún porque no hemos exportado en origen