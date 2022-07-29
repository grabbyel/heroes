//string
let nombre: string = `Gabriel`
let appellido: string = 'galdeano'

//number

let edad: number = 38
let numero: number = 67

//any
let algo: any = true
algo = `hola`
algo = 6
let variable //por defecto, si no se le aplica un tipo, seria any

//arrays
let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let lista2: number[] = [1, 2, 3, 4]
let lista3: Array<number> = [4, 5, 6, 7]
let letras: string[] = ['a', 'b', 'c']
//letras.push[5] nos daría error porque 5 es de tipo number

//tuplas
let producto = ['melocotones', 1.5]
let producto2: [string, number] = ['Melocotones', 2.7]
console.log(producto2[0])
console.log(producto2[1])

/**
 * enum PuntoCardinal{NORTE, SUR, ESTE, OESTE}
 * si en el momento de la declaración del enum, igualamos el primer valor a cualquiera (NORTE=1), el index empieza por ese valor y le asigna los valores siguientes en función del orden de declaración
 */
enum PuntoCardinal {
	NORTE,
	SUR,
	ESTE,
	OESTE,
}
let punto: PuntoCardinal = PuntoCardinal.OESTE
console.log(PuntoCardinal[0])
console.log(PuntoCardinal.NORTE)

//null y undefined
// en tsconfig.json --- "strictNullCheks": false,
let n: number = undefined
let texto: string | undefined = null

let valiur: any = 'esto es un string'
console.log(valiur.length)

//Aserciones
let num1: any = 5
function mostrarNombre(): void {
	console.log(`Hola, me llamo ${nombre} ${appellido} y tengo ${edad} años, si sí, ${edad} años, tal cual`)
}

mostrarNombre()
