'use strict'
var gStartPos

function onInit() {
    gElCanvas = document.querySelector('#my-canvas')
    gCtx = gElCanvas.getContext('2d')



    document.querySelector('.meme-container').classList.add('hidden')

    renderMeme()
    renderGallery()
    renderTextBox()

}


function meme() {
    // let gallery = renderGallery()
    // gallery.display = 'none'
    // renderMeme()
    onImgSelect()
    document.querySelector('.image-container').classList.add('hidden')
    document.querySelector('.meme-container').classList.add('shown')
    // renderMeme()
}

function toggleMenu() {
    document.body.classList.toggle('menu-open')
}