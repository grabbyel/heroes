
let estiloBorde = false
let $stiloCuadrado = document.getElementById('cuadrado').style

function borde() {

    if (!estiloBorde) {
        $stiloCuadrado.border = '5px solid blue'
        document.getElementById('btnBorde').innerText = 'Quitar borde'
        estiloBorde = true
    }
    else {
        $stiloCuadrado.border = 'none'
        document.getElementById('btnBorde').innerText = 'Aplicar borde'
        estiloBorde = false
    }
}

let $color = document.getElementById('color')
let estiloColor = false
var randomColor = Math.floor(Math.random() * 16777215).toString(16)
// document.getElementById("cuadrado").style.backgroundColor = "#" + randomColor;

function color() {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16)
    if (!estiloColor) {
        $stiloCuadrado.backgroundColor = '#' + randomColor
        $color.innerText = 'Restaurar el color'
    }
    else {
        $stiloCuadrado.backgroundColor = 'gray'
        $color.innerText = 'Cambiar el color'
    }
    estiloColor = !estiloColor
}

let estiloSombra = false
let $sombra = document.getElementById('sombra').style
function sombra() {
    document.getElementById('cuadrado').classList.toggle('sombra')
}