'use strict'

function onInit() {
    gElCanvas = document.querySelector('#my-canvas')
    gCtx = gElCanvas.getContext('2d')

    

    document.querySelector('.meme-container').classList.add('hidden')

    renderMeme()
    renderGallery()

}

function meme(){
    // let gallery = renderGallery()
    // gallery.display = 'none'
    // renderMeme()
    onImgSelect()
    document.querySelector('.image-container').classList.add('hidden')
    document.querySelector('.meme-container').classList.add('shown')
    // renderMeme()
}

