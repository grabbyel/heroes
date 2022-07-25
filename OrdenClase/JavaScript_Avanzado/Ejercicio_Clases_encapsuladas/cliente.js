
class Cliente {
    #nombre
    #cif
    #direccion

    getNombre() {
        return this.#nombre
    }
    setNombre(valor) {
        if (typeof valor != 'string') return alert('el nombre no es correcto')
        else this.#nombre = valor
    }

    getCif() {
        return this.#cif
    }
    setCif(valor) {
        this.#cif = valor
    }

    getDireccion() {
        return this.#direccion
    }
    setDireccion(calle, numero, poblacion) {
        this.#direccion = new Direccion(calle, numero, poblacion)
    }

    mostrarCliente() {
        return document.write(`El cliente con nombre ${this.#nombre}, con CIF ${this.#cif} y tiene direccion en calle ${this.#direccion?.getCalle()} número ${this.#direccion?.getNumero()} de ${this.#direccion?.getPoblacion()}`)
    }

    constructor(nombre, cif, direccion) {
        this.setNombre(nombre)
        this.setCif(cif)
        if (typeof direccion != 'object') return alert('error en constructor Cliente, la direccion debe ser un objeto')
        else this.setDireccion(direccion.calle, direccion.numero, direccion.poblacion)
    }
}