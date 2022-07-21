class Direccion {
    calle
    numero
    poblacion

    mostrarInfo() {
        return `<br/>Estamos en calle ${this.calle} número ${this.numero} en ${this.poblacion}<br/>`
    }

    constructor(calle, numero, poblacion) {
        this.calle = calle
        this.numero = numero
        this.poblacion = poblacion
    }
}