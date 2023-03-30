const btn = document.querySelector('.header-menu')
const headerMenu = document.querySelector('.header')

const handleClick = () => {
    headerMenu.classList.toggle('disabled')
}

btn.addEventListener('click', handleClick)
