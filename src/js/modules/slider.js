function slider(){
    const offerSlider = document.querySelectorAll('.slide__item'), // Секция слайд
          slider = document.querySelector('.offer__slider'),
          prev = document.querySelector('.slider__counter__previos'), // Cтрелка влево
          next = document.querySelector('.slider__counter__next'), // стрелка вправо
          sliderWrapper = document.querySelector('.slider__wrapper'),
          sliderInner = document.querySelector('.inner__slider'),
          width = window.getComputedStyle(sliderWrapper).width;

    let indexSlide = 1,
        offset = 0;

    sliderInner.style.width = 100 * offerSlider.length + '%';
    sliderWrapper.style.overflow = 'hidden';

    offerSlider.forEach(item => item.style.width = width );
    slider.style.position = 'relative';

    function slideClean(str){ return +str.replace(/\D/g, ''); }

    function translateWidth(styleWidth){
        return styleWidth.style.transform = `translateX(-${offset}px)`;
    }

    next.addEventListener('click', () =>{
        (offset == slideClean(width) * (offerSlider.length - 1)) ? offset = 0 : offset += slideClean(width);
        translateWidth(sliderInner);
        (indexSlide == offerSlider.length) ? indexSlide = 1 : indexSlide++;
    });
    prev.addEventListener('click', () => {
        (offset == 0) ? offset = slideClean(width) * (offerSlider.length - 1) :   offset -= slideClean(width);
        translateWidth(sliderInner);
        (indexSlide == 1) ? indexSlide = offerSlider.length : indexSlide--;
    });
}

export default slider;