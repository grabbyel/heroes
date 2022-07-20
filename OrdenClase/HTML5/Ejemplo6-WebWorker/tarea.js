let i = 0
function contador() {
    //Recoger el mensaje recibido desde el hilo principal
    onmessage = (e) => {
        i = parseInt(e.data)
    }

    // Temporizador 
    setTimeout(() => {
        i++
        postMessage(i) // Enviar el valor de i al hilo principal
        contador()
    }, 500)
}

contador()