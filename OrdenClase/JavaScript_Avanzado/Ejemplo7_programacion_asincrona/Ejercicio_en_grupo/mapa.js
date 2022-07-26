

export default function obtenerMapa(donde, estilo, longitud, latitud) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(mostrarLocalizacion, manejarError)
    } else alert('Tu obsoleto navegador no soporta navegación, COMPRATE UNO, RACANO!!!')
}