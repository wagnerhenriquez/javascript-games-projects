let arrayOpciones = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', 'F', 'F', 'G', 'G', 'H', 'H', 'I', 'I', 'J', 'J', 'K', 'K', 'L', 'L']
let valoresCartas = []
let idCartas = []
let cartasAdivinadas = 0

//Metodo Fisher-yates oara mezclar un array
Array.prototype.mezclar = function () {
    let i = this.length
    let indiceAleatorio
    let valorTemporal

    while (--i > 0) {
        indiceAleatorio = Math.floor(Math.random() * (i + 1))
        valorTemporal = this[indiceAleatorio]
        this[indiceAleatorio] = this[i]
        this[i] = valorTemporal
    }
}

//funcion para crear un nuevo tablero
function nuevoTablero() {
    cartasAdivinadas = 0
    let codigoHtml = ''
    arrayOpciones.mezclar()

    for (let i = 0; i < arrayOpciones.length; i++){
        codigoHtml += '<div id="carta_' + i + '" onclick="girarCarta(this,\'' + arrayOpciones[i] + '\')"></div>'
    }
    document.getElementById('tablero').innerHTML = codigoHtml
}
nuevoTablero()


//funcion del juego
function girarCarta(carta, val) {
    if (carta.innerHTML == '' && valoresCartas.length < 2) {
        carta.style.background = '#fff'
        carta.innerHTML = val
        //codigo a ejecutar al dar vuelta la primer carta
        if (valoresCartas.length === 0) {
            valoresCartas.push(val)
            idCartas.push(carta.id)
            console.log(valoresCartas, idCartas)
        //codigo a ejecutar al dar vuelta a la segunda carta
        } else if (val.length === 1) {
            valoresCartas.push(val)
            idCartas.push(carta.id)
            
            //compruebo si las cartas son iguales
            if (valoresCartas[0] === valoresCartas[1]) {
                cartasAdivinadas += 2
                //Se limpian las variables(arrays)
                valoresCartas = []
                idCartas = []
                //Comprobar si terminamos el juego
                if (cartasAdivinadas === arrayOpciones.length) {
                    alert('Ganaste!!! ... creando nuevo tablero')
                    document.getElementById('tablero').innerHTML = ''
                    nuevoTablero()
                }
            } else {
                function ocultarCarta() {
                    //girar la carta y volver a mostrar la img 
                    let carta_1 = document.getElementById(idCartas[0])
                    let carta_2 = document.getElementById(idCartas[1])
                    //Se agrega estilos para ocultar la carta 1
                    carta_1.style.backgroundColor = '#eee'
                    carta_1.style.backgroundImage = 'url(./img/background.jpg)'
                    carta_1.style.backgroundSize = 'cover'
                    carta_1.innerHTML = ''
                    //Se agrega estilos para ocultar la carta 2
                    carta_2.style.backgroundColor = '#eee'
                    carta_2.style.backgroundImage = 'url(./img/background.jpg)'
                    carta_2.style.backgroundSize = 'cover'
                    carta_2.innerHTML = ''

                    //Se limpian las variables(arrays)
                    valoresCartas = []
                    idCartas = []
                }
                setTimeout(ocultarCarta, 700)
            }
        }
    } 
}