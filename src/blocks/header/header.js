(() => {

    const header = document.querySelector('.header');
    
    if(!header) return;

    const burger = header.querySelector('.header__burger');
    const menu = header.querySelector('.header__menu');

    burger.addEventListener('click', () => {
        menu.classList.toggle('active');
        burger.classList.toggle('active');
    });

    const setHeaderHeight = () => {
        document.body.style.setProperty('--header-height', `${header.offsetHeight}px`);
    };

    setHeaderHeight();

    window.addEventListener('resize', () => {
        if(window.innerWidth > 1024) {
            menu.classList.remove('active');
            burger.classList.remove('active');
            setHeaderHeight();
        }
    });

})();
