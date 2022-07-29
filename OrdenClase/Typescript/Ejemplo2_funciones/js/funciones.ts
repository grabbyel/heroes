function saludar(nombre: string): void {
	console.log(`Hola ${nombre}`)
}
// saludar('gabri')
// console.log(sumar(7, 10))

function sumar(num1: number, num2: number): number {
	return num1 + num2
}

//Función con parámetros opcionales
function mostrar(nombre: string, apellido?: string): string {
	if (apellido) {
		return `Mi nombre es ${nombre} y mi apellido es ${apellido}`
	}
	return `Mi nombre es ${nombre}`
}
// console.log(mostrar('Gabriel', 'Galdeano'))

//parámetros por defecto
function datos(nombre: string, soltero: boolean = true): string {
	if (soltero) return `Nuestro amigo ${nombre} está SOLTERÍSIMO`
	return `Nuestro amigo ${nombre} NO ESTÁ SOLTERO`
}
// console.log(datos(`Gabri`))
// console.log(datos(`Gabri`, false))
// console.log(datos(`Gabri`, true))
// console.log(datos(`Gabri`))

// De esta forma podemos decir que hay un número VARIABLE de argumentos
function concatenar(...datos: any[]): string {
	return datos.join('-')
}

console.log(concatenar('hola'))
console.log(concatenar('hola', 'adios', 'hastaluegoLucas'))
