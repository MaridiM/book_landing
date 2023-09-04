// Navigation
const navs = document.querySelectorAll('.nav-item')
navs.forEach((nav) => {
    nav.addEventListener('click', () => {
        const activeNav = document.querySelector('.nav-item--active')
        activeNav.classList.remove('nav-item--active')
        nav.classList.add('nav-item--active')
    })
})