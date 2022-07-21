class Alumno {
    nombre
    apellido
    nota
    direccion

    mostrarInfo() {
        return `<br/>
            Nombre: ${this.nombre} <br/>
            Apellido: ${this.apellido} <br/>
            Nota: ${this.nota}<br/>
            Dirección: ${this.direccion?.mostrarInfo() ?? 'Sin direccion'}<br/>
            `
    }
    // Creamos el constructor con la palabra reservada "constructor"
    constructor(nombre, apellido, nota, direccion) {
        this.nombre = nombre
        this.apellido = apellido
        this.nota = nota
        this.direccion = direccion
    }

}