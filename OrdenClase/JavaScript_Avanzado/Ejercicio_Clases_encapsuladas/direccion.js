
class Direccion {
    #calle
    #numero
    #poblacion


    getCalle() {
        return this.#calle
    }
    setCalle(valor) {
        this.#calle = valor
    }

    getNumero() {
        return this.#numero
    }
    setNumero(valor) {
        if (typeof valor != 'number') return alert('El valor de NUMERO no es correcto')
        else this.#numero = valor
    }

    getPoblacion() {
        return this.#poblacion
    }
    setPoblacion(valor) {
        this.#poblacion = valor
    }

    constructor(calle, numero, poblacion) {
        this.setCalle(calle)
        this.setNumero(numero)
        this.setPoblacion(poblacion)
    }
}