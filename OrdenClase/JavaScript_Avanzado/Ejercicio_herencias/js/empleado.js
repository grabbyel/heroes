
class Empleado extends Persona {
    #sueldo

    getSueldo() {
        return this.#sueldo
    }
    setSueldo(valor) {
        this.#sueldo = valor
    }

    constructor(nombre, edad, sexo, sueldo) {
        super(nombre, edad, sexo)
        this.setSueldo(sueldo)
    }

    //método mostrarDetalle
    mostrarDetalle() {
        return `
                +++Esta Persona es empleado+++<br/>
                ${super.mostrarDetalle()}<br/>
                Sueldo de este empleado: ${this.getSueldo()}<br/>
                `
    }
}