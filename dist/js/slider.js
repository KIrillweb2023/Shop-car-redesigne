const offerSlider = document.querySelectorAll('.slide__item'); // Секция слайд
const slider = document.querySelector('.offer__slider');

const prev = document.querySelector('.slider__counter__previos'); // Cтрелка влево
const next = document.querySelector('.slider__counter__next'); // стрелка вправо

const sliderWrapper = document.querySelector('.slider__wrapper');
const sliderInner = document.querySelector('.inner__slider');

const width = window.getComputedStyle(sliderWrapper).width;

let indexSlide = 1;
let offset = 0;



sliderInner.style.width = 100 * offerSlider.length + '%';
sliderWrapper.style.overflow = 'hidden';

offerSlider.forEach(item =>{
    item.style.width = width;
});
slider.style.position = 'relative';

function deleteDot(str){
    return +str.replace(/\D/g, '');
}
function translateWidth(styleWidth){
    return styleWidth.style.transform = `translateX(-${offset}px)`;
}
next.addEventListener('click', () =>{
    if (offset == deleteDot(width) * (offerSlider.length - 1)){
        offset = 0;
    } else {
        offset += deleteDot(width);
    }
    translateWidth(sliderInner);
    if(indexSlide == offerSlider.length){
        indexSlide = 1;
    }else {
        indexSlide++;
    }
});
prev.addEventListener('click', () => {
    if (offset == 0){
        
        offset = deleteDot(width) * (offerSlider.length - 1);
    } else {
        offset -= deleteDot(width);
    }
    translateWidth(sliderInner);
    if(indexSlide == 1){
        
        indexSlide = offerSlider.length;
    }else {
        indexSlide--;
    }
});
