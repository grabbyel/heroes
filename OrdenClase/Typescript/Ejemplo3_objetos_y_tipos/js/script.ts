//creamos un objeto
let persona = { nombre: 'Pepe', edad: 37, aficiones: ['cine', 'musica'] }

/**
 * Puedo asignar otros valores a las propiedades pero siempre respetando
 * el nombre de las propiedades
 * persona ={nombrrrr: 'pepe'...}.... eso no funcionaría
 */

persona = { nombre: 'pepe', edad: 38, aficiones: ['teatro', 'musica', 'futbol'] }

//crear el objeto con tipo de datos específicos
let persona2: { nombre: string; edad: number; aficiones: string[] } = {
	nombre: 'Gabri',
	edad: 38,
	aficiones: ['Mimar a mi cachorra infinitamente', 'programar', 'carnavales'],
}

// Agregar métodos al objeto
let persona3: { nombre: string; edad: number; aficiones: string[]; getNombre: () => string } = {
	nombre: 'Paquita',
	edad: 38,
	aficiones: ['Mimar a mi cachorra infinitamente', 'programar', 'carnavales'],
	getNombre() {
		return this.nombre
	},
}

console.log(persona3.getNombre())

/**
 * Crear un tipo personalizado
 * OnThis, creamos el tipo Persona
 */

type Persona = {
	nombre: string
	edad: number
	aficiones: string[]
	getNombre: () => string
}

//Un ejemplo de crear lo mismo, pero en forma de Interface

interface Producto {
	id: number
	descripcion: string
	precio: number
	getDescripcion: () => string
}

let prod1: Producto = {
	id: 1,
	descripcion: 'Croquetas',
	precio: 2.95,
	getDescripcion() {
		return this.descripcion
	},
}
let prod2: Producto = {
	id: 2,
	descripcion: 'CHuletas',
	precio: 23.95,
	getDescripcion() {
		return this.descripcion
	},
}
console.log(prod1)
console.log(prod2)
console.log(prod2.descripcion)
console.log(prod2.getDescripcion())

// Propiedades o métodos opcionales

interface Animal {
	especie?: string
	lugar: string
	edad: number
	getEspecie?: () => string
}

let perro: Animal = {
	lugar: 'China',
	edad: 6,
}

// Interface para funciones
interface DosNumeros {
	(num1: number, num2: number): number
}

let sumarDos: DosNumeros = (a: number, b: number) => {
	return a + b
}
let restarDos: DosNumeros = (a: number, b: number) => {
	return a - b
}
