'use strict'

var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }
var gCurrImgId
var gcurrAlign
var gCurrColor
var gcurrLine
var gMemeId = 0
var gText
var gCurrFont = 'px Impact'

var gMeme = {
    selectedImgId: 2,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'Enter text',
            size: 50,
            align: 'center',
            color: 'white',
            stroke: 'black',
            line: 'top',
            font: 'Impact',
            baseLine: 'middle',
        },
        {
            txt: 'Enter text',
            size: 50,
            align: 'center',
            color: 'white',
            stroke: 'black',
            line: 'bottom',
            font: 'Impact',
            baseLine: 'middle',
        },
        {
            txt: '',
            size: 50,
            align: 'center',
            color: 'white',
            stroke: 'black',
            line: 'center',
            font: 'Impact',
            baseLine: 'middle',
        },

    ]
}



// function setLineId(lineId) {
//     return gMeme.selectedLineIdx = lineId
// }

function setLineIdx(lineIdx) {
    return gMeme.selectedLineIdx = lineIdx
}

function getMeme() {
    return gMeme
}

function setFont(font) {
    gCurrFont = font
    // getFont(font)
}


function getFont(font) {

    switch (gCurrFont) {
        case 'Impact':
            gMeme.lines[0].font = text
            break
        case 'center':
            gMeme.lines[2].txt = text
            break
        case 'bottom':
            gMeme.lines[1].txt = text
            break
    }
}



function setLine(line, text) {
    gcurrLine = line
    alignLine(text)
}

function alignLine(text) {

    switch (gcurrLine) {
        case 'top':
            gMeme.lines[0].txt = text
            break
        case 'center':
            gMeme.lines[2].txt = text
            break
        case 'bottom':
            gMeme.lines[1].txt = text
            break
    }
}


function setAlign(align) {
    gcurrAlign = align
    alignText()
}

function alignText() {

    switch (gcurrAlign) {
        case 'center':
            gMeme.lines[0].align = 'center'
            break
        case 'left':
            gMeme.lines[0].align = 'left'
            break
        case 'right':
            gMeme.lines[0].align = 'right'
            break
    }
}

function setColor(fontColor) {
    // console.log('fontColor:', fontColor)
    const idx = gMeme.selectedLineIdx
    return gMeme.lines[0].color = fontColor
}
function setStrokeColor(strokeColor) {
    return gMeme.lines[0].stroke = strokeColor
}

function increaseFont() {
    return gMeme.lines[0].size += 2
}

function decreaseFont() {
    return gMeme.lines[0].size -= 2
}

function switchLine(lineIdx) {
    ////// toggle?
    // setFocusToTextBox()

    if (lineIdx === 0) {
        lineIdx += 1
        return document.querySelector('.text-box-1').focus()
    }
    else if (lineIdx === 1) {
        lineIdx -= 1
        return document.querySelector('.text-box-0').focus()
    }

    console.log('lineIdx:', lineIdx)

}


function setFocusToTextBox() {
    document.querySelector('.text-box').focus()
}

function getLines() {
    console.log('gMeme.lines:', gMeme.lines)
    return gMeme.lines
}

function addLine() {
    // gMeme.lines.push(text)
    // return text
}

function addText() {
    // gMemeId++
    const lines = getText()
    console.log('lines[gMemeId++]:', lines[1].id)
    return lines
}

function getText() {
    return gMeme.lines
}

function _createText() {
    return {
        id: gMemeId++,
        txt: 'Enter text',
        size: 50,
        align: 'center',
        color: 'white',
        stroke: 'black',
    }

}

function render() {
    const lines = getText()
    var strHTMLs = lines.map(line => {
        `
        <input type="text" class="text-box-1" id="text-box-${line.id}" placeholder="enter text"
        oninput="onSetLine('top',this.value)">
        
        <input type="text" class="text-box-1" id="text-box-${line.id}" placeholder="enter text"
        oninput="onSetLine('bottom',this.value)">
            `
    })
    document.querySelector('.input-box').innerHTML = strHTMLs.join('')
}

function removeText(lineId) {
    gMeme.lines.splice(lineId, 1)

    console.log('remove')
    document.querySelector('.text-box-1').classList.add('hidden')

}


//////////////////LINKS//////////////////


function doUploadImg(imgDataUrl, onSuccess) {

    const formData = new FormData()
    formData.append('img', imgDataUrl)
    console.log('formData:', formData)

    fetch('//ca-upload.com/here/upload.php', { method: 'POST', body: formData })
        .then(res => res.text())
        .then(url => {
            console.log('url:', url)
            onSuccess(url)
        })
}

//////////////////DRAG//////////////////


function createText(pos) {
    gText = {
        pos,
        txt: 'txt',
        size: 60,
        color: 'blue',
        isDrag: false
    }
}

function getTextDrag() {
    return gText
}


function isTextClicked(clickedPos) {
    const { pos } = gText

    const distance = Math.sqrt((pos.x - clickedPos.x) ** 2 + (pos.y - clickedPos.y) ** 2)

    return distance <= gText.size
}


function setTextDrag(isDrag) {
    gText.isDrag = isDrag
}


function moveText(dx, dy) {
    gText.pos.x += dx
    gText.pos.y += dy

}
