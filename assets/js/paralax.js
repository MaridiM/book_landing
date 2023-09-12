const scene = document.querySelector('.scene');
const layers = scene.querySelectorAll('.scene-layer');
const app = document.querySelector('.app');
const sections = document.querySelectorAll('.section');


const layersParams = {
    1920: {
        minSize: 1641, 
        sceneSpeed: '0.4',
        size: [
            [1970, 1270],
            [2100, 1352],
            [1427, 1564],
            [2274, 1279],
            [2178, 1738],
            [900, 650],
        ],
        positions: [
            [-290, -270],
            [940, -60],
            [-240, 380],
            [620, 463],
            [-136, 1150],
            [715, 870],
        ],
    },
    1640: {
        minSize: 1441,
        sceneSpeed: '0.4',
        size: [
            [1970, 1270],
            [2100, 1352],
            [1427, 1564],
            [2274, 1279],
            [2178, 1738],
            [900, 650],
        ],
        positions: [
            [-400, -270],
            [810, -60],
            [-340, 380],
            [620, 463],
            [-136, 1150],
            [715, 870],
        ],
    },
    1440: {
        minSize: 1367,
        sceneSpeed: '0.4',
        size: [
            [1775, 1145],
            [1892, 1218],
            [1162, 1274],
            [2049, 1152],
            [1963, 1567],
            [811, 586],
        ],
        positions: [
            [-480, -270],
            [590, -50],
            [-340, 380],
            [280, 463],
            [-136, 970],
            [450, 750],
        ],
    },
    1366: {
        minSize: 1281,
        sceneSpeed: '0.4',
        size: [
            [1672, 1080],
            [1808, 1164],
            [856, 938],
            [1920, 1080],
            [1612, 1286],
            [728, 526],
        ],
        positions: [
            [-540, -210],
            [500, -45],
            [-226, 460],
            [220, 460],
            [-60, 1120],
            [450, 750],
        ],
    },
    1280: {
        minSize: 1025,
        sceneSpeed: '0.4',
        size: [
            [1509, 974],
            [1607, 1036],
            [988, 1083],
            [1742, 980],
            [1668, 1332],
            [689, 498],
        ],
        positions: [
            [-400, -270],
            [500, -45],
            [-340, 240],
            [260, 400],
            [-136, 920],
            [380, 640],
        ],
    },
    1024: {
        minSize: 757,
        sceneSpeed: '0.4',
        size: [
            [1243, 802],
            [1325, 853],
            [814, 892],
            [1434, 807],
            [1374, 1097],
            [568, 410],
        ],
        positions: [
            [-364, -184],
            [390, -36],
            [-250, 250],
            [190, 360],
            [-70, 730],
            [316, 480],
        ],
    },
    756: {
        minSize: 547,
        sceneSpeed: '0.4',
        size: [
            [888, 573],
            [946, 609],
            [581, 637],
            [1025, 576],
            [981, 783],
            [406, 293],
        ],
        positions: [
            [-364, -110],
            [196, -36],
            [-270, 200],
            [86,230],
            [-70, 530],
            [170, 364],
        ],
    },
    546: {
        minSize: 481,
        sceneSpeed: '0.22',
        size: [
            [1314, 848],
            [1400, 902],
            [860, 943],
            [1516, 853],
            [1452, 1159],
            [600, 434],
        ],
        positions: [
            [-790, -143],
            [36, -36],
            [-582, 338],
            [-194, 360],
            [-242, 823],
            [-18, 600],
        ],
    },
    480: {
        minSize: 321,
        sceneSpeed: '0.22',
        size: [
            [1314, 848],
            [1400, 902],
            [860, 943],
            [1516, 853],
            [1452, 1159],
            [600, 434],
        ],
        positions: [
            [-790, -180],
            [0, -36],
            [-600, 296],
            [-194, 360],
            [-434, 716],
            [-18, 600],
        ],
    },
    320: {
        minSize: 0,
        sceneSpeed: '0.22',
        size: [
            [783, 506],
            [835, 538],
            [513, 562],
            [904, 509],
            [866, 691],
            [358, 259],
        ],
        positions: [
            [-450, -104],
            [30, -24],
            [-340, 180],
            [-240, 207],
            [-242, 540],
            [-58, 340],
        ],
    },
}


for(let size in layersParams) {
    const screenSize = window.matchMedia(`(max-width: ${size}px) and (min-width: ${layersParams[size].minSize}px)`);

    if(screenSize.matches) {
        // Set Default Layers background position
        layers.forEach((layer, index) =>{
            layer.style.backgroundSize = `${layersParams[size].size[index][0]}px ${layersParams[size].size[index][1]}px`
            layer.style.backgroundPosition = `${layersParams[size].positions[index][0]}px ${layersParams[size].positions[index][1]}px`
            setTimeout(() => {
                layer.style.transition = 'all .3s ease-out'
            }, 500)
        })


        app.addEventListener('wheel', () => {
            const scrollPosition = window.scrollY;

            layers.forEach((layer, index) => {
                const speedLayer = parseFloat(layersParams[size].sceneSpeed) || 1;
                const offset = scrollPosition * speedLayer;
                
                layer.style.backgroundPosition = `${layersParams[size].positions[index][0]}px ${layersParams[size].positions[index][1] - offset}px`
            });
        }, { passive: true });
        
    }
}