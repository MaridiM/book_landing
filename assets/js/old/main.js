const leftImg = document.querySelector('.s1-img--left')
const rightImg = document.querySelector('.s1-img--right')

document.addEventListener('DOMContentLoaded', () => {
    /*
        Section 1
    */
    //  Content Loaded
    let animationComplited = false
    imgAnimation()
    
    setTimeout(() => animationComplited = true, 4000)
    
    // DOM Elements
    const app = document.querySelector('.app')
    const navItems = document.querySelectorAll('.nav-item a')
    const s1 = app.querySelector('.s1')
    console.log(navItems)

    // Nav Clicked
    navItem.map(item => {
        item.addEventListener('click', (e) => {
            console.log(e.target.getAttribute('href'))
        })
    })
    
    // Scrolling
    app.addEventListener('wheel', (e) => {
        // Show | Hide Images if scrolling
        const scrollDelta = e.deltaY;
        if (scrollDelta > 0) {
            animationComplited = false
            imgAnimation('hide')
        } else {
            animationComplited = false
            imgAnimation('show')
        }
    }, { passive: true })


    // Mouse Moving
    s1.addEventListener('mousemove', (e) => {
        // Cursor parallax
        if (animationComplited) {
            const centerX = window.innerWidth / 2
            const centery = window.innerHeight / 2

            // To Left
            if (centerX > e.clientX) {
                transformImage({
                     lx: '-22%',
                     rx: '18%',
                     time: '1.5s'
                 })
            }
            
            // To Right
            if (centerX < e.clientX) {
                transformImage({
                    lx: '-18%',
                    rx: '22%',
                    time: '1.5s'
                })
            }
        }
    })



    /*
        Section 2
    */
    // Init splide 
})


/**
 * Image Animation
 * @param {'default' | 'hide' | 'show'} type 
 */
function imgAnimation (type = 'default') {
    
   
    const animation = () => {
        transformImage({ lx: '-20%', rx: '20%', scale: '1', time: '3s' })
        setTimeout(() => {
            transformImage({ lx: '-20%', rx: '20%', time: '2s'})
        }, 1000)
    }

    const animationHide = () => {
        transformImage({ lx: '-75%', rx: '95%', time: '2s' })
    }
    const animationShow = () => {
        transformImage({ lx: '-20%', rx: '20%', time: '2s' })
    }

    switch(type) {
        case 'default': 
            animation()
            break
        case 'hide':
            animationHide()
            break
        case 'show':
            animationShow()
            break
        default: 
            animation()
            break
    }
}

/**
 * Transform Time for img
 */
function transformImage(transform) {
    const lx = transform.lx ? transform.lx : '0%'
    const ly = transform.ly ? transform.ly : '0%'
    const scale = transform.scale ? transform.scale : '1.2' 
    const rx = transform.rx ? transform.rx : '0%'
    const ry = transform.ry ? transform.ry : '0%'
    const time = transform.time ? transform.time : '3s'

    const transition = `transform ${time} ease-in-out`
        
    leftImg.style.transition = transition
    rightImg.style.transition = transition

    leftImg.style.transform = `translate(${lx}, ${ly}) scale(${scale})`
    rightImg.style.transform = `translate(${rx}, ${ry}) scale(${scale})`
}
