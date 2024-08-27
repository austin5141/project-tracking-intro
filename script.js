const hamburger = document.querySelector(".open")
const x_button = document.querySelector(".close")
const mobile_links = document.querySelector('.mobile_links')

function openMenu() {
    hamburger.classList.add('hidden')
    x_button.classList.remove('hidden')
    mobile_links.classList.add('visible')
}

function closeMenu() {
    x_button.classList.add('hidden')
    hamburger.classList.remove('hidden')
    mobile_links.classList.remove('visible')
}