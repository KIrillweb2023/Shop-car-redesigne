function tabs(){
    const tabsHeader = document.querySelectorAll('.specification__wrapper__slider_tabs-img');
    const contentTabs = document.querySelectorAll('.specification__wrapper__slider_main');
    const contentParentTabs = document.querySelector('.specification__wrapper__slider_tabs');
  
    function contentTabOnVisible(){
      contentTabs.forEach(item =>{
          item.classList.add('hide');
          item.classList.remove('show');
      });
      tabsHeader.forEach(item =>{
          item.classList.remove('active')
      });
    }
    function contentTabOffVisible(i = 0){
        contentTabs[i].classList.add('show', 'fade');
        contentTabs[i].classList.remove('hide');
        tabsHeader[i].classList.add('active');
    }
    contentTabOnVisible();
    contentTabOffVisible();
    
    contentParentTabs.addEventListener('click', (event) =>{
        const target = event.target;
        if(target && target.classList.contains('specification__wrapper__slider_tabs-img')){
            tabsHeader.forEach((item, i) =>{
                if(target == item){
                    contentTabOnVisible();
                    contentTabOffVisible(i);
                }
            });
        }
    });
}

export default tabs;