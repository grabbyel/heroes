function mostrar_mapa() {
    // Comprobamos que el navegador soporta Geolocalización
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(mostrarLocalizacion, manejarError)
    } else alert('Tu obsoleto navegador no soporta navegación, COMPRATE UNO, RACANO!!!')
}
let mapa
let zoomMapa = 12
function mostrarLocalizacion(posicion) {
    // Obtener las coordenadas y generar el objeto googlemaps
    // alert(posicion.coords.longitude + '\n' + posicion.coords.latitude)
    let pos = new google.maps.LatLng(posicion.coords.latitude, posicion.coords.longitude)


    // Configuración del mapa
    let opciones = {
        zoom: zoomMapa,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    //Crear el mapa
    let mapa = new google.maps.Map(document.getElementById('seccion_mapa'), opciones)

    //Mostrar la ubicación del mapa
    new google.maps.InfoWindow({ map: mapa, position: pos, content: 'Estás aquí' })

    // Centrar el mapa
    mapa.setCenter(pos)


    document.addEventListener('click', (e) => {
        if (e.target.matches('#btnAcercar')) mapa.setZoom(++mapa.zoom)
        if (e.target.matches('#btnAlejar')) mapa.setZoom(--mapa.zoom)
    })
    document.addEventListener('change', (e) => {
        if (e.target.matches('#tipo')) {
            console.log(tipo.value)
            mapa.setMapTypeId(google.maps.MapTypeId[tipo.value])

        }
    })
}
function manejarError(error) {
    alert(error.code)
    switch (error.code) {
        case error.PERMISSION_DENIED:
            alert('El usuario denegó el permiso para obtener la ubicación')
            break
        case error.POSITION_UNAVAILABLE:
            alert('La ubicación no está disponible')
            break
        case error.TIMEOUT:
            alert('El tiempo de espera ha expirado')
            break
        case error.UNKNOWN_ERROR:
            alert('Ha ocurrido un error desconocido')
            break
    }
}

// function masZoom() {
//     zoomMapa++
// }
// function menosZoom() {
//     zoomMapa--
// }

//alternativa
google.maps.event.addDomListener(window, 'load', mostrar_mapa)