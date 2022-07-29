function saludar(nombre) {
    console.log("Hola ".concat(nombre));
}
// saludar('gabri')
// console.log(sumar(7, 10))
function sumar(num1, num2) {
    return num1 + num2;
}
//Función con parámetros opcionales
function mostrar(nombre, apellido) {
    if (apellido) {
        return "Mi nombre es ".concat(nombre, " y mi apellido es ").concat(apellido);
    }
    return "Mi nombre es ".concat(nombre);
}
// console.log(mostrar('Gabriel', 'Galdeano'))
//parámetros por defecto
function datos(nombre, soltero) {
    if (soltero === void 0) { soltero = true; }
    if (soltero)
        return "Nuestro amigo ".concat(nombre, " est\u00E1 SOLTER\u00CDSIMO");
    return "Nuestro amigo ".concat(nombre, " NO EST\u00C1 SOLTERO");
}
// console.log(datos(`Gabri`))
// console.log(datos(`Gabri`, false))
// console.log(datos(`Gabri`, true))
// console.log(datos(`Gabri`))
// De esta forma podemos decir que hay un número VARIABLE de argumentos
function concatenar() {
    var datos = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        datos[_i] = arguments[_i];
    }
    return datos.join('-');
}
console.log(concatenar('hola'));
console.log(concatenar('hola', 'adios', 'hastaluegoLucas'));
