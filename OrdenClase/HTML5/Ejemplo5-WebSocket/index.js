btnAbrir.onclick = abrir
btnCerrar.onclick = cerrar

//variable que almacene el socket
let ws

function abrir() {
    //Creamos el socket
    ws = new WebSocket("wss://javascript.info/article/websocket/demo/hello")


    //Se ejecuta al abrir el socket
    ws.onopen = () => {
        ws.send('saludos desde mi socket')
        alert('Mensaje enviado')
    }

    // Qué hacemos cuando recibimos un mensaje

    ws.onmessage = () => {
        var mensaje = event.data
        alert(mensaje)
    }

    //se ejecuta al cerrar el socket
    ws.onclose = () => {
        alert('Socket cerrado')
    }
}

function cerrar() {
    ws.close()
}