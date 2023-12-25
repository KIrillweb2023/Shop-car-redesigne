function menu(){
    const hamburger = document.querySelector(".header__wrapper__attribute_hamburger");
    const menu = document.querySelector('.menu');
    const closeHamburger = document.querySelector(".menu__block__header_close");


    function showMenuHamburger(openBtn, closeBtn, menu){
    openBtn.addEventListener('click', (e) =>{
        menu.classList.add('active');
        //document.body.style.overflow = "hidden";
    });

    closeBtn.addEventListener('click', (e) =>{
        menu.classList.remove('active');
        //document.body.style.overflow = "";
    });
    }

    showMenuHamburger(hamburger, closeHamburger, menu);
}

export default menu;