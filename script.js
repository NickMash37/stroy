const burger = document.querySelector('.burger-menu')
const headerMenu = document.querySelector('.header-menu')
const callToClient = document.querySelector('.call-back')

const handleBurger = () => {
    headerMenu.classList.toggle('active-menu')
}

burger.addEventListener('click', handleBurger)

callToClient.addEventListener('click', function() {
        (function(w,d,u){
                var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/60000|0);
                var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);
        })(window,document,'https://cdn-ru.bitrix24.ru/b24058702/crm/site_button/loader_24_jabgbp.js');
})