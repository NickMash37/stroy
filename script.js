const burger = document.querySelector('.burger-menu')
const headerMenu = document.querySelector('.header-menu')

burger.addEventListener('click', function() {
    headerMenu.classList.toggle('active-menu')
})
