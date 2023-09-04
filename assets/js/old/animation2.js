// DOM Elements
const app = document.querySelector('.app')
const sections = app.querySelectorAll('section')
const s1 = document.querySelector('.s1')
const imgRight = document.querySelector('.s1-img--right')
const imgLeft = document.querySelector('.s1-img--left')

// States
let index = 0
const right = '.container .s1-img--right'
const left = '.container .s1-img--left'

const easing = 'linear'
const duration = 2500
const scale = {
    value: 1.1,
    duration,
    easing: 'easeInOutQuart'
}


const countPage = sections.length - 1

function translateImage(t, tX = 0, d = duration, eas = easing ) {
    anime({
        targets: t,
        translateX: tX,
        easing: eas,
        duration: d,
        scale
        
    })    
}

// EVENT LISTENER
document.addEventListener('DOMContentLoaded', () => {
    // Slider
    const splide = new Splide('.splide', {
        type: 'loop',
        perPage: 1,
        speed: 1000,
        autoplay: true,
    });
    splide.mount()

    translateImage(left, -800)
    translateImage(right, 300)
    
    // Scroll
    app.addEventListener('wheel', scrollFullPage, { passive: true })
    s1.addEventListener('mouseover', mouseover)
    
})

function mouseover (event) {
    translateImage(left, -800)
    translateImage(right, 300)
}

function scrollFullPage (e) {
    const scrollUp = e.deltaY === -100
    const scrollDown = e.deltaY === 100
    translateImage(left, 0, 2000)
    translateImage(right, 0, 2000)

    scrollUp && index--
    scrollDown && index++

    if (index <= 0 && scrollUp) {
        index = 0
        translateImage(left, -800)
        translateImage(right, 300)
        sections[index + 1].setAttribute('data-scroll', 'off')
        sections[index].setAttribute('data-scroll', 'on')
    }

    if (index >= countPage && scrollDown) {
        index = countPage
        sections[index - 1].setAttribute('data-scroll', 'off')
        sections[index].setAttribute('data-scroll', 'on')
    }

    scrollDown && sections[index - 1].setAttribute('data-scroll', 'off')
    scrollUp && sections[index + 1].setAttribute('data-scroll', 'off')
    sections[index].setAttribute('data-scroll', 'on')

}
