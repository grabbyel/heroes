class Alumno {
    nombre
    apellido
    nota

    mostrarInfo() {
        return `<br/>
            Nombre: ${this.nombre} <br/>
            Apellido: ${this.apellido} <br/>
            Nota: ${this.nota}<br/>
            `
    }

    // Creamos el constructor con la palabra reservada "constructor"
    constructor(nombre, apellido, nota) {
        this.nombre = nombre
        this.apellido = apellido
        this.nota = nota
    }

    mostrarInfo() {
        return ` Nombre: ${this.nombre} Apellido: ${this.apellido} Nota: ${this.nota}`
    }
}