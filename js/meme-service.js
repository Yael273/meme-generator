'use strict'

var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }
var gCurrImgId
var gcurrAlign
var gCurrColor
var gcurrLine
var gMemeId = 0
var gText

// var gImgs = [{ id: 1, url: 'img/1.jpg', keywords: ['funny', 'cat'] }];
var gMeme = {
    selectedImgId: 2,
    selectedLineIdx: 0,
    lines: [
        {
            id: gMemeId++,
            txt: 'Enter text',
            size: 50,
            align: 'center',
            color: 'white',
            stroke: 'black'
        },
        {
            id: gMemeId++,
            txt: '',
            size: 50,
            align: 'center',
            color: 'white',
            stroke: 'black'
        },
        {
            id: gMemeId++,
            txt: '',
            size: 50,
            align: 'center',
            color: 'white',
            stroke: 'black'
        },

    ]
}

function setImg(imgId) {
    return gMeme.selectedImgId = imgId
}
function setLine(lineId) {
    return gMeme.selectedLineIdx = lineId
}

function getMeme() {
    return gMeme
}

/// the first try - worked ///

// function setLineTxt(text) {
//     return gMeme.lines[0].txt = text
// }

// function setAnotherLineTxt(text) {
//     return gMeme.lines[1].txt = text
// }



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
            gMeme.lines[0].align = 'right'
            break
        case 'right':
            gMeme.lines[0].align = 'left'
            break
    }
}

function setColor(fontColor) {
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

function switchLine() {
    ////// toggle?
    // setFocusToTextBox()
    let line1 = gMeme.lines[0]
    console.log('line1:', line1)
    let line2 = gMeme.lines[1]
    console.log('line2:', line2)
    if (line1) return line2
    else if (line2) return line1
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
    const text = _createText()
    gMeme.lines.push(text)
    console.log('text:', text)
    return text
}

function getText() {
    return gText
}

function _createText() {
    return  {
        id: gMemeId++,
        txt: 'Enter text',
        size: 50,
        align: 'center',
        color: 'white',
        stroke: 'black',
    }

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

//////////////////LINKS//////////////////