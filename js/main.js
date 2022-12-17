'use strict'
var gStartPos
var gElCanvas
var gCtx
var gCurrShape = 'text'
const TOUCH_EVS = ['touchstart', 'touchmove', 'touchend']

function onInit() {
    gElCanvas = document.querySelector('#my-canvas')
    gCtx = gElCanvas.getContext('2d')

    document.querySelector('.meme-container').classList.add('hidden')

    document.querySelector('.text-box-2').classList.add('hidden')
    // document.querySelector('.text-box-3').classList.add('hidden')


    const center = { x: gElCanvas.width / 2, y: gElCanvas.height / 2 }
    const top = { x: gElCanvas.width / 2, y: gElCanvas.height - 450 }

    createText(top)


    addListeners()
    renderMeme()
    renderGallery()
    renderTextBox()

}

//////////IMGS//////////

function renderGallery() {
    const imgs = getImgs()
    const strHTMLs = imgs.map(img => `
    <img src="img/${img.id}.jpg" onclick="onImgSelect(${img.id})"/>
    `
    )
    document.querySelector('.image-container').innerHTML = strHTMLs.join('')

}

function onSetFilterBy({ name, value }) {
        const filterBy = setFilterBy({ [name]: value })
        console.log('filterBy:', filterBy)
        renderGallery()

}


function meme() {
    onImgSelect()
    document.querySelector('.image-container').classList.add('hidden')
    document.querySelector('.meme-container').classList.add('shown')

}

function toggleMenu() {
    document.body.classList.toggle('menu-open')
}

function onImgSelect(imgId) {
    console.log('imgId:', imgId)
    setImg(imgId)
    document.querySelector('.image-container').classList.add('hidden')
    document.querySelector('.head-container').classList.add('hidden')
    document.querySelector('.meme-container').classList.add('shown')
    renderMeme()

}


////////////MEME////////////


function renderMeme() {
    let meme = getMeme()

    const img = new Image()
    img.src = `img/${meme.selectedImgId}.jpg`
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
        renderText()
        renderAnotherText()
    }


}

/////////////////TEXT/////////////////

function renderTextBox() {

    let meme = getMeme()
    const idx = meme.selectedLineIdx
    const strHTMLs = `
    <label for="color-font"></label>
    <input type="text" class="text-box-1" id="text-box" placeholder="Enter text"
    oninput="onSetLine('top',this.value)" onfocus="onSetLineId(0)">

    <label for="color-font"></label>
    <input type="text" class="text-box-2" id="text-box" placeholder="Enter text"
    oninput="onSetLine('bottom',this.value)" onfocus="onSetLineId(1)">
    
    <!--<button onclick="onRemoveText(1)">remove</button> -->
    
    <!-- <label for="color-font"></label>
    <input type="text" class="text-box-3" id="text-box" placeholder="enter text" 
    oninput="onSetLine('center',this.value)" onfocus="onSetLineId(2)"> -->


    `
    document.querySelector('.input-box').innerHTML = strHTMLs
}

function onSetLineId(lineId) {
    console.log('lineId:', lineId)
    setLineId(lineId)

}

function drawText(text, x, y) {
    gCtx.lineWidth = 2
    gCtx.strokeStyle = gMeme.lines[0].stroke
    gCtx.fillStyle = gMeme.lines[0].color
    gCtx.font = gMeme.lines[0].size + 'px Impact'
    // gCtx.fontsize = gMeme.lines[0].size + 'px'
    // gCtx.fontFamily = 'Impact'
    gCtx.textAlign = gMeme.lines[0].align
    gCtx.textBaseline = 'middle'
    gCtx.stroke = gMeme.lines[0].stroke

    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)

}

function onSetFont(font) {
    setFont(font)
    renderMeme()
}

function onSetLine(line, text) {
    setLine(line, text)
    renderMeme()

}

function onSetColor(fontColor) {
    setColor(fontColor)
    renderMeme()

}
function onSetStrokeColor(strokeColor) {
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

}

function onAddText() {
    addText()
    renderMeme()
}

// function onSwitchLine(){
//     switchLine()
//     renderMeme()
// }

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

//////////////////DRAG//////////////////


function renderText() {
    const meme = getMeme()

    const { pos, color, size } = getTextDrag()

    drawText(meme.lines[0].txt, pos.x, pos.y)
    drawText(meme.lines[1].txt, pos.x, pos.y + 400)
}
function renderAnotherText() {
    const meme = getMeme()

    const { pos, color, size } = getTextDrag()

}

//Handle the listeners
function addListeners() {
    addMouseListeners()
    addTouchListeners()

    window.addEventListener('resize', () => {
        renderMeme()

    })
}

function addMouseListeners() {
    gElCanvas.addEventListener('mousemove', onMove)
    gElCanvas.addEventListener('mousedown', onDown)
    gElCanvas.addEventListener('mouseup', onUp)
}

function addTouchListeners() {
    gElCanvas.addEventListener('touchmove', onMove)
    gElCanvas.addEventListener('touchstart', onDown)
    gElCanvas.addEventListener('touchend', onUp)
}

function onDown(ev) {

    const pos = getEvPos(ev)
    if (!isTextClicked(pos)) return

    setTextDrag(true)

    gStartPos = pos
    document.body.style.cursor = 'grabbing'

}

function onMove(ev) {
    const { isDrag } = getTextDrag()

    if (!isDrag) return

    const pos = getEvPos(ev)

    const dx = pos.x - gStartPos.x
    const dy = pos.y - gStartPos.y
    moveText(dx, dy)

    gStartPos = pos

    renderMeme()
}

function onUp() {
    setTextDrag(false)
    document.body.style.cursor = 'grab'
}

function getEvPos(ev) {

    let pos = {
        x: ev.offsetX,
        y: ev.offsetY,
    }

    if (TOUCH_EVS.includes(ev.type)) {

        ev.preventDefault()

        ev = ev.changedTouches[0]

        pos = {
            x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
            y: ev.pageY - ev.target.offsetTop - ev.target.clientTop,
        }
    }
    return pos
}
