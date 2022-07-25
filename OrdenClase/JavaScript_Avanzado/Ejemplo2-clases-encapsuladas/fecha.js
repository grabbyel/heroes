class Fecha {

    // Propiedades públicas
    dia
    mes
    anio

    // Constructor
    constructor(dia, mes, anio) {
        this.dia = dia
        this.mes = mes
        this.anio = anio
    }

    mostrarFecha() {
        return `<br/>La fecha es dia ${this.dia} del mes de ${this.mes} del año ${this.anio}<br/>`
    }
}