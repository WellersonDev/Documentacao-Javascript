

function abrirFechar01() {
    let tema01 = document.querySelector('iframe#tema01')
    console.log(tema01)

    if(tema01.style.display == 'block') {
        tema01.style.display = 'none'
    } else {
        tema01.style.display = 'block'
    }
}

function abrirFechar02() {
    let tema02 = document.querySelector('iframe#tema02')
    console.log(tema02)

    if(tema02.style.display == 'block') {
        tema02.style.display = 'none'
    } else {
        tema02.style.display = 'block'
    }
}

function abrirFechar03() {
    let tema03 = document.querySelector('iframe#tema03')
    console.log(tema03)

    if(tema03.style.display == 'block') {
        tema03.style.display = 'none'
    } else {
        tema03.style.display = 'block'
    }
}

function abrirFechar04() {
    let tema04 = document.querySelector('iframe#tema04')
    console.log(tema04)

    if(tema04.style.display == 'block') {
        tema04.style.display = 'none'
    } else {
        tema04.style.display = 'block'
    }
}


function troca01() {
    let assunto01 = document.querySelector('iframe#assunto01')
    let assunto02 = document.querySelector('iframe#assunto02')
    let assunto03 = document.querySelector('iframe#assunto03')
    let assunto04 = document.querySelector('iframe#assunto04')

    if(window.innerWidth >= 768) {
        assunto01.removeAttribute('class')
        assunto02.removeAttribute('class')
        assunto03.removeAttribute('class')
        assunto04.removeAttribute('class')
        assunto01.setAttribute('class', 'indice1')
        assunto02.setAttribute('class', 'indice0')
        assunto03.setAttribute('class', 'indice0')
        assunto04.setAttribute('class', 'indice0')
    }
}

function troca02() {
    let assunto01 = document.querySelector('iframe#assunto01')
    let assunto02 = document.querySelector('iframe#assunto02')
    let assunto03 = document.querySelector('iframe#assunto03')
    let assunto04 = document.querySelector('iframe#assunto04')

    if(window.innerWidth >= 768) {
        assunto01.removeAttribute('class')
        assunto02.removeAttribute('class')
        assunto03.removeAttribute('class')
        assunto04.removeAttribute('class')
        assunto01.setAttribute('class', 'indice0')
        assunto02.setAttribute('class', 'indice1')
        assunto03.setAttribute('class', 'indice0')
        assunto04.setAttribute('class', 'indice0')
    }
}

function troca03() {
    let assunto01 = document.querySelector('iframe#assunto01')
    let assunto02 = document.querySelector('iframe#assunto02')
    let assunto03 = document.querySelector('iframe#assunto03')
    let assunto04 = document.querySelector('iframe#assunto04')

    if(window.innerWidth >= 768) {
        assunto01.removeAttribute('class')
        assunto02.removeAttribute('class')
        assunto03.removeAttribute('class')
        assunto04.removeAttribute('class')
        assunto01.setAttribute('class', 'indice0')
        assunto02.setAttribute('class', 'indice0')
        assunto03.setAttribute('class', 'indice1')
        assunto04.setAttribute('class', 'indice0')
    }
}

function troca04() {
    let assunto01 = document.querySelector('iframe#assunto01')
    let assunto02 = document.querySelector('iframe#assunto02')
    let assunto03 = document.querySelector('iframe#assunto03')
    let assunto04 = document.querySelector('iframe#assunto04')

    if(window.innerWidth >= 768) {
        assunto01.removeAttribute('class')
        assunto02.removeAttribute('class')
        assunto03.removeAttribute('class')
        assunto04.removeAttribute('class')
        assunto01.setAttribute('class', 'indice0')
        assunto02.setAttribute('class', 'indice0')
        assunto03.setAttribute('class', 'indice0')
        assunto04.setAttribute('class', 'indice1')
    }
}