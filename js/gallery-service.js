'use strict'

var imgId = 0
var gSortIsOn

var gFilterBy = {
    txt: ''
}

var gImgs = [
    { id: 1, url: 'img/1.jpg', keywords: ['funny','trump', 'guy', ''] },
    { id: 2, url: 'img/2.jpg', keywords: ['puppy', 'cute', ''] },
    { id: 3, url: 'img/3.jpg', keywords: ['puppy', 'baby', ''] },
    { id: 4, url: 'img/4.jpg', keywords: ['cat', 'cute', ''] },
    { id: 5, url: 'img/5.jpg', keywords: ['boy', 'child', ''] },
    { id: 6, url: 'img/6.jpg', keywords: ['guy', 'history', ''] },
    { id: 7, url: 'img/7.jpg', keywords: ['cute', 'baby', ''] },
    { id: 8, url: 'img/8.jpg', keywords: ['interesting', 'guy', ''] },
    { id: 9, url: 'img/9.jpg', keywords: ['child', 'evil', 'child','funny', ''] },
    { id: 10, url: 'img/10.jpg', keywords: ['obama', 'barack', 'laugh', 'guy', 'funny',''] },
    { id: 11, url: 'img/11.jpg', keywords: ['kiss', 'fight', 'guy','funny', ''] },
    { id: 12, url: 'img/12.jpg', keywords: ['you', 'WWYD', 'guy', ''] },
    { id: 13, url: 'img/13.jpg', keywords: ['Leonardo Di Caprio', 'cheers', 'guy', ''] },
    { id: 14, url: 'img/14.jpg', keywords: ['Matrix', 'cool', 'guy', ''] },
    { id: 15, url: 'img/15.jpg', keywords: ['mordor', 'Lord Of The Rings', 'guy', ''] },
    { id: 16, url: 'img/16.jpg', keywords: ['star trak', 'star', 'trak', 'guy', ''] },
    { id: 17, url: 'img/17.jpg', keywords: ['Vladimir Putin', 'politics', 'guy', ''] },
    { id: 18, url: 'img/18.jpg', keywords: ['toy story', 'toy', 'story', 'worried', ''] },
    { id: 19, url: 'img/19.jpg', keywords: ['jordan', 'cry', 'crying', 'basketball','guy', ''] },
    { id: 20, url: 'img/20.jpg', keywords: ['fire', 'burning', 'child', 'funny','girl','evil', ''] },
    { id: 22, url: 'img/22.jpg', keywords: ['kurmit', 'evil', 'dark', 'side','dark side','frog', ''] },
    { id: 23, url: 'img/23.jpg', keywords: ['smart', 'think', 'funny','guy', ''] },
];

function getImgs() {

    const images = gImgs.filter(img => (img.keywords.includes(gFilterBy.txt)))

    if (!gFilterBy) return gImgs
    else return images
}

function setFilterBy(filterBy) {
    gFilterBy = { ...filterBy }
    return gFilterBy
}
