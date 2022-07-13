var caja = document.getElementById("caja")

var string = 'es un string'
var number = 8
var boleano = true
var objeto = {
    nombre: 'objeto',
    edad: 8,
    programador: true
}
var nula = null
var indefinida



caja.innerText = 'valor de variable string: "' + string + '" y su tipo es ' + typeof string + '\n'
caja.innerText += 'valor de variable number: "' + number + '" y su tipo es ' + typeof number + '\n'
caja.innerText += 'valor de variable boleano: "' + boleano + '" y su tipo es ' + typeof boleano + '\n'
caja.innerText += 'valor de variable objeto: "' + objeto + '" y su tipo es ' + typeof objeto + '\n'
caja.innerText += 'valor de variable nula: "' + nula + '" y su tipo es ' + typeof nula + '\n'
caja.innerText += 'valor de variable indefinida: "' + indefinida + '" y su tipo es ' + typeof indefinida + '\n'


let variables = { string, number, boleano, objeto, nula, indefinida }

// // for (let contador = 0; numVariables < variables.length; contador++) {
// //     caja.innerText = 'valor de variable ${variables.}: "' + variables[contador] + '" y su tipo es ' + typeof string + '\n'

// // }

// console.log()
