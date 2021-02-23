let burger = document.querySelector('.save-life__burger')
let nav = document.querySelector('.save-life__nav')
let yellowBackGround = document.querySelector('.save-life__container')
let closeElem = document.querySelector('.save-life__nav-close-element')
let overlay = document.querySelector('.save-life__mobile-overlay')

burger.addEventListener('click', burgerActivator)
closeElem.addEventListener('click', burgerActivator)
overlay.addEventListener('click', burgerActivator)

function burgerActivator() {
    burger.classList.toggle('active')
    nav.classList.toggle('active')
    yellowBackGround.classList.toggle('active')
    overlay.classList.toggle('active')
}


