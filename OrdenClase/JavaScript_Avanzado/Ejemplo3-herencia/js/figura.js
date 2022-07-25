
class Figura {
    x
    y

    constructor(x, y) {
        this.x = x
        this.y = y
    }

    area() {
        return 0
    }

    posicion() {
        return `${this.x} , ${this.y}`
    }

    mostrarDatos() {
        return `X: ${this.x} , Y:  ${this.y}`
    }
}