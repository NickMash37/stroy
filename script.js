const burger = document.querySelector('.burger-menu')
const headerMenu = document.querySelector('.header-menu')

const handleBurger = () => {
    headerMenu.classList.toggle('active-menu')
}

burger.addEventListener('click', handleBurger)