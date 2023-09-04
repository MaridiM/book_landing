const scene = document.getElementById('scene');
const parallaxInstance = new Parallax(scene);



document.addEventListener('DOMContentLoaded', () => {
    //  Content Loaded
    let animationComplited = true
    imgAnimation()
    // setTimeout(()

    // DOM Elements
    const app = document.querySelector('.app')
    const s1 = app.querySelector('.s1')

    const leftImg = document.querySelector('.s1-img--left')
    const rightImg = document.querySelector('.s1-img--right')
    
    app.addEventListener('wheel', (e) => {
        const scrollDelta = e.deltaY;

        if ( scrollDelta > 0 ) {
            imgAnimation('hide')
        }
        if ( scrollDelta < 0 ) {
            imgAnimation('default')
        }
        

    }, { passive: true })

    s1.addEventListener('mousemove', (e) => {
        
        if (animationComplited) {
            // Move by X position
            leftImg.style.transition = 'transform 1s ease-in-out'
            rightImg.style.transition = 'transform 1s ease-in-out'
            

            // Default
            if (!(centerX > e.x) && !(centerX < e.x) && !(centerY > e.y) && !(centerY < e.y)) {
                leftImg.style.transform = `translate(-20%, 0%) scale(1.2)`
                rightImg.style.transform = `translate(20%, 0%) scale(1.2)`
            }
            /*
                CORNERS
            */
            // // Top Right 1/16
            // if (e.x > 0 && e.x < X && e.y > 0 && e.y < Y) {
            //     leftImg.style.transform = `translate(-22%, -2%) scale(1.2)`
            //     rightImg.style.transform = `translate(18%, -2%) scale(1.2)`
            // }

            // // Down Left 16/16 
            // if (e.x > X3 && e.x < width && e.y > Y3 && e.y < height) {
            //     leftImg.style.transform = `translate(-18%, 2%) scale(1.2)`
            //     rightImg.style.transform = `translate(22%, 2%) scale(1.2)`
            // }
            // // Top Left 4/16 
            // if (e.x > X3 && e.x < width && e.y > 0 && e.y < Y) {
            //     leftImg.style.transform = `translate(-18%, -2%) scale(1.2)`
            //     rightImg.style.transform = `translate(21%, -2%) scale(1.2)`
            // }

            // // Top Left 13/16 
            // if (e.x > 0 && e.x < X && e.y > Y3 && e.y < height) {
            //     leftImg.style.transform = `translate(-22%, 2%) scale(1.2)`
            //     rightImg.style.transform = `translate(18%, 2%) scale(1.2)`
            // }


            // /*
            //     SIDES
            // */
            // // Left 5/16 | 9/16
            // if (e.x > 0 && e.y > Y && e.y < Y3) {
            //     leftImg.style.transform = `translate(-22%, 0%) scale(1.2)`
            //     rightImg.style.transform = `translate(18%, 0%) scale(1.2)`
            // }
            // // Right 8/16 | 12/16
            // if (e.x > X3 && e.x < width && e.y > Y && e.y < Y3) {
            //     leftImg.style.transform = `translate(-18%, 0%) scale(1.2)`
            //     rightImg.style.transform = `translate(22%, 0%) scale(1.2)`
            // }

            // /*
            //     TOP DOWN
            // */

            // // Top 2/16 | 3/16
            // if (e.x > X && e.x < X3 && e.y > 0 && e.y < Y) {
            //     leftImg.style.transform = `translate(-20%, 2%) scale(1.2)`
            //     rightImg.style.transform = `translate(20%, 2%) scale(1.2)`
            // }
            // // Down 14/16 | 15/16
            // if (e.x > X && e.x < X3 && e.y > Y3 && e.y < height) {
            //     leftImg.style.transform = `translate(-20%, -2%) scale(1.2)`
            //     rightImg.style.transform = `translate(20%, -2%) scale(1.2)`
            // }


            // /*
            //     CENTER
            // */
            // // Top Left 6/16
            // if(e.x > X && e.x < centerX && e.y > Y && e.y < centerY) {
            //     leftImg.style.transform = `translate(-21%, -1%) scale(1.2)`
            //     rightImg.style.transform = `translate(19%, -1%) scale(1.2)`
            // }
            // Top Right 7/16
            // if( ) {
                // leftImg.style.transform = `translate(-19%, -1%) scale(1.2)`
                // rightImg.style.transform = `translate(21%, -1%) scale(1.2)`

            // }
            // Down Left 10/16
            // if( ) {

            // }
            // Down Right 11/16
            // if( ) {

            // }

            
            // // Left
            // if (centerX > e.x) {
            //     leftImg.style.transform = `translate(-21%, 0%) scale(1.2)`
            //     rightImg.style.transform = `translate(19%, 0%) scale(1.2)`
            // }
                
            // // Right
            // if (centerX < e.x) {
            //     leftImg.style.transform = `translate(-19%, 0%) scale(1.2)`
            //     rightImg.style.transform = `translate(21%, 0%) scale(1.2)`
            // }


            // // Top
            // if (centerY > e.y) {
            //     leftImg.style.transform = `translate(-20%, 1%) scale(1.2)`
            //     rightImg.style.transform = `translate(20%, 1%) scale(1.2)`
            // }

            // // Bottom
            // if (centerY < e.y) {
            //     leftImg.style.transform = `translate(-20%, -1%) scale(1.2)`
            //     rightImg.style.transform = `translate(20%, -1%) scale(1.2)`
            // }

            // // Right Top
            // if (centerX > e.x && centerY > e.y) {
            //     leftImg.style.transform = `translate(-21%, -1%) scale(1.2)`
            //     rightImg.style.transform = `translate(19%, -1%) scale(1.2)`
            // }

            // // Right Down
            // if (centerX > e.x && centerY < e.y) {
            //     leftImg.style.transform = `translate(-21%, 1%) scale(1.2)`
            //     rightImg.style.transform = `translate(19%, 1%) scale(1.2)`
            // }
            // // Left Top
            // if (centerX < e.x && centerY > e.y) {
            //     leftImg.style.transform = `translate(-19%, -1%) scale(1.2)`
            //     rightImg.style.transform = `translate(21%, -1%) scale(1.2)`
            // }

            // // left Down
            // if (centerX < e.x && centerY < e.y) {
            //     leftImg.style.transform = `translate(-19%, 1%) scale(1.2)`
            //     rightImg.style.transform = `translate(21%, 1%) scale(1.2)`
            // }


            // if (centerY > e.y) {
            //     leftImg.style.transform = `translate(-20%, 1%) scale(1.2)`
            //     rightImg.style.transform = `translate(20% -1) scale(1.2)`
                
            // }
            // if (centerY < e.y) {
            //     leftImg.style.transform = `translate(-20%, -1%) scale(1.2)`
            //     rightImg.style.transform = `translate(20%, 1%) scale(1.2)`
            // }

        }

        // console.log(e.x, e.y)
    })


})


/**
 * Image Animation
 * @param {'default' | 'hide'} type 
 */
function imgAnimation (type = 'default') {
    const leftImg = document.querySelector('.s1-img--left')
    const rightImg = document.querySelector('.s1-img--right')

    const animation = () => {
        leftImg.style.transition = 'transform .2s ease-in-out'
        rightImg.style.transition = 'transform .2s ease-in-out'

        leftImg.style.transform = 'translate(-20%, 0%)'
        rightImg.style.transform = 'translate(20%, 0%)'

        setTimeout(() => {
            leftImg.style.transform = 'translate(-20%, 0%) scale(1.2)'    
            rightImg.style.transform = 'translate(20%, 0%) scale(1.2)'
        }, 200)
    }

    const animationHide = () => {
        leftImg.style.transition = 'transform 2s ease-in-out'
        rightImg.style.transition = 'transform 2s ease-in-out'
        
        leftImg.style.transform = 'translateX(-75%, 0%)'
        rightImg.style.transform = 'translateX(100%, 0%)'
    }

    switch(type) {
        case 'default': 
            animation()
            break
        case 'hide':
            animationHide()
            break
        default: 
            animation()
            break
    }
}




