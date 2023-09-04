const scene = document.querySelector('.scene');
const layers = scene.querySelectorAll('.scene-layer');
const app = document.querySelector('.app');
const sections = document.querySelectorAll('.section');

const layersPosition = [
    [-290, -270],
    [956, -120],
    [-340, 380],
    [620, 463],
    // [-136, 1600],
    [-136, 1130],
    [715, 870], 
]

// Set Default Layers background position
layers.forEach((layer, index) =>{
    layer.style.backgroundPosition = `${layersPosition[index][0]}px ${layersPosition[index][1]}px`
    setTimeout(() => {
        layer.style.transition = 'all .3s ease-out'
    }, 500)
})

app.addEventListener('wheel', () => {
    const scrollPosition = window.scrollY;

    layers.forEach((layer, index) => {
        const speedLayer = parseFloat(layer.parentElement.getAttribute('data-speed')) || 1;
        const offset = scrollPosition * speedLayer;
        
        layer.style.backgroundPosition = `${layersPosition[index][0]}px ${layersPosition[index][1] - offset}px`
    });
}, { passive: true });