const burger = document.querySelector('.burger-menu')
const headerMenu = document.querySelector('.header-menu')
const input = document.querySelector('.input')
const title = document.querySelector('.title')

burger.addEventListener('click', function() {
    headerMenu.classList.toggle('active-menu')
})

input.addEventListener('change', () => {
    let userName = input.value
    title.innerHTML = `Привет, ${userName}!`
    input.classList.add('disabled')
    input.value = ''
})
