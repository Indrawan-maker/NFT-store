
const toggle = document.getElementById('.menu-toggle')
const menu = document.getElementById('.header-menu')

toggle.addEventListener('click' , () => {
    menu.classList.toggle('open')
})