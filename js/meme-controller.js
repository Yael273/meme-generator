'use strict'

var gElCanvas
var gCtx
var gCurrShape = 'text'
const TOUCH_EVS = ['touchstart', 'touchmove', 'touchend']



function renderMeme() {
    let meme = getMeme()
    // console.log('meme:', meme)
    // const idx = setLine(lineId)
    const img = new Image()
    img.src = `img/${meme.selectedImgId}.jpg`
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
        drawText(meme.lines[0].txt, gElCanvas.width / 2, 50)
        drawText(meme.lines[1].txt, gElCanvas.width / 2, 450)
        drawText(meme.lines[2].txt, gElCanvas.width / 2, 250)
    }

}

function renderTextBox() {
    let meme = getMeme()
    const idx = meme.selectedLineIdx
    const strHTMLs = `
    <label for="color-font">first:</label>
    <input type="text" class="text-box" id="text-box" placeholder="enter text"
    oninput="onSetLine('top',this.value)" onfocus="onLineFocus()">
    <label for="color-font">Second:</label>
    <input type="text" class="text-box" id="text-box" placeholder="enter text"
    oninput="onSetLine('bottom',this.value)">
    <label for="color-font">Last:</label>
    <input type="text" class="text-box" id="text-box" placeholder="enter text"
    oninput="onSetLine('center',this.value)">
    
    <div class="color-input">
    <label for="color-font">font color:</label>
                <input type="color" class="color-font" name="color" id="color-font" value="#000000"
                    onchange="onSetColor(this.value)">
                <label for="color-stroke">stroke color:</label>
                <input type="color" class="color-stroke" name="color" id="color-stroke" value="#000000"
                    onchange="onSetStrokeColor(this.value)">
                    </div>
                    <div class="text-change">
                <button onclick="onIncreaseFont()">A+</button>
                <button onclick="onDecreaseFont()">A-</button>
                <div class="text-change align">
                <button onclick="onSetAlign('left')">left</button>
                <button onclick="onSetAlign('center')">center</button>
                <button onclick="onSetAlign('right')">right</button>
                </div>
                <!-- <button onclick="onSwitchLine()">switch Line</button> -->
    </div>
    `
    document.querySelector('.btns').innerHTML = strHTMLs
}


function onImgSelect(imgId) {
    console.log('imgId:', imgId)
    setImg(imgId)
    document.querySelector('.image-container').classList.add('hidden')
    document.querySelector('.head-container').classList.add('hidden')
    document.querySelector('.meme-container').classList.add('shown')
    renderMeme()

}

function onGetLineId() {
    setLine(lineId)
    renderMeme()
}

/// the first try - worked ///

// function onSetLineTxt(text) {

//     // if (ev.key === 'Enter') setAnotherLineTxt(text)
//     // else setLineTxt(text)
//     // setAnotherLineTxt(text)

//     setLineTxt(text)
//     renderMeme()

// }


function onSetLine(line, text) {
    setLine(line, text)
    renderMeme()
}


function drawText(text, x, y) {
    gCtx.lineWidth = 2
    gCtx.strokeStyle = gMeme.lines[0].stroke
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


function onSetColor(fontColor) {
    console.log('fontColor:', fontColor)
    setColor(fontColor)
    renderMeme()
}
function onSetStrokeColor(strokeColor) {
    console.log('strokeColor:', strokeColor)
    setStrokeColor(strokeColor)
    renderMeme()
}

function onIncreaseFont() {
    increaseFont()
    renderMeme()
}
function onDecreaseFont() {
    decreaseFont()
    renderMeme()
}

function onSetAlign(align) {
    setAlign(align)
    renderMeme()
    // renderText()
}

function onSwitchLine() {
    switchLine()
}

function onAddLine() {
    addLine()
    renderTextBox()
}

function onLineFocus() {
    setFocusToTextBox()
}

function onAddText() {
    addText()
    renderMeme()
    renderTextBox()
}


//////////////////LINKS//////////////////

function onUploadImg() {
    const imgDataUrl = gElCanvas.toDataURL('image/jpeg')

    function onSuccess(uploadedImgUrl) {

        const encodedUploadedImgUrl = encodeURIComponent(uploadedImgUrl)
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodedUploadedImgUrl}&t=${encodedUploadedImgUrl}`)
    }

    doUploadImg(imgDataUrl, onSuccess)
}

function downloadCanvas(elLink) {
    const data = gElCanvas.toDataURL()
    elLink.href = data
}

//////////////////LINKS//////////////////