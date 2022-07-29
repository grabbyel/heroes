//string
var nombre = "Gabriel";
var appellido = 'galdeano';
//number
var edad = 38;
var numero = 67;
//any
var algo = true;
algo = "hola";
algo = 6;
var variable; //por defecto, si no se le aplica un tipo, seria any
//arrays
var lista = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var lista2 = [1, 2, 3, 4];
var lista3 = [4, 5, 6, 7];
var letras = ['a', 'b', 'c'];
//letras.push[5] nos daría error porque 5 es de tipo number
//tuplas
var producto = ['melocotones', 1.5];
var producto2 = ['Melocotones', 2.7];
console.log(producto2[0]);
console.log(producto2[1]);
/**
 * enum PuntoCardinal{NORTE, SUR, ESTE, OESTE}
 * si en el momento de la declaración del enum, igualamos el primer valor a cualquiera (NORTE=1), el index empieza por ese valor y le asigna los valores siguientes en función del orden de declaración
 */
var PuntoCardinal;
(function (PuntoCardinal) {
    PuntoCardinal[PuntoCardinal["NORTE"] = 0] = "NORTE";
    PuntoCardinal[PuntoCardinal["SUR"] = 1] = "SUR";
    PuntoCardinal[PuntoCardinal["ESTE"] = 2] = "ESTE";
    PuntoCardinal[PuntoCardinal["OESTE"] = 3] = "OESTE";
})(PuntoCardinal || (PuntoCardinal = {}));
var punto = PuntoCardinal.OESTE;
console.log(PuntoCardinal[0]);
console.log(PuntoCardinal.NORTE);
//null y undefined
// en tsconfig.json --- "strictNullCheks": false,
var n = undefined;
var texto = null;
var valiur = 'esto es un string';
console.log(valiur.length);
//Aserciones
var num1 = 5;
function mostrarNombre() {
    console.log("Hola, me llamo ".concat(nombre, " ").concat(appellido, " y tengo ").concat(edad, " a\u00F1os, si s\u00ED, ").concat(edad, " a\u00F1os, tal cual"));
}
mostrarNombre();
