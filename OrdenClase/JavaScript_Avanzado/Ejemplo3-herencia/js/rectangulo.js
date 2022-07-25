
class Rectangulo extends Figura {
    //propiedades
    base
    altura

    constructor(x, y, base, altura) {
        super(x, y)
        this.base = base
        this.altura = altura
    }

    //sobreescribimos los métodos heredados
    area() {
        return `el área del rectángulo es ${this.base * this.altura}`
    }

    mostrarDatos() {
        return `${super.mostrarDatos()} base: ${this.base} , altura: ${this.altura}, y  ${this.area()} <br/>`
    }
}