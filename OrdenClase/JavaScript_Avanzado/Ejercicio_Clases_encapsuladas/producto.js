
class Producto {
    #id
    #descripcion
    #precio


    getId() {
        return this.#id
    }
    setId(id) {
        this.#id = id
    }

    getDescripcion() {
        return this.#descripcion
    }
    setDescripcion(descripcion) {
        if (typeof descripcion != 'number') return alert('El descripcion de DESCRIPCION no es correcto')
        else this.#descripcion = descripcion
    }

    getPrecio() {
        return this.#precio
    }
    setPrecio(precio) {
        this.#precio = precio
    }

    constructor(id, descripcion, precio) {
        this.setId(id)
        this.setDescripcion(descripcion)
        this.setPrecio(precio)
    }
}