'use strict'

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

// function onImgInput(ev) {
//     loadImageFromInput(ev, addImage)
//     // const image = addImage()
//     renderGallery()
// }



