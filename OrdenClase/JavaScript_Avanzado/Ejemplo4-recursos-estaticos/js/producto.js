
class Producto {

    /**
     * Propiedades de instancia privadas
     * cada instancia u objeto  mantiene una copia de estas variables
     */
    #id
    #precio
    #descripcion

    /**Propiedades de clase
     * Solo existe una variable y reside en la clase
     * La información de los recursos estáticos se comparte en los objetos
     */
    static #contador = 0

    static get contador() {
        return this.#contador
    }

    get id() {
        return this.#id
    }
    set id(value) {
        this.#id = value
    }

    get descripcion() {
        return this.#descripcion
    }
    set descripcion(value) {
        this.#descripcion = value
    }

    get precio() {
        return this.#precio
    }
    set precio(value) {
        this.#precio = value
    }

    constructor(id, precio, descripcion) {
        //Se hace referencia a Producto, porque contador es una variable que reside en la clase, y se comparte a los objetos
        this.id = ++Producto.#contador
        this.precio = precio
        this.descripcion = descripcion
    }
}