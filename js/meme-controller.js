'use strict'

let gElCanvas
let gCtx
let gCurrShape = 'text'

function onInit() {
    gElCanvas = document.querySelector('#my-canvas')
    gCtx = gElCanvas.getContext('2d')


}

function renderMeme() {

}

function draw() {
    // const { offsetX, offsetY } = ev

    // console.log('offsetX, offsetY:', offsetX, offsetY)
    switch (gCurrShape) {
        case 'text':
            drawText(getInput(), 225, 225)
            break

    }
}

function setShape(shape) {
    gCurrShape = shape
}

function drawText(text, x, y) {
    gCtx.lineWidth = 2
    // gCtx.strokeStyle = 'brown'
    gCtx.fillStyle = 'red'
    gCtx.font = "40px arial";
    gCtx.textAlign = 'center'
    gCtx.textBaseline = 'middle'

    gCtx.fillText(text, x, y)
    // gCtx.strokeText(text, x, y)
}

function getInput() {
    var text = document.querySelector('.text-box').value
    return text
}