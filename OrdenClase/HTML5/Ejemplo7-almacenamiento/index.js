document.addEventListener('click', guardarDatos)
document.addEventListener('click', recuperarDatos)

function guardarDatos() {
    if (event.target.matches('#btnGuardar')) {
        console.log('entramos en guardar datos')
        localStorage.setItem('nombreUsuario', nombre.value)

        /** Otra forma de guardarlo sería:
         * localStorage.nombreUser = nombre.value
         */

        alert('Nombre guardado')
    }
}

function recuperarDatos() {
    if (event.target.matches('#btnRecuperar')) {
        console.log('entramos en recuperar datos')
        let recuperado = localStorage.getItem('nombreUsuario')

        /** Otra forma de hacerlo seria:
         * let recuperado = localStorage.nombreUsuario
         */

        // En caso de que no haya sido asignado, asignamos el nombre como value de la caja de texto
        if (recuperado != undefined) nombre.value = recuperado
        else alert('Este valor no está almacenado')

        alert(`El nombre guardado en nombreUsuario es: ${recuperado}`)
    }
}