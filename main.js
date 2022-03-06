//pegando todas as teclas
const keys = document.querySelectorAll('div.key')

//tocar as notas
function playNote(event) {
    let audioKeyCode = getKeyCode(event)

    const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`)
    

    const iskeyExists = key

    const cantFoundAnyKey = !key

    if (cantFoundAnyKey) {
        return
    }

    addPlayingClass(key)
    playAudio(audioKeyCode)


}

// tocando no teclado, vai emitir o som de acordo com a tecla selecionada
function playAudio(audioKeyCode) {
    const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`)
    audio.currentTime = 0
    audio.play()
}

//pegando a tecla tocada, teclado ou mouse
function getKeyCode(event) {
    let keyCode;
    const isKeyboard = event.type == 'keydown'

    if (isKeyboard) {
        keyCode = event.keyCode

    } else {
        keyCode = event.target.dataset.key
    }
    
    console.log(keyCode)
    return keyCode
}

// add class que da sensacao de toque

function addPlayingClass(key) {
    key.classList.add('playing')
}

function removePlayingClass(event) {
    event.target.classList.remove('playing')
}
//chamada dos eventos

function eventRegister(){
    
    window.addEventListener('keydown', playNote)
    keys.forEach((key) =>{
        key.addEventListener('click', playNote); 
        key.addEventListener('transitionend', removePlayingClass)
    })
}



window.addEventListener('load', eventRegister)