interface Operation {
	x: number
	run: (y: number) => number
}

class Add implements Operation {
	x: number
	constructor(x: number) {
		this.x = x
	}
	run(y: number): number {
		return y + this.x
	}
}
class Sub implements Operation {
	x: number
	constructor(x: number) {
		this.x = x
	}
	run(y: number): number {
		return y - this.x
	}
}
class Mul implements Operation {
	x: number
	constructor(x: number) {
		this.x = x
	}
	run(y: number): number {
		return y * this.x
	}
}
class Div implements Operation {
	x: number
	constructor(x: number) {
		this.x = x
	}
	run(y: number): number {
		return y / this.x
	}
}

class Calculator {
	result: number
	constructor() {
		this.result = 0
	}

	//Tipo con la interfaz en vez de una operación en concreto
	solve(operation: Operation): this {
		this.result = operation.run(this.result)
		return this
	}
}

const calculator: Calculator = new Calculator()
const result: number = calculator.solve(new Add(5)).solve(new Mul(3)).solve(new Sub(9)).solve(new Div(6)).solve(new Add(1)).result

console.log(result)
