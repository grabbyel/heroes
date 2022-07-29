//creamos un objeto
var persona = { nombre: 'Pepe', edad: 37, aficiones: ['cine', 'musica'] };
/**
 * Puedo asignar otros valores a las propiedades pero siempre respetando
 * el nombre de las propiedades
 * persona ={nombrrrr: 'pepe'...}.... eso no funcionaría
 */
persona = { nombre: 'pepe', edad: 38, aficiones: ['teatro', 'musica', 'futbol'] };
//crear el objeto con tipo de datos específicos
var persona2 = {
    nombre: 'Gabri',
    edad: 38,
    aficiones: ['Mimar a mi cachorra infinitamente', 'programar', 'carnavales']
};
// Agregar métodos al objeto
var persona3 = {
    nombre: 'Paquita',
    edad: 38,
    aficiones: ['Mimar a mi cachorra infinitamente', 'programar', 'carnavales'],
    getNombre: function () {
        return this.nombre;
    }
};
console.log(persona3.getNombre());
var prod1 = {
    id: 1,
    descripcion: 'Croquetas',
    precio: 2.95,
    getDescripcion: function () {
        return this.descripcion;
    }
};
var prod2 = {
    id: 2,
    descripcion: 'CHuletas',
    precio: 23.95,
    getDescripcion: function () {
        return this.descripcion;
    }
};
console.log(prod1);
console.log(prod2);
console.log(prod2.descripcion);
console.log(prod2.getDescripcion());
var perro = {
    lugar: 'China',
    edad: 6
};
var sumarDos = function (a, b) {
    return a + b;
};
var restarDos = function (a, b) {
    return a - b;
};
