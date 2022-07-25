

class Circulo extends Figura {


    //propiedades
    radio

    constructor(x, y, radio) {
        super(x, y)
        this.radio = radio
    }

    //sobreescribimos los métodos heredados
    area() {
        return Math.PI * Math.pow(this.radio, 2)
    }

    mostrarDatos() {
        return `${super.mostrarDatos()} radio: ${this.radio}`
    }
}