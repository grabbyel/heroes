// Una clase encapsulada tiene todas sus propiedades declarados como privadas y se accede a ellas a través de métodos get y set públicos

// Cuando una propiedad es privada, sólo se puede acceder a ella desde la clase donde ha sido declarada

class FechaEncapsulada {

    // Propiedades públicas
    #dia
    #mes
    #anio

    // Constructor
    constructor(dia, mes, anio) {
        this.setDia(dia)
        this.setMes(mes)
        this.setAnio(anio)
    }

    // Métodos de acceso
    getDia() {
        return this.#dia
    }
    setDia(valor) {
        if (valor < 1 || valor >= 31) return alert('El DIA no es válido')
        else this.#dia = valor
    }

    getMes() {
        return this.#mes
    }
    setMes(valor) {
        if (valor < 1 || valor >= 12) return alert('El MES no es válido')
        else this.#mes = valor
    }

    getAnio() {
        return this.#anio
    }
    setAnio(valor) {
        if (valor != 2022) return alert('El AÑO no es válido')
        else this.#anio = valor
    }

    mostrarFecha() {
        return `<br/>La fecha es dia ${this.#dia} del mes de ${this.#mes} del año ${this.#anio}<br/>`
    }
}