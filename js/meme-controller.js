'use strict'

let gElCanvas
let gCtx
let gCurrShape = 'text'

// function onInit() {
//     gElCanvas = document.querySelector('#my-canvas')
//     gCtx = gElCanvas.getContext('2d')

//     renderMeme()
//     renderGallery()

// }

function renderMeme() {
    let meme = getMeme()
    console.log('meme:', meme)

    const img = new Image()
    img.src = `img/${meme.selectedImgId}.jpg`
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
        drawText(meme.lines[0].txt, gElCanvas.width/2, 50)
    }


}

function onImgSelect(imgId) {
    console.log('imgId:', imgId)
    setImg(imgId)
    document.querySelector('.image-container').classList.add('hidden')
    document.querySelector('.meme-container').classList.add('shown')
    renderMeme() 

}

function onSetLineTxt(ev,text) {
    console.log('ev:', ev)
    if(ev.key === 'Enter') setAnotherLineTxt(text)
    else setLineTxt(text)
    renderMeme()
    // drawText(text, 225, 225)
}


function drawText(text, x, y) {
    gCtx.lineWidth = 2
    // gCtx.strokeStyle = 'brown'
    gCtx.fillStyle = gMeme.lines[0].color
    gCtx.font = gMeme.lines[0].size + 'px Impact'
    // gCtx.fontsize = gMeme.lines[0].size + 'px'
    gCtx.fontFamily = 'Impact'
    gCtx.textAlign = gMeme.lines[0].align
    gCtx.textBaseline = 'middle'
    gCtx.stroke = gMeme.lines[0].stroke

    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)
}

function onSetColor(){
    setColor()
    renderMeme()
}

function onIncreaseFont(){
    increaseFont()
    renderMeme()
}
function onDecreaseFont(){
    decreaseFont()
    renderMeme()
}

function onSwitchLine(){
    switchLine()
}