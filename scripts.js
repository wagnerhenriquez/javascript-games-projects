const victorias = document.getElementById('v')
const derrotas = document.getElementById('d')
const empates = document.getElementById('e')
const rock = document.getElementById('piedra')
const paper = document.getElementById('papel')
const scissors = document.getElementById('tijera')
const playOneMore = document.getElementById('playAgain')
const si = document.getElementById('yes')
const nope = document.getElementById('no')

let jugador2 = ''
let victorias1 = 0
let derrota = 0
let empate = 0
//choose rock
rock.addEventListener('click', () => {
    function play() {
        let azar = Math.floor((Math.random() * 9) + 1)
        console.log(azar)

        if (azar <= 3) {
            jugador2 = 'rock'
        }
        else if (azar <= 6) {
            jugador2 = 'paper'
        }
        else if (azar <= 9) {
            jugador2 = 'scissors'
        }
        if (jugador2 === 'scissors') {
            victorias1++
            victorias.textContent = victorias1
            paper.innerHTML = `<img src="img/vs.png">`
            playOneMore.innerHTML = `Play again?`
            si.innerHTML = '<p>Yes</p>'
            si.addEventListener('click', () => {
                paper.innerHTML = `<img src="img/paper.png">`
                playOneMore.innerHTML = `Choose your hand!`
                si.innerHTML = ''
                nope.innerHTML = ''
            })
            nope.innerHTML = '<p>No</p>'
            nope.addEventListener('click', () => {
                paper.innerHTML = `<img src="img/paper.png">`
                playOneMore.innerHTML = `Thank you for playing!`
                si.innerHTML = ''
                nope.innerHTML = ''
            })
        }
        else if (jugador2 === 'rock') {
            empate++
            empates.textContent = empate
        } else {
            derrota++
            derrotas.textContent = derrota
        }
    } play()
})
// choose paper
paper.addEventListener('click', () => {
    function play() {
        let azar = Math.floor((Math.random() * 9) + 1)
        console.log(azar)

        if (azar <= 3) {
            jugador2 = 'rock'
        }
        else if (azar <= 6) {
            jugador2 = 'paper'
        }
        else if (azar <= 9) {
            jugador2 = 'scissors'
        }
        if (jugador2 === 'rock') {
            victorias1++
            victorias.textContent = victorias1
            rock.innerHTML = `<img src="img/paper.png">`
            paper.innerHTML = `<img src="img/vs.png">`
            playOneMore.innerHTML = `Play again?`
            si.innerHTML = '<p>Yes</p>'
            si.addEventListener('click', () => {
                paper.innerHTML = `<img src="img/paper.png">`
                rock.innerHTML = `<img src="img/rock.png">`
                playOneMore.innerHTML = `Choose your hand!`
                si.innerHTML = ''
                nope.innerHTML = ''
            })
            nope.innerHTML = '<p>No</p>'
            nope.addEventListener('click', () => {
                rock.innerHTML = `<img src="img/rock.png">`
                paper.innerHTML = `<img src="img/paper.png">`
                playOneMore.innerHTML = `Thank you for playing!`
                si.innerHTML = ''
                nope.innerHTML = ''
            })
        }
        else if (jugador2 === 'paper') {
            empate++
            empates.textContent = empate
        } else {
            derrota++
            derrotas.textContent = derrota
        }
    } play()
})
//choose scissors
scissors.addEventListener('click', () => {
    function play() {
        let azar = Math.floor((Math.random() * 9) + 1)
        console.log(azar)

        if (azar <= 3) {
            jugador2 = 'rock'
        }
        else if (azar <= 6) {
            jugador2 = 'paper'
        }
        else if (azar <= 9) {
            jugador2 = 'scissors'
        }
        if (jugador2 === 'paper') {
            victorias1++
            victorias.textContent = victorias1
            scissors.innerHTML = `<img src="img/paper.png">`
            rock.innerHTML = `<img src="img/scissors.png">`
            paper.innerHTML = `<img src="img/vs.png">`
            playOneMore.innerHTML = `Play again?`
            si.innerHTML = '<p>Yes</p>'
            si.addEventListener('click', () => {
                paper.innerHTML = `<img src="img/paper.png">`
                rock.innerHTML = `<img src="img/rock.png">`
                scissors.innerHTML = `<img src="img/scissors.png">`
                playOneMore.innerHTML = `Choose your hand!`
                si.innerHTML = ''
                nope.innerHTML = ''
            })
            nope.innerHTML = '<p>No</p>'
            nope.addEventListener('click', () => {
                rock.innerHTML = `<img src="img/rock.png">`
                paper.innerHTML = `<img src="img/paper.png">`
                scissors.innerHTML = `<img src="img/scissors.png">`
                playOneMore.innerHTML = `Thank you for playing!`
                si.innerHTML = ''
                nope.innerHTML = ''
            })
        }
        else if (jugador2 === 'paper') {
            empate++
            empates.textContent = empate
        } else {
            derrota++
            derrotas.textContent = derrota
        }
    } play()
})