'use strict'

var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }
var gCurrImgId
var gcurrAlign = 'center'
var gCurrColor

// var gImgs = [{ id: 1, url: 'img/1.jpg', keywords: ['funny', 'cat'] }];
var gMeme = {
    selectedImgId: 2,
    selectedLineIdx: 0,
    lines: [
        {
            lineId: 1,
            txt: 'Enter text',
            size: 50,
            align: gcurrAlign,
            color: 'white',
            stroke: 'black'
        },
        {
            lineId: 2,
            txt: 'Enter text',
            size: 50,
            align: gcurrAlign,
            color: 'white',
            stroke: 'black'
        }
    ]
}

function setImg(imgId) {
    gCurrImgId = imgId
    console.log('gCurrImgId:', gCurrImgId)
    return gCurrImgId
}

function getMeme() {
    return gMeme
}

function setLineTxt(text) {
    console.log('gMeme.lines.txt:', gMeme.lines[0].txt)
    return gMeme.lines[0].txt = text

}

function setAnotherLineTxt(text){
    return gMeme.lines[1].txt = text
}

function align() {

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


function setColor() {
    return gMeme.lines[0].color = color.value
}

function increaseFont() {
    return gMeme.lines[0].size += 2
}

function decreaseFont() {
    return gMeme.lines[0].size -= 2
}

function switchLine() {
    let line1 = gMeme.lines[0].lineId
    let line2 = gMeme.lines[1].lineId
    if (line1) return line2
    else if (line2) return line1
}