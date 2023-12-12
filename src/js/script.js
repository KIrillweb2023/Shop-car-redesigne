"use strict"

document.addEventListener("DOMContentLoaded", (e) =>{

  const img = document.querySelector("img.main__wrapper__image_photo");

  function replaseImg(block){
    const arr = [
      './img/mainPage-components/slide/one.jpg', 
      './img/mainPage-components/slide/two.jpg', 
      './img/mainPage-components/slide/three.png'
    ];
    let indificator = 0;
    setInterval(()=>{
        if(indificator < arr.length){
            block.setAttribute('src', `${arr[indificator]}`);
            indificator = indificator + 1;
            if(indificator === arr.length){
                return indificator = 0;
            }
        }
      }, 3900);
      console.log(1);
    }
    replaseImg(img);



    function module_menu(){
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
    module_menu();

    function module_catalogPage(){
      const cards = document.querySelectorAll(".catalog__wrapper__item");

      function cardHover(cards){
          cards.forEach((item) =>{
              item.addEventListener("mousemove", (e) =>{
                  item.classList.add('active');
              })
              item.addEventListener("mouseout", (e) =>{
                  item.classList.remove('active');
              })
          });
      }
      cardHover(cards);
    }
    module_catalogPage();
    
    
    function module_registrPage(){
      const logbtn = document.querySelector(".logout__wrapper__form_login");
      const modalLog = document.querySelector(".logout__wrapper__login");
      const regBtn = document.querySelector(".logout__wrapper__login_login");
      const modalReg = document.querySelector(".logout__wrapper__form");

      function userNow(log, reg, modalReg, modalLog){
        reg.addEventListener('click', () =>{
          modalReg.style.display = 'none';
          modalLog.style.display = 'flex';
        });
        log.addEventListener('click', () =>{
          modalReg.style.display = '';
          modalLog.style.display = '';
        });
      }
      
      if(regBtn){
        userNow(regBtn, logbtn, modalReg, modalLog);
      }
    }

    module_registrPage();
    
    

    function module_accordeonPage(){
      let itemHead = document.querySelectorAll(".stages__item_head");
      let itemHead2 = document.querySelectorAll(".answers__item_head");
  
      function collapseSection(element, heightArg) {
        var sectionHeight = element.scrollHeight;
        var elementTransition = element.style.transition;
        element.style.transition = '';
        requestAnimationFrame(function () {
          element.style.height = sectionHeight + 'px';
          element.style.transition = elementTransition;
          requestAnimationFrame(function () {
            element.style.height = heightArg;
          });
        });
        element.setAttribute('data-collapsed', 'true');
      }
      function expandSection(element) {
        var sectionHeight = element.scrollHeight;
        element.style.height = sectionHeight + 'px';
        element.addEventListener('transitionend', function (e) {
        });
        element.setAttribute('data-collapsed', 'false');
      }
      function itemAccordion(elem, heightArg) {
        
        elem.forEach(item => {
          item.addEventListener("click", (e) => {
            item.querySelector("svg").classList.toggle("activeArrow");
            var isCollapsed = item.parentNode.getAttribute('data-collapsed') === 'true';
            if (isCollapsed) {
              expandSection(item.parentNode);
              item.parentNode.setAttribute('data-collapsed', 'false');
            } else {
              collapseSection(item.parentNode, heightArg);
            }
          });
        });
      }
      if (window.screen.width >= 768) {
        itemAccordion(itemHead, "72px");
        itemAccordion(itemHead2, "50px");
      } else if (window.screen.width < 768 && window.screen.width >= 425) {
        itemAccordion(itemHead, "57px");
        itemAccordion(itemHead2, "38px");
      } else {
        itemAccordion(itemHead, "49px");
        itemAccordion(itemHead2, "38px");
      }
      let projects = document.querySelectorAll(".projects__item");
        projects.forEach((item, i) => {
          if (i > 3) {
            item.style.display = "none";
          }
      });
    }
    module_accordeonPage();
    
});