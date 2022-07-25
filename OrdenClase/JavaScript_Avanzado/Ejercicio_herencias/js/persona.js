class Persona {
    #nombre
    #edad
    #sexo


    getNombre() {
        return this.#nombre
    }
    setNombre(valor) {
        this.#nombre = valor
    }

    getEdad() {
        return this.#edad
    }
    setEdad(valor) {
        this.#edad = valor
    }

    getSexo() {
        return this.#sexo
    }
    setSexo(valor) {
        this.#sexo = valor
    }


    constructor(nombre, edad, sexo) {
        this.setNombre(nombre)
        this.setEdad(edad)
        this.setSexo(sexo)
    }


    //método
    mostrarDetalle() {
        //devuelve una cadena con los datos
        return `Nombre: ${this.getNombre()} <br/>
                Edad: ${this.getEdad()}<br/>
                Sexo: ${this.getSexo()}<br/>
        `
    }
}