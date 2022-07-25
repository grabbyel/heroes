
class Jefe extends Empleado {
    #bonus
    #matricula


    getBonus() {
        return this.#bonus
    }
    setBonus(valor) {
        this.#bonus = valor
    }

    getMatricula() {
        return this.#matricula
    }
    setMatricula(valor) {
        this.#matricula = valor
    }

    constructor(nombre, edad, sexo, sueldo, bonus, matricula) {
        super(nombre, edad, sexo, sueldo)
        this.setBonus(bonus)
        this.setMatricula(matricula)
    }

    //método mostrarDetalle
    mostrarDetalle() {
        return `
                ****Esta Persona es un JEFAZO****<br/>
                ${super.mostrarDetalle()}<br/>
                Bonus por PEZ GORDO: ${this.getBonus()}<br/>
                Matrícula del PEZ GORDO: ${this.getMatricula()}<br/>
                `
    }

    //método mostrarDetalle
}