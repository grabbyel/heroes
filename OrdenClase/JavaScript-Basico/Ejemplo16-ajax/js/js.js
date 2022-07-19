let xhr = new XMLHttpRequest()

//Funcion para obtener el objeto del navegador

function obtenerObjeto() {
    xhr = new XMLHttpRequest()
}

function traerTodos() {
    obtenerObjeto()

    //preparar la petición
    xhr.open("GET", "https://pokeapi.co/api/v2/pokemon", true)

    //El formato de respuesta es JSON
    xhr.setRequestHeader('accept', 'application/json')

    //informar de la funcion que procesará la respuesta

    xhr.onreadystatechange = procesarTodos

    // Enviar la petición
    xhr.send()

}

function procesarTodos() {
    if (xhr.readyState == 4) {
        let datos = JSON.parse(xhr.responseText)
        let array = datos.results
        // console.log(xhr.responseText)

        array.forEach((objetoJSON) => {
            console.log(objetoJSON.name)
            let $ul = document.getElementById('nombrePokemon')
            let $nombre = document.createElement('li')
            $nombre.innerText = objetoJSON.name
            $ul.appendChild($nombre)
        })
    }
}

function buscarPokemon() {
    // let datos = JSON.parse(xhr.responseText)
    // let array = datos.results
    // alert(nombre.value)
    //Preparar la petición
    let dato = nombre.value
    xhr.open("GET", "https://pokeapi.co/api/v2/pokemon/" + dato, true)

    //El formato de respuesta es JSON
    xhr.setRequestHeader('accept', 'application/json')

    //informar de la funcion que procesará la respuesta

    xhr.onreadystatechange = procesarPokemon


    // Enviar la petición
    xhr.send()

}

function procesarPokemon() {
    // if (xhr.readyState == 3) console.log("Ha habido un error")
    if (xhr.readyState == 4) {
        let datos = JSON.parse(xhr.responseText)
        // console.log(datos)
        console.log(datos.name)

        //lista de los nombres de los atributos o propiedades del JSON
        console.log(Object.keys(datos))

        // Acceder al valor de cada atributo
        // console.log(datos[id] + '-------------')

        // document.getElementById('')

        /***
         * 
         * function procesarPokemon() {

            if (xhr.readyState == 4) {
                console.log(JSON.parse(xhr.responseText));
                let datos = JSON.parse(xhr.responseText);

                //lista nombres de los atributos del json
                console.log(Object.keys(datos));


                resultado.innerText += "Nombre: " + datos.name + "\n";
                resultado.innerText += "Altura: " + datos.height + "\n";
                resultado.innerText += "Peso: " + datos.weight + "\n";

            }

        }
         */
    }
}


document.getElementsByTagName('body')[0].addEventListener('load', traerTodos())


//asociar evento a la caja de texto
document.getElementById('nombre').addEventListener('blur', buscarPokemon)